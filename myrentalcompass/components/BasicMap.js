import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import boundaryData from "../src/data/boundary.geojson";
import { BaseLiveability } from "./BaseLiveability.js";
import { CustomLiveability } from "./CustomLiveability.js";
import * as turf from '@turf/turf';

// Fix for the default Leaflet marker images
delete L.Icon.Default.prototype._getIconUrl;

const BasicMap = ({
  recommendations,
  setSelectedFeature,
  data,
  selectedUniversitySuburb,
}) => {
  let mergedData;
  if (recommendations === false) {
    mergedData = BaseLiveability({ boundaryData });
  } else {
    mergedData = CustomLiveability(boundaryData, data);
  }

  const [selectedBoundary, setSelectedBoundary] = useState(null);

  const universityIconURL = "/university-icon.svg";

  const universityIcon = new L.Icon({
    iconUrl: universityIconURL,
    iconSize: [35, 35],
    iconAnchor: [15, 15],
  });

  const getCentroid = (feature) => {
    let centroidX = 0,
      centroidY = 0,
      signedArea = 0;
    const coords = feature.geometry.coordinates[0];
    let i, j, x0, y0, x1, y1, a;

    for (i = 0; i < coords.length - 1; i++) {
      x0 = coords[i][0];
      y0 = coords[i][1];
      x1 = coords[i + 1][0];
      y1 = coords[i + 1][1];

      a = x0 * y1 - x1 * y0;
      signedArea += a;
      centroidX += (x0 + x1) * a;
      centroidY += (y0 + y1) * a;
    }

    signedArea *= 0.5;
    centroidX /= 6 * signedArea;
    centroidY /= 6 * signedArea;

    return [centroidY, centroidX];
  };

  const numberedIcon = (rank, suburb) => {
    const isSameAsUniversity = suburb === selectedUniversitySuburb;
    return new L.DivIcon({
      className: "custom-div-icon",
      html: `
            <div style="background-image: url('/map-marker.svg'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 35px; 
            height: 35px; display: flex; flex-direction: column; justify-content: center; align-items: center;" 
            class="relative">
                <span class="text-center text-md font-bold" style="opacity: ${isSameAsUniversity ? "0.5" : "1"
        }; margin-top: -5px;">${rank}</span>
            </div>
        `,
      iconSize: [35, 35],
      iconAnchor: [17.5, 17.5],
    });
  };

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
    } else if (liveability_score > 0.5) {
      return "#e7f4d0";
    } else if (liveability_score > 0.4) {
      return "#fae0ef";
    } else if (liveability_score > 0.3) {
      return "#d679ae";
    } else if (liveability_score > 0.2) {
      return "#bb247d";
    } else if (liveability_score >= 0.0) {
      return "#870952";
    } else {
      return "#808080";
    }
  };
  // Sort features and get top 10
  mergedData.features.sort(
    (a, b) => b.properties.liveability_score - a.properties.liveability_score
  );
  const top10Features = mergedData.features.slice(0, 10);

  return (
    <MapContainer
      center={[-37.8136, 144.9631]}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", zIndex: "0" }}
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
      {recommendations &&
        mergedData.features.map((feature) => {
          if (feature.properties.suburb === selectedUniversitySuburb) {
            return (
              <Marker
                position={getCentroid(feature)}
                key={feature.properties.suburb + "-university"}
                icon={universityIcon}
              />
            );
          }
          return null;
        })}

      {recommendations &&
        top10Features.map((feature, index) => (
          <Marker
            position={getCentroid(feature)}
            key={feature.properties.suburb}
            icon={numberedIcon(index + 1, feature.properties.suburb)}
          />
        ))}
    </MapContainer>
  );
};

export default BasicMap;
