import prisma from "~/lib/prisma";

export default async function getRankedLiveability(req, res) {
  // Check if the request has a valid query and HTTP method
  if (!req.query) {
    return res.status(200).json(null);
  }
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const contextQuery = req.query;

  // Extract and safely parse query parameters
  const rent = parseFloat(contextQuery.rent);
  const affordability = parseFloat(contextQuery.affordability);
  const transport = parseFloat(contextQuery.transport);
  const park = parseFloat(contextQuery.park);
  const crime = parseFloat(contextQuery.crime);
  const road = parseFloat(contextQuery.road);
  const university = contextQuery.university;

  // Get nearby suburbs based on university or get all suburbs
  let nearbySuburbs = university
    ? (await prisma.uni_suburbs.findMany({ where: { university } }))
        .map((suburb) => suburb.nearby_suburbs)
        .flat()
        .map((item) => item.replace(/['\[\]]/g, "").trim())
        .flatMap(item => item.split(',').map(suburb => suburb.trim())) 
    : (await prisma.liveability_data.findMany()).map((item) => item.suburb);

  // Map ratings to weightages
  const ratingArray = [1, 2, 3, 4, 5];
  const weightageArray = [1.0, 1.5, 2.0, 2.5, 3.0];
  const rentWeightage = weightageArray[ratingArray.indexOf(affordability)];
  const transportWeightage = weightageArray[ratingArray.indexOf(transport)];
  const parkWeightage = weightageArray[ratingArray.indexOf(park)];
  const crimeWeightage = weightageArray[ratingArray.indexOf(crime)];
  const roadWeightage = weightageArray[ratingArray.indexOf(road)];

  // Function to rank suburbs based on different criteria
  const rankSuburbs = (array) => {
    return array.map((item) => {
        let totalPenalty = 0;
        let boost = 0;

        if (item.average_rent <= rent && nearbySuburbs.includes(item.suburb)) {
          boost = 2;
        }

        if (item.average_rent < rent) totalPenalty += -2.0;
        if (!nearbySuburbs.includes(item.suburb)) totalPenalty += -2.0;

        const baseScore =
          item.rent_score * rentWeightage +
          item.transport_score * transportWeightage +
          item.openspace_score * parkWeightage +
          item.crime_score * crimeWeightage +
          item.saferoads_score * roadWeightage +
          totalPenalty;

        const score = baseScore + boost;

        return {
          suburb: item.suburb,
          liveability_score: score,
          meetsCriteria:
            item.average_rent <= rent && nearbySuburbs.includes(item.suburb),
        };
      })
      .sort((a, b) => {
        if (a.meetsCriteria && !b.meetsCriteria) return -1;
        if (!a.meetsCriteria && b.meetsCriteria) return 1;
        return b.liveability_score - a.liveability_score;
      });
  };

  const liveabilityData = await prisma.liveability_data.findMany();
  let rankedSuburbs = rankSuburbs(liveabilityData);

  for (let item of rankedSuburbs) {
    const dbResponse = await prisma.data_by_suburb.findFirst({
      where: { suburb: item.suburb },
      select: {
        lga: true,
        average_rent: true,
        ptv_stop_count: true,
        openspace_count: true,
        crash_count: true,
        crime_count: true,
      },
    });

    if (dbResponse) {
      item.lga = dbResponse.lga;
      item.average_rent = parseFloat(dbResponse.average_rent);
      item.ptv_stop_count = dbResponse.ptv_stop_count;
      item.openspace_count = dbResponse.openspace_count;
      item.crash_count = dbResponse.crash_count;
      item.crime_count = dbResponse.crime_count;
    }
  }

  // Normalize the scores
  const maxScore = Math.max(...rankedSuburbs.map(item => item.liveability_score));
  const minScore = Math.min(...rankedSuburbs.map(item => item.liveability_score));
  rankedSuburbs = rankedSuburbs.map(item => ({
    ...item,
    liveability_score: (item.liveability_score - minScore) / (maxScore - minScore)
  }));

  res.status(200).json(
    rankedSuburbs.map((item) => ({
      suburb: item.suburb,
      liveability_score: item.liveability_score * 100,
    }))
  );
}