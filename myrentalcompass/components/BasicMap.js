import 'leaflet/dist/leaflet.css'; // Importing Leaflet CSS
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import boundaryData from '../src/data/boundary.geojson'; // Updated path to GeoJSON

// Function to style GeoJSON layer
const geoJSONStyle = {
  fillColor: "none", // No fill
  weight: 2, // Border width
  opacity: 1,
  color: "grey" // Border color
};

const BasicMap = () => {
  return (
    <MapContainer center={[-37.8136, 144.9631]} zoom={10} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        maxZoom={16}
      />
      {/* Add GeoJSON boundaryData with custom style */}
      <GeoJSON data={boundaryData} style={geoJSONStyle} />
    </MapContainer>
  );
};

export default BasicMap;
