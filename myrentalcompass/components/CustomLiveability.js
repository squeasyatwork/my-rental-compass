// import React from "react";

const loadCustomLiveabilityData = (boundaryData, suburbData) => {
  if (boundaryData && boundaryData.features && suburbData) {
    boundaryData.features.forEach((feature) => {
      const suburb = feature.properties.suburb;
      const matchingRow = suburbData.find((row) => row.suburb === suburb);

      if (matchingRow) {
        // Merge all properties
        Object.assign(feature.properties, matchingRow);
      }
    });
  }
  return boundaryData;
};

export const CustomLiveability = (boundaryData, suburbData) => {
    return loadCustomLiveabilityData(boundaryData, suburbData);
};