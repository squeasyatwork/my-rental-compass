"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import PreferencesBar from "~/components/PreferencesBar";
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";

// This is needed to make sure that the dbResponse parameter is correctly passed on to the page component.
export const config = {
  runtime: "nodejs", // or "edge"
};

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

export const getServerSideProps = async (context) => {

  // SHIFTING DB LOGIC TO A COMPONENT FILE, CALLING IT FROM HERE (as getRankedLiveability).
  // Preparing arguments for it by extracting URL params first.
  let contextQuery = null;
  let rent = null;
  let affordability = null;
  let transport = null;
  let park = null;
  let crime = null;
  let road = null;
  let university = null;
  let nearbyWithinRentRanked = null;
  // let nearbyWithinRentRanked = await getRankedLiveability(rent, affordability, transport, park, crime, road, university);
  let reqQuery = new URLSearchParams({
    rent, affordability, transport, park, crime, road, university
  });
  if (reqQuery.size !== 0) {
    if (rent && affordability) {
      rent = contextQuery.rentChoice;
      affordability = contextQuery.affordabilityChoice;
      transport = contextQuery.transportChoice
      park = contextQuery.parkChoice;
      crime = contextQuery.crimeChoice;
      road = contextQuery.roadChoice;
      university = contextQuery.uniChoice;
      dbResponse = await fetch(process.env.URL + "/api/liveablesuburbs?" + reqQuery, {
        method: 'GET',
      })
      nearbyWithinRentRanked = await dbResponse.json();
      console.log("\n\trecos file --> RANKED  FINAL  ARRAY: " + nearbyWithinRentRanked);
      // return { props: { nearbyWithinRentRanked, rent, affordability, transport, park, crime, road, university } };
    }
  }
  return { props: { nearbyWithinRentRanked, rent, affordability, transport, park, crime, road, university } };
}


function Recommendations({ nearbyWithinRentRanked = null, rent = 0, affordability = 0, transport = 0, park = 0, crime = 0, road = 0, university = 0 }) {
  // console.log("\n\nINSIDE SCRATCHRECO's component: " + nearbyWithinRentRanked + "\n\n\n\n");
  let liveableSuburbs = nearbyWithinRentRanked === null ? null : JSON.parse(nearbyWithinRentRanked);
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
                // <DynamicBasicMap recommendations={true} />
                // Uncommemnt the above line to display the map
                <Card style={{ flex: "1 0 66%", padding: "10px" }}>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                      <p className="text-lg">Here are your top suburb recommendations</p>
                      <p className="text-small text-default-500">Adjust your preferences to update them</p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    {liveableSuburbs !== null ?
                      (<ol>
                        {liveableSuburbs.slice(0, 10).map((item, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: (index + 1) + ". " + item.suburb + " with an average rent of A$" + item.average_rent }} />
                        ))}
                      </ol>) : (<h3>NO SUBURBS MATCHED</h3>)
                    }
                  </CardBody>
                </Card>
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
