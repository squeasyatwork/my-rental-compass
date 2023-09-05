// import React from "react";
import liveabilityData from "../src/data/liveability.json";

export const loadLiveabilityData = (boundaryData) => {
  console.log("\n\tbaseliveability file --> liveabilityData contents: " + liveabilityData);
  if (boundaryData && boundaryData.features) {
    boundaryData.features.forEach((feature) => {
      const suburb = feature.properties.suburb;
      const matchingRow = liveabilityData.find((row) => row.suburb === suburb);

      if (matchingRow) {
        // Merge all properties
        console.log("matchingRow value: " + JSON.stringify(matchingRow));
        Object.assign(feature.properties, matchingRow);
      }
    });
  }
  return boundaryData;
};

export const BaseLiveability = ({ boundaryData }) => {
  const mergedData = loadLiveabilityData(boundaryData);
  // console.log("in BASELIV. merged data CLAYTON PROPS: " + JSON.stringify(boundaryData.features[81].properties));
  return mergedData;
};
