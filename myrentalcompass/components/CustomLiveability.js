import React from "react";

export const loadCustomLiveabilityData = (boundaryData, suburbData) => {
  if (boundaryData && boundaryData.features && suburbData) {
    boundaryData.features.forEach((feature) => {
      const suburb = feature.properties.suburb;
      const matchingRow = suburbData.find((row) => row.suburb === suburb); // changed customData to suburbData

      if (matchingRow) {
        // Merge all properties
        Object.assign(feature.properties, matchingRow);
      }
    });
  }
  return boundaryData;
};

export const CustomLiveability = ({ boundaryData, suburbData }) => {
  const mergedData = loadCustomLiveabilityData(boundaryData, suburbData);
  return mergedData;
};
