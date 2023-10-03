import prisma from "~/lib/prisma";

export default async function getRankedLiveability(req, res) {
  // Check for valid request and HTTP method
  if (!req.query) {
    return res.status(200).json(null);
  }
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const contextQuery = req.query;

  // Safely parse query parameters
  const rent = parseFloat(contextQuery.rent);
  // const affordability = parseFloat(contextQuery.affordability);
  const transport = parseFloat(contextQuery.transport);
  const park = parseFloat(contextQuery.park);
  const crime = parseFloat(contextQuery.crime);
  const road = parseFloat(contextQuery.road);
  const university = contextQuery.university;

  // Map ratings to weightages
  const ratingArray = [1, 2, 3, 4, 5];
  const weightageArray = [1.0, 1.5, 2.0, 2.5, 3.0];
  // const rentWeightage = weightageArray[ratingArray.indexOf(affordability)];
  const transportWeightage = weightageArray[ratingArray.indexOf(transport)];
  const parkWeightage = weightageArray[ratingArray.indexOf(park)];
  const crimeWeightage = weightageArray[ratingArray.indexOf(crime)];
  const roadWeightage = weightageArray[ratingArray.indexOf(road)];

  const uniScoreGroups = {
    5: [],
    4: [],
    3: [],
    2: [],
    default: [],
  };

  // Function to rank suburbs based on different criteria
  const rankSuburbs = async (array) => {
    for (let item of array) {
      let uniScore = 1; // Default value in case university data isn't found
      const uniData = await prisma.university.findFirst({
        where: {
          uni_to_suburb: item.suburb,
          university: university,
        },
      });

      if (uniData) {
        switch (uniData.distance_score) {
          case 5:
            uniScore = 5;
            uniScoreGroups[5].push(item.suburb); // Add the suburb to the appropriate score group
            break;
          case 4:
            uniScore = 2.5;
            uniScoreGroups[4].push(item.suburb);
            break;
          case 3:
            uniScore = 2;
            uniScoreGroups[3].push(item.suburb);
            break;
          case 2:
            uniScore = 1.5;
            uniScoreGroups[2].push(item.suburb);
            break;
          default:
            uniScoreGroups.default.push(item.suburb);
            break;
        }
      }

      const rentScore =
        item.average_rent <= rent
          ? 5
          : item.average_rent <= rent * 1.05
          ? 2.5
          : item.average_rent <= rent * 1.1
          ? 2
          : item.average_rent <= rent * 1.2
          ? 1.5
          : 1;

      const liveability = await prisma.liveability.findFirst({
        where: {
          liveability_suburb: item.suburb,
        },
      });

      if (liveability) {
        item.liveability_score =
          liveability.ptv_score * transportWeightage +
          liveability.openspace_score * parkWeightage +
          liveability.crime_score * crimeWeightage +
          liveability.crash_score * roadWeightage +
          uniScore +
          rentScore;
      }
    }

    return array.sort((a, b) => b.liveability_score - a.liveability_score);
  };

  const suburbData = await prisma.suburb.findMany();
  let rankedSuburbs = await rankSuburbs(suburbData);

  // Normalize the scores
  const maxScore = Math.max(
    ...rankedSuburbs.map((item) => item.liveability_score)
  );
  const minScore = Math.min(
    ...rankedSuburbs.map((item) => item.liveability_score)
  );
  rankedSuburbs = rankedSuburbs.map((item) => ({
    ...item,
    liveability_score:
      (item.liveability_score - minScore) / (maxScore - minScore),
  }));

  res.status(200).json({
    rankedSuburbs: rankedSuburbs.map((item) => ({
      suburb: item.suburb,
      liveability_score: item.liveability_score,
      lga: item.lga,
      average_rent: item.average_rent,
    })),
    uniScoreGroups: uniScoreGroups,
  });
}
