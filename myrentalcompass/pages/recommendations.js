import * as React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
// import Mapone from "~/components/mapone.js";
import PreferencesBar from "~/components/PreferencesBar";

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

function Recommendations() {
  const [selectedFeature, setSelectedFeature] = React.useState(null);
  // create a loading state
  const [mapLoading, setMapLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>MyRentalCompass | Explore the Map</title>
        <meta name="description" content="Discover potential suburbs." />
      </Head>

      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="Find where to live" />

        <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">
          <Box
            my="14px"
            bgcolor="#fff"
            borderRadius="10px"
            padding="10px"
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              height: "80%",
            }}
          >
            <div style={{ flex: "1 0 33%", padding: "10px" }}>
              <PreferencesBar />
            </div>
            <div style={{ flex: "1 0 66%", padding: "10px" }}>
              {mapLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/loading.gif"
                    alt="Loading"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              ) : (
                <DynamicBasicMap recommendations={true} />
              )}
            </div>
          </Box>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default Recommendations;
