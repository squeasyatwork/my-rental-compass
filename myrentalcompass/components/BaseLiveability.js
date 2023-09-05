// import React from "react";
import liveabilityData from "../src/data/liveability.json";

export const loadLiveabilityData = (boundaryData) => {
  if (boundaryData && boundaryData.features) {
    boundaryData.features.forEach((feature) => {
      const suburb = feature.properties.suburb;
      const matchingRow = liveabilityData.find((row) => row.suburb === suburb);

      if (matchingRow) {
        // Merge all properties
        Object.assign(feature.properties, matchingRow);
      }
    });
  }
  return boundaryData;
};

export const BaseLiveability = ({ boundaryData }) => {
  const mergedData = loadLiveabilityData(boundaryData);
  return mergedData;
};
