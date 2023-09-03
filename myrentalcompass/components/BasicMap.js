import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import boundaryData from "../src/data/boundary.geojson";
import { BaseLiveability } from "./BaseLiveability.js";

const BasicMap = ({ recommendations }) => {
  // Added recommendation prop
  let mergedData;

  if (recommendations === false) {
    mergedData = BaseLiveability({ boundaryData }); // Load the merged data
  } else {
    // Database data retrieval here (commented out for now)
    // mergedData = yourOtherMethod();
  }
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
    if (liveability_score > 90) {
      return "#326319";
    } else if (liveability_score > 0.8) {
      return "#579122";
    } else if (liveability_score > 0.7) {
      return "#87bb42";
    } else if (liveability_score > 0.6) {
      return "#bde086";
    } else if (liveability_score > 0.5) {
      return "#e7f4d0";
    } else if (liveability_score > 0.4) {
      return "#fae0ef";
    } else if (liveability_score > 0.3) {
      return "#d679ae";
    } else if (liveability_score > 0.2) {
      return "#bb247d";
    } else if (liveability_score > 0.1) {
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
      {/* Add TileLayer first */}
      <TileLayer
        attribution="&copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        maxZoom={16}
      />

      {/* Add GeoJSON layer */}
      <GeoJSON data={mergedData} style={geoJSONStyle} />
    </MapContainer>
  );
};

export default BasicMap;
