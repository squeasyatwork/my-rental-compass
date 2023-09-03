import React from "react";
import liveabilityData from "../src/data/liveability.json";

// Function to load and merge liveability data into boundary data
export const loadLiveabilityData = (boundaryData) => {
  if (boundaryData && boundaryData.features) {
    boundaryData.features.forEach((feature) => {
      const suburb = feature.properties.suburb;
      const matchingRow = liveabilityData.find((row) => row.suburb === suburb);

      if (matchingRow) {
        feature.properties.lga = matchingRow.lga;
        feature.properties.liveability_score = matchingRow.liveability_score;  // Add the liveability_score directly
      }
    });
  }

  return boundaryData;  // return the enhanced boundaryData
};

export const BaseLiveability = ({ boundaryData }) => {
  const mergedData = loadLiveabilityData(boundaryData);

  console.log("BaseLiveability mergedData:", mergedData);  // Log to debug

  return mergedData;
};
