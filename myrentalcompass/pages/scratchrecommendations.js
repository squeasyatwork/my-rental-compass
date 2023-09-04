"use client";

import * as React from 'react';
import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import prisma from "~/lib/prisma";
import PreferencesBar from "~/components/PreferencesBar";
import { Box } from '@mui/material';
import dynamic from "next/dynamic";
// import Mapone from "~/components/mapone.js";


// This is needed to make sure that the dbResponse parameter is correctly passed on to the page component.
export const config = {
    runtime: "nodejs", // or "edge"
};

export const getServerSideProps = async (context) => {

    let nearbySuburbs = [];
    // First, we need to find out if suburbs should be all Melbourne suburbs, or near to a specific university.
    if (context.query.uniChoice != "no-preferences") {
        nearbySuburbs = await prisma.uni_suburbs.findMany({
            where: {
                university: context.query.uniChoice
            }
        })
        nearbySuburbs = JSON.parse(JSON.stringify(nearbySuburbs));
        console.log("backend UNIchoice: " + JSON.stringify(nearbySuburbs));
        nearbySuburbs = eval(nearbySuburbs[0].nearby_suburbs);
    }
    else {
        nearbySuburbs = await prisma.liveability_data.findMany({
            where: {
            },
            // select: {
            //     nearby_suburbs: true
            // }
        })
        nearbySuburbs = JSON.parse(JSON.stringify(nearbySuburbs));
        let nearbySuburbNames = [];
        nearbySuburbs.forEach(getSuburb)
        function getSuburb(item) {
            nearbySuburbNames.push(item.suburb);
        }
        nearbySuburbs = nearbySuburbNames;
        console.log("No UNIchoice, all suburbs retrieved: " + nearbySuburbs);
    }


    console.log("\nACTUAL  NEARBY  SUBURBS: " + nearbySuburbs);

    let withinRent = await prisma.liveability_data.findMany({
        where: {
            average_rent: {
                lte: context.query.rentChoice,
            }
        },
        // select: {
        //     suburb: true,
        //     average_rent: true
        // }
    });
    withinRent = JSON.parse(JSON.stringify(withinRent));
    console.log("\nbackend WITHINRENTchoice: " + JSON.stringify(withinRent));

    // Now, find the overlap in nearbySuburbs and withinRent suburbs.
    let nearbyWithinRent = [];
    withinRent.forEach(findNearbyWithinRent);

    function findNearbyWithinRent(item) {
        function isWithinRent(element, index, array) {
            if (element === item.suburb) {
                nearbyWithinRent.push(item)
            }
            else {
                // console.log("SUBURB" + element + "NOT FOUND IN WITHINRENT ARRAY" + nearbyWithinRent)
            }
        }
        nearbySuburbs.some(isWithinRent)
    }

    console.log("\n\tNEARBY WITHIN RENT: " + JSON.stringify(nearbyWithinRent));

    // Before ranking the filtered suburbs, define weightage of criteria based on user input of relevance.
    let ratingArray = [1, 2, 3, 4, 5]
    let weightageArray = [1.0, 1.5, 2.0, 2.5, 3.0]

    // Map ratings to weightages for each criterion
    let rentWeightage = weightageArray[ratingArray.indexOf(eval(context.query.affordabilityChoice))]
    let transportWeightage = weightageArray[ratingArray.indexOf(eval(context.query.transportChoice))]
    let parkWeightage = weightageArray[ratingArray.indexOf(eval(context.query.parkChoice))]
    let crimeWeightage = weightageArray[ratingArray.indexOf(eval(context.query.crimeChoice))]
    let roadWeightage = weightageArray[ratingArray.indexOf(eval(context.query.roadChoice))]
    // console.log("\n\tRANKED  FINAL ARRAY: " + JSON.stringify(eval(context.query.affordabilityChoice)));

    // Now, a ranking function is defined and applied to get the final ranked array.
    let nearbyWithinRentRanked = rankSuburbs(nearbyWithinRent);
    function rankSuburbs(array) {
        let finalArray = [];
        array.forEach(calculateLiveability);
        function calculateLiveability(item) {
            let rentNumerator = eval(item.rent_score) * rentWeightage;
            let transportNumerator = eval(item.transport_score) * transportWeightage;
            let parkNumerator = eval(item.openspace_score) * parkWeightage;
            let crimeNumerator = eval(item.crime_score) * crimeWeightage;
            let roadNumerator = eval(item.saferoads_score) * roadWeightage;
            let denominator = rentWeightage + transportWeightage + parkWeightage + crimeWeightage + roadWeightage;
            let score = ((rentNumerator + transportNumerator + parkNumerator + crimeNumerator + roadNumerator) / denominator).toFixed(4);
            // console.log("\n\tFINAL SCORE of " + item.suburb + ": " + JSON.stringify(score));
            finalArray.push({ "suburb": item.suburb, "score": eval(score) })
        }
        //Now, sort this array in descending order.
        function comparator(score1, score2) {
            return Math.trunc(eval(score2.score) * 1000 - eval(score1.score) * 1000);
        }
        return finalArray.sort(comparator);
    }

    console.log("\n\tRANKED  FINAL ARRAY: " + JSON.stringify(nearbyWithinRentRanked));

    return { props: { nearbyWithinRentRanked } };
}

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
    ssr: false,
});

export default function ScratchRecommendations({ nearbyWithinRentRanked }) {
    // console.log("\n\nINSIDE SCRATCHRECO's component: " + JSON.stringify(nearbyWithinRentRanked)) + "\n\n\n\n";

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
                                // setSelectedFeature={setSelectedFeature}
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