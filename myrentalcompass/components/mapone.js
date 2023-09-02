import dynamic from "next/dynamic";

const MapOne = dynamic(() => import("./leafletmapone.js"), {
  ssr: false,
});

export default MapOne;
