"use client";

import * as React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import PreferencesBar from "~/components/PreferencesBar";
import { Box, List, ListItem, ListItemText } from '@mui/material';
import dynamic from "next/dynamic";
// import Mapone from "~/components/mapone.js";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";


// This is needed to make sure that the dbResponse parameter is correctly passed on to the page component.
export const config = {
    runtime: "nodejs", // or "edge"
};

export const getServerSideProps = async (context) => {

    // SHIFTING DB LOGIC TO A COMPONENT FILE, CALLING IT FROM HERE (as getRankedLiveability).
    // Preparing arguments for it by extracting URL params first.
    let contextQuery = context.query;
    let rent = contextQuery.rentChoice;
    let affordability = contextQuery.affordabilityChoice;
    let transport = contextQuery.transportChoice
    let park = contextQuery.parkChoice;
    let crime = contextQuery.crimeChoice;
    let road = contextQuery.roadChoice;
    let university = contextQuery.uniChoice;
    // let nearbyWithinRentRanked = await getRankedLiveability(rent, affordability, transport, park, crime, road, university);
    let reqQuery = new URLSearchParams({
        rent, affordability, transport, park, crime, road, university
    });
    let dbResponse = await fetch(process.env.URL + "/api/liveablesuburbs?" + reqQuery, {
        method: 'GET',
    })
    let nearbyWithinRentRanked = await dbResponse.json();
    console.log("\n\trecos file --> RANKED  FINAL  ARRAY: " + nearbyWithinRentRanked);
    return { props: { nearbyWithinRentRanked, rent, affordability, transport, park, crime, road, university } };
}

const DynamicBasicMap = await dynamic(() => import("~/components/BasicMap"), {
    ssr: false,
});

export default function ScratchRecommendations({ nearbyWithinRentRanked, rent, affordability, transport, park, crime, road, university }) {
    console.log("\n\nINSIDE SCRATCHRECO's component: " + nearbyWithinRentRanked + "\n\n\n\n");
    let liveableSuburbs = JSON.parse(nearbyWithinRentRanked);
    const [selectedFeature, setSelectedFeature] = React.useState(null);

    if (liveableSuburbs.length !== 0) {
        return (
            <NextUIProvider>
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

                            {/* UNCOMMENT THIS TO DISPLAY MAP */}
                            {/* <div style={{ flex: "1 0 66%", padding: "10px" }}>
                                <DynamicBasicMap
                                    recommendations={true}
                                    setSelectedFeature={setSelectedFeature}
                                    rent={rent}
                                    affordability={affordability}
                                    transport={transport}
                                    park={park}
                                    crime={crime}
                                    road={road}
                                    university={university}
                                />
                            </div> */}

                            <Card style={{ flex: "1 0 66%", padding: "10px" }}>
                                <CardHeader className="flex gap-3">
                                    <div className="flex flex-col">
                                        <p className="text-lg">Here are your top suburb recommendations</p>
                                        <p className="text-small text-default-500">Adjust your preferences to update them</p>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    {/* <div className="flex flex-row">
                                        <div className="font-bold">
                                            {`1. ${liveableSuburbs[0].suburb}`}
                                        </div>
                                        <div style={{ "margin-right": "0", "margin-left": "auto", "position": "relative" }}>
                                            {`${liveableSuburbs[0].average_rent}`}
                                        </div>
                                        <br></br>
                                    </div> */}
                                    <ol>
                                        {liveableSuburbs.slice(0, 10).map((item, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: (index + 1) + ". " + item.suburb + " with an average rent of A$" + item.average_rent }} />
                                        ))}
                                    </ol>
                                </CardBody>
                            </Card>
                        </Box>
                    </section>

                    <Footer />
                </main>
            </NextUIProvider >
        );
    }
    else {  // If no records were returned by the database, dbResponse will be [] ( ,i.e., an empty array).
        return (
            <>
                <Head>
                    <title>MyRentalCompass | Explore the Map</title>
                    <meta name="description" content="Discover potential homes." />
                </Head>

                <main className="font-inter flex flex-col m-1 h-screen">
                    <Navbar activePage="Find where to live" />

                    <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

                        <div>NO SUBURBS MATCHED</div>

                    </section>
                    <Footer />
                </main>
            </>
        );
    }
}