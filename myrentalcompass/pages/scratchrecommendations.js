"use client";

import * as React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import prisma from "~/lib/prisma";
import PreferencesBar from "~/components/PreferencesBar";
import { Box } from '@mui/material';
import dynamic from "next/dynamic";
import { getRankedLiveability } from '~/components/CustomLiveability.js';
// import Mapone from "~/components/mapone.js";


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
    let nearbyWithinRentRanked = await getRankedLiveability(rent, affordability, transport, park, crime, road, university);
    return { props: { nearbyWithinRentRanked, rent, affordability, transport, park, crime, road, university } };
}

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
    ssr: false,
});

export default function ScratchRecommendations({ nearbyWithinRentRanked, rent, affordability, transport, park, crime, road, university }) {
    // console.log("\n\nINSIDE SCRATCHRECO's component: " + JSON.stringify(nearbyWithinRentRanked)) + "\n\n\n\n";

    const [selectedFeature, setSelectedFeature] = React.useState(null);

    if (nearbyWithinRentRanked.length != 0) {
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
                            </div>
                        </Box>
                    </section>

                    <Footer />
                </main>
            </>
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

                        <div>NOT FOUND IN DATABASE</div>

                    </section>
                    <Footer />
                </main>
            </>
        );
    }
}