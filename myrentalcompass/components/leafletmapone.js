import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LeafletMapOne() {
  const position = [-37.8136, 144.9631]; // Melbourne coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "80%", height: "auto" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default LeafletMapOne;
