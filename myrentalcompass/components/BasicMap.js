import "leaflet/dist/leaflet.css";
import React, { useState } from "react"; // Import useState hook
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import boundaryData from "../src/data/boundary.geojson";
import { BaseLiveability } from "./BaseLiveability.js";
import { CustomLiveability } from "./CustomLiveability.js";



const BasicMap = ({ recommendations, setSelectedFeature, rent = 1, affordability = 1, transport = 1, park = 1, crime = 1, road = 1, university = "" }) => {
  // Add setSelectedFeature as a prop
  let mergedData;
  if (recommendations === false) {
    mergedData = BaseLiveability({ boundaryData });
  } else {
    // Database data retrieval here (commented out for now)
    // mergedData = yourOtherMethod();
    mergedData = CustomLiveability({ boundaryData, rent, affordability, transport, park, crime, road, university })
    console.log("basicmap file --> mergedData random MATCH entry: " + mergedData);
    // console.log("basicmap file --> mergedData random MATCH entry: " + JSON.parsemergedData.find((item) => item.features.properties.suburb === "Springvale"));
  }

  const [selectedBoundary, setSelectedBoundary] = useState(null); // Add this line

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        setSelectedFeature(feature.properties); // Update the selectedFeature state in the Map component
        setSelectedBoundary(feature); // Update the selected boundary state in this component
      },
    });
  };

  const geoJSONStyle = (feature) => {
    const liveability_score = feature.properties.liveability_score;
    return {
      fillColor: getColor(liveability_score),
      weight: 2,
      opacity: 1,
      color: "grey",
      fillOpacity: 0.7,
    };
  };

  const getColor = (liveability_score) => {
    if (liveability_score > 0.75) {
      return "#326319";
    } else if (liveability_score > 0.7) {
      return "#579122";
    } else if (liveability_score > 0.65) {
      return "#87bb42";
    } else if (liveability_score > 0.6) {
      return "#bde086";
    } else if (liveability_score > 0.55) {
      return "#e7f4d0";
    } else if (liveability_score > 0.5) {
      return "#fae0ef";
    } else if (liveability_score > 0.45) {
      return "#d679ae";
    } else if (liveability_score > 0.4) {
      return "#bb247d";
    } else if (liveability_score > 0.35) {
      return "#870952";
    } else {
      return "#808080";
    }
  };

  return (
    <MapContainer
      center={[-37.8136, 144.9631]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        maxZoom={16}
      />
      <GeoJSON
        data={mergedData}
        style={geoJSONStyle}
        onEachFeature={onEachFeature} // Add this prop
      />
    </MapContainer>
  );
};

export default BasicMap;
