export const loadLiveabilityData = async (boundaryData, rent, affordability, transport, park, crime, road, university) => {
    let reqQuery = new URLSearchParams({ rent, affordability, transport, park, crime, road, university });
    let nearbyWithinRentRanked = [];
    nearbyWithinRentRanked = await fetch("/api/liveablesuburbs?" + reqQuery, {
        method: 'GET'
    });
    nearbyWithinRentRanked = await nearbyWithinRentRanked.json();
    nearbyWithinRentRanked = JSON.parse(nearbyWithinRentRanked);
    console.log("\n\tcustomliveability file --> DS with eval(): " + (nearbyWithinRentRanked))
    // console.log("\n\tcustomliveability file --> DS after eval(): " + eval(nearbyWithinRentRanked))

    if (boundaryData && boundaryData.features) {
        boundaryData.features.forEach(async (feature) => {
            const suburb = feature.properties.suburb;
            console.log("Trying to find matchingRow for suburb: " + suburb);
            console.log("Manually: " + nearbyWithinRentRanked[0].suburb);

            const matchingRow = nearbyWithinRentRanked.find((row) => row.suburb === suburb);

            if (matchingRow) {
                // Merge all properties
                console.log("MATCH! merging properties now for suburb: " + suburb);
                const JSONobj = JSON.parse(JSON.stringify((matchingRow)));
                console.log("Adding the following: " + JSON.stringify(JSONobj));
                // console.log("after merging props: " + JSON.stringify(Object.assign(feature.properties, JSONobj).properties.geometry.type));
                await Object.assign(feature.properties, JSONobj);
                await console.log("LGA after merging props for " + suburb + ": " + JSON.stringify(feature.properties));
            }
            else {
                console.log("PROBLEM! matchingRow not set for suburb: " + suburb);
                // console.log("JSON.parse(JSON.stringify()) : " + JSON.stringify(JSONobj));
            }
        });
    }
    // console.log("CLAYTON PROPS: " + JSON.stringify(boundaryData.features[81].properties));
    return boundaryData;
};

export const CustomLiveability = async ({ boundaryData, rent, affordability, transport, park, crime, road, university }) => {
    const mergedData = await loadLiveabilityData(boundaryData, rent, affordability, transport, park, crime, road, university);
    // console.log("in merged data CLAYTON PROPS: " + JSON.stringify(boundaryData.features[81].properties));
    return mergedData;
};