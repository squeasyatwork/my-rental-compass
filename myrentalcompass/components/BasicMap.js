import "leaflet/dist/leaflet.css";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/marker-icon-2x.png',
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png'
});

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import boundaryData from "../src/data/boundary.geojson";
import { BaseLiveability } from "./BaseLiveability.js";
import { CustomLiveability } from "./CustomLiveability.js";

const BasicMap = ({ recommendations, setSelectedFeature, data }) => {
  let mergedData;
  if (recommendations === false) {
    mergedData = BaseLiveability({ boundaryData });
  } else {
    mergedData = CustomLiveability(boundaryData, data);
  }

  const top10Suburbs = mergedData.features
    .sort(
      (a, b) => b.properties.liveability_score - a.properties.liveability_score
    )
    .slice(0, 10);

  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        setSelectedFeature(feature.properties);
        setSelectedBoundary(feature);
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
    if (liveability_score > 0.9) {
      return "#326319";
    } else if (liveability_score > 0.8) {
      return "#579122";
    } else if (liveability_score > 0.7) {
      return "#87bb42";
    } else if (liveability_score > 0.6) {
      return "#bde086";
    } else if (liveability_score > 0.45) {
      return "#e7f4d0";
    } else if (liveability_score > 0.35) {
      return "#fae0ef";
    } else if (liveability_score > 0.25) {
      return "#d679ae";
    } else if (liveability_score > 0.15) {
      return "#bb247d";
    } else if (liveability_score > 0.0) {
      return "#870952";
    } else {
      return "#808080";
    }
  };

  return (
    <MapContainer
      center={[-37.8136, 144.9631]}
      zoom={11}
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
        onEachFeature={onEachFeature}
      />
      {top10Suburbs.map((suburb) => {
        // Estimate coordinates as the centroid of the suburb's polygon
        const centroid = getCentroid(suburb.geometry.coordinates[0]);
        return (
          <Marker position={centroid} key={suburb.properties.suburb}>
            <Popup>
              {suburb.properties.suburb} - {suburb.properties.liveability_score}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

// Function to compute the centroid of a polygon
function getCentroid(coords) {
  let center = coords.reduce(
    (c, v) => [c[0] + v[0] / coords.length, c[1] + v[1] / coords.length],
    [0, 0]
  );
  return center;
}

export default BasicMap;
