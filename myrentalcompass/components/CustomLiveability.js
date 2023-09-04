// import React from "react";

export async function getRankedLiveability(rent, affordability, transport, park, crime, road, university) {

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
    let ratingArray = [1, 2, 3, 4, 5]
    let weightageArray = [1.0, 1.5, 2.0, 2.5, 3.0]

    // Map ratings to weightages for each criterion
    let rentWeightage = weightageArray[ratingArray.indexOf(eval(affordability))]
    let transportWeightage = weightageArray[ratingArray.indexOf(eval(transport))]
    let parkWeightage = weightageArray[ratingArray.indexOf(eval(park))]
    let crimeWeightage = weightageArray[ratingArray.indexOf(eval(crime))]
    let roadWeightage = weightageArray[ratingArray.indexOf(eval(road))]
    // console.log("\n\tRANKED  FINAL ARRAY: " + JSON.stringify(eval(context.query.affordabilityChoice)));

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
            let score = ((rentNumerator + transportNumerator + parkNumerator + crimeNumerator + roadNumerator) / denominator).toFixed(4);
            // console.log("\n\tFINAL SCORE of " + item.suburb + ": " + JSON.stringify(score));
            finalArray.push({ "suburb": item.suburb, "liveability_score": eval(score) })
        }
        //Now, sort this array in descending order.
        function comparator(score1, score2) {
            return Math.trunc(eval(score2.liveability_score) * 1000 - eval(score1.liveability_score) * 1000);
        }
        return finalArray.sort(comparator);
    }

    console.log("\n\tcustomliv. file --> RANKED  FINAL  ARRAY: " + JSON.stringify(nearbyWithinRentRanked));

    return JSON.parse(JSON.stringify(nearbyWithinRentRanked));
}

export const loadLiveabilityData = (boundaryData, rent, affordability, transport, park, crime, road, university) => {
    let nearbyWithinRentRanked = JSON.parse(JSON.stringify(getRankedLiveability(rent, affordability, transport, park, crime, road, university)));
    if (boundaryData && boundaryData.features) {
        boundaryData.features.forEach((feature) => {
            const suburb = feature.properties.suburb;
            const matchingRow = nearbyWithinRentRanked.find((row) => row.suburb === suburb);

            if (matchingRow) {
                // Merge all properties
                Object.assign(feature.properties, matchingRow);
            }
        });
    }
    return boundaryData;
};

export const CustomLiveability = ({ boundaryData, rent, affordability, transport, park, crime, road, university }) => {
    const mergedData = loadLiveabilityData(boundaryData, rent, affordability, transport, park, crime, road, university);
    return mergedData;
};