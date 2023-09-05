import prisma from "~/lib/prisma";

export default async function getRankedLiveability(req, res) {
    if (!req.query) {
        let contextQuery = req.query;
        let rent = eval(contextQuery.rent);
        let affordability = eval(contextQuery.affordability);
        let transport = eval(contextQuery.transport);
        let park = eval(contextQuery.park);
        let crime = eval(contextQuery.crime);
        let road = eval(contextQuery.road);
        let university = contextQuery.university;
        if (req.method !== 'GET') {
            return res.status(405).json({ message: "Method not allowded" });
        }

        console.log("api query contents: " + rent + " " + affordability + " " + transport + " " + park + " " + crime + " " + road + " " + university);
        let nearbySuburbs = [];
        // First, we need to find out if suburbs should be all Melbourne suburbs, or near to a specific university.
        if (university != "") {
            nearbySuburbs = await prisma.uni_suburbs.findMany({
                where: {
                    university: university
                }
            })
            nearbySuburbs = JSON.parse(JSON.stringify(nearbySuburbs));
            // console.log("backend UNIchoice: " + JSON.stringify(nearbySuburbs));
            nearbySuburbs = eval(nearbySuburbs[0].nearby_suburbs);
        }
        else {
            nearbySuburbs = await prisma.liveability_data.findMany({
                where: {
                },
                // select: {
                //     nearby_suburbs: true
                // }
            })
            nearbySuburbs = JSON.parse(JSON.stringify(nearbySuburbs));
            let nearbySuburbNames = [];
            nearbySuburbs.forEach(getSuburb)
            function getSuburb(item) {
                nearbySuburbNames.push(item.suburb);
            }
            nearbySuburbs = nearbySuburbNames;
            // console.log("No UNIchoice, all suburbs retrieved: " + nearbySuburbs);
        }


        console.log("\nACTUAL  NEARBY  SUBURBS: " + nearbySuburbs);

        let withinRent = await prisma.liveability_data.findMany({
            where: {
                average_rent: {
                    lte: rent,
                }
            },
            // select: {
            //     suburb: true,
            //     average_rent: true
            // }
        });
        withinRent = JSON.parse(JSON.stringify(withinRent));
        // console.log("\nbackend WITHINRENTchoice: " + JSON.stringify(withinRent));

        // Now, find the overlap in nearbySuburbs and withinRent suburbs.
        let nearbyWithinRent = [];
        withinRent.forEach(findNearbyWithinRent);

        function findNearbyWithinRent(item) {
            function isWithinRent(element, index, array) {
                if (element === item.suburb) {
                    nearbyWithinRent.push(item)
                }
                else {
                    // console.log("SUBURB" + element + "NOT FOUND IN WITHINRENT ARRAY" + nearbyWithinRent)
                }
            }
            nearbySuburbs.some(isWithinRent)
        }

        console.log("\n\tNEARBY WITHIN RENT: " + JSON.stringify(nearbyWithinRent));

        // Before ranking the filtered suburbs, define weightage of criteria based on user input of relevance.
        let ratingArray = [1, 2, 3, 4, 5];
        let weightageArray = [1.0, 1.5, 2.0, 2.5, 3.0];

        // Map ratings to weightages for each criterion
        let rentWeightage = weightageArray[ratingArray.indexOf(affordability)]
        let transportWeightage = weightageArray[ratingArray.indexOf(eval(transport))]
        let parkWeightage = weightageArray[ratingArray.indexOf(eval(park))]
        let crimeWeightage = weightageArray[ratingArray.indexOf(eval(crime))]
        let roadWeightage = weightageArray[ratingArray.indexOf(eval(road))]
        console.log("\n\tRENT  WEIGHTAGE: " + affordability);

        // Now, a ranking function is defined and applied to get the final ranked array.
        let nearbyWithinRentRanked = rankSuburbs(nearbyWithinRent);
        function rankSuburbs(array) {
            let finalArray = [];
            array.forEach(calculateLiveability);
            function calculateLiveability(item) {
                let rentNumerator = eval(item.rent_score) * rentWeightage;
                let transportNumerator = eval(item.transport_score) * transportWeightage;
                let parkNumerator = eval(item.openspace_score) * parkWeightage;
                let crimeNumerator = eval(item.crime_score) * crimeWeightage;
                let roadNumerator = eval(item.saferoads_score) * roadWeightage;
                let denominator = rentWeightage + transportWeightage + parkWeightage + crimeWeightage + roadWeightage;
                let score = ((rentNumerator + transportNumerator + parkNumerator + crimeNumerator + roadNumerator) / denominator).toFixed(2);
                // console.log("\n\tFINAL SCORE of " + item.suburb + ": " + JSON.stringify(score));
                finalArray.push({ "suburb": item.suburb, "liveability_score": eval(score) })
            }
            //Now, sort this array in descending order.
            function comparator(score1, score2) {
                return Math.trunc(eval(score2.liveability_score) * 1000 - eval(score1.liveability_score) * 1000);
            }
            return finalArray.sort(comparator);
        }

        let index = 0;
        while (index < nearbyWithinRentRanked.length) {
            let dbResponse = await prisma.data_by_suburb.findFirst({
                where: {
                    suburb: nearbyWithinRentRanked[index].suburb
                },
                select: {
                    lga: true,
                    average_rent: true,
                    ptv_stop_count: true,
                    openspace_count: true,
                    crash_count: true,
                    crime_count: true
                }
            })
            dbResponse = JSON.parse(JSON.stringify(dbResponse));
            nearbyWithinRentRanked[index].lga = dbResponse.lga;
            nearbyWithinRentRanked[index].average_rent = eval(dbResponse.average_rent);
            nearbyWithinRentRanked[index].ptv_stop_count = dbResponse.ptv_stop_count;
            nearbyWithinRentRanked[index].openspace_count = dbResponse.openspace_count;
            nearbyWithinRentRanked[index].crash_count = dbResponse.crash_count;
            nearbyWithinRentRanked[index].crime_count = dbResponse.crime_count;
            index++;
        }

        console.log("\n\tapi file --> RANKED  FINAL  ARRAY: " + JSON.stringify(nearbyWithinRentRanked));

        res.status(200).json(JSON.stringify(nearbyWithinRentRanked));
    }
    else {
        res.status(200).json(null);
    }
}