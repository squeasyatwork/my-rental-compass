import dynamic from "next/dynamic";

const Mapone= dynamic(() => import("./leafletmapone.js"), {
    ssr: false
});

export default Mapone;