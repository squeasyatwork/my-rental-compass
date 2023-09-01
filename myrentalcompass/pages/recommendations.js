"use client";

import * as React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import prisma from "~/lib/prisma";
import Image from "next/image.js";
import PreferencesBar from "~/components/PreferencesBar";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ImageLoader from '~/components/ImageLoader';
import Mapone from "~/components/mapone.js";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";




// This is needed to make sure that the dbResponse parameter is correctly passed on to the page component.
export const config = {
    runtime: "nodejs", // or "edge"
};

function calculateLiveabilityScore({ suburbLiveabilityRecord, liveabilityPreferences }) {
    return null;
}

export const getServerSideProps = async (context) => {
    let params = new URLSearchParams(context.query);
    // First, get nearby suburbs based on the university selected.
    let nearbySuburbsResponse = await prisma.uni_suburbs.findFirst({
        where: {
            // university: params.get("university"),
        },
    });
    let suburbsJson = JSON.parse(JSON.stringify(nearbySuburbsResponse));
    console.log("VALUE INSIDE BACKEND dbResponse: " + JSON.stringify(suburbsJson));

    let nearbySuburbsList = eval(suburbsJson.nearby_suburbs);
    console.log("AFTER PARSING suburbsList: " + JSON.stringify(nearbySuburbsList));

    // Next I calculate the liveability scores of all the suburbs found above.
    let nearbySuburbLiveabilities = {};

    nearbySuburbsList.forEach(function (currentElement) {
        console.log(currentElement);
        nearbySuburbLiveabilities[currentElement] = -1;
    });

    const suburbLiveabilityRecords = await prisma.liveability_data.findMany({
        where: {
        },
    })
    // console.log(suburbLiveabilityRecords);

    // suburbLiveabilityRecords.forEach(function (currentElement) {
    //     if (nearbySuburbLiveabilities.includes(currentElement.suburb)) {

    //     }
    // });

    return { props: { nearbySuburbsList } };
}

function Recommendations({ nearbySuburbsList }) {

    const router = useRouter();

    console.log("INSIDE SCRATCHPAGE component: " + nearbySuburbsList.length);
    if (nearbySuburbsList.length != 0) { // i.e., the database returned something in dbResponse.
        return (
            <>
                <Head>
                    <title>MyRentalCompass | Explore the Map</title>
                    <meta name="description" content="Discover potential homes." />
                </Head>

                <main className="font-inter flex flex-col h-screen">
                    <Navbar activePage="Find where to live" />

                    <section className="flex-grow w-full bg-FooterButtonYellow flex items-center justify-center text-NavTextGray">

                        <Box my="14px" bgcolor="#fff" width="80rem" borderRadius="10px" padding="10px" alignItems="center" sx={{ justifyContent: { sm: "center", lg: "space-between" } }}>
                            <Grid container spacing={4}>
                                <Grid item lg={2.5}>
                                    <PreferencesBar></PreferencesBar>
                                </Grid>
                                <Grid item lg={9.5}>
                                    {/* MAP COMPONENT GOES HERE */}
                                    <Mapone></Mapone>
                                    {/* <Image loader={ImageLoader}
                                        src={"/liveable-cities.jpeg"}
                                        width={1300}
                                        height={100}
                                        alt={"liveable-cities"}
                                        loading="eager"
                                        className="mx-auto" style={{ borderRadius: "14px" }}></Image> */}


                                </Grid>

                            </Grid><div className="flex flex-row m-4">
                                <div className="mt-auto flex pb-4 m-2">
                                    <Link href={"/questionnaire"}>
                                        <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
                                            Start over
                                        </button>
                                    </Link>
                                </div>
                                <div className="mt-auto flex pb-4 m-2">
                                    <Link href={"/"}>
                                        <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
                                            Home
                                        </button>
                                    </Link>
                                </div>
                            </div></Box>
                    </section>


                    <Footer />
                </main >
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

                        <div>APPARENTLY YOUR UNIVERSITY HAS NO NEARBY SUBURBS IN OUR DATABASE...</div>

                    </section>
                    <Footer />
                </main>
            </>
        );
    }
}

export default Recommendations;