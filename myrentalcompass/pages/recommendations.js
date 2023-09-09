"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import PreferencesBar from "~/components/PreferencesBar";
import { Box } from '@mui/material';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Router from "next/router";

// This is needed to make sure that the dbResponse parameter is correctly passed on to the page component.
export const config = {
  runtime: "nodejs", // or "edge"
};

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

export const getServerSideProps = async (context) => {
  if (context.query) {  // Preparing arguments for it by extracting URL params first.
    let contextQuery = context.query;
    let rent = contextQuery.rentChoice;
    let affordability = contextQuery.affordabilityChoice;
    let transport = contextQuery.transportChoice
    let park = contextQuery.parkChoice;
    let crime = contextQuery.crimeChoice;
    let road = contextQuery.roadChoice;
    let university = contextQuery.uniChoice;
    let reqQuery = new URLSearchParams({
      rent, affordability, transport, park, crime, road, university
    });
    // CHECK contextQuery elements with: console.log("recos file --> contextQuery: " + JSON.stringify(contextQuery))
    if (rent) {
      let dbResponse = await fetch(process.env.API_URL + "/api/liveablesuburbs?" + reqQuery, {
        method: 'GET',
      })
      let nearbyWithinRentRanked = await dbResponse.json();
      // CHECK nearbyWithinRentRanked elements with: console.log("\n\trecos file --> RANKED  FINAL  ARRAY: " + nearbyWithinRentRanked);
      return { props: { nearbyWithinRentRanked, contextQuery } };
    }
  }
  let dummyReturnValue = null;
  return { props: { dummyReturnValue } };
}

function Recommendations({ nearbyWithinRentRanked = null, contextQuery = {} }) {

  const router = Router.useRouter();

  console.log("recos file --> INSIDE COMPONENT contextQuery: " + JSON.stringify(contextQuery))

  let defaultSliderValues = {};

  if (Object.keys(contextQuery).length !== 0) {
    console.log("recos file --> contextQuery inside default setter: " + JSON.stringify(contextQuery))
    defaultSliderValues["rent"] = parseInt(contextQuery.rentChoice);
    defaultSliderValues["affordability"] = parseInt(contextQuery.affordabilityChoice);
    defaultSliderValues["transport"] = parseInt(contextQuery.transportChoice);
    defaultSliderValues["park"] = parseInt(contextQuery.parkChoice);
    defaultSliderValues["crime"] = parseInt(contextQuery.crimeChoice);
    defaultSliderValues["road"] = parseInt(contextQuery.roadChoice);
    defaultSliderValues["university"] = contextQuery.uniChoice;
    // CHECK non-empty defaultSliderValues elements with: console.log("recos file --> defaultSliderValues DETECTED: " + JSON.stringify(defaultSliderValues))
  }
  // CHECK empty defaultSliderValues elements with: else {
  //   console.log("recos file --> defaultSliderValues EMPTY: " + JSON.stringify(defaultSliderValues))
  // }

  // Storing state of all user inputs together
  const [selectedChoices, setSelectedChoices] = useState({
    someQuestionOne: Object.keys(contextQuery).length === 0
      ? 600 : defaultSliderValues.rent,
    affordableHousing: Object.keys(contextQuery).length === 0
      ? 3 : defaultSliderValues.affordability,
    publicTransport: Object.keys(contextQuery).length === 0
      ? 3 : defaultSliderValues.transport,
    openSpace: Object.keys(contextQuery).length === 0
      ? 3 : defaultSliderValues.park,
    lowCrimeRate: Object.keys(contextQuery).length === 0
      ? 3 : defaultSliderValues.crime,
    safeRoads: Object.keys(contextQuery).length === 0
      ? 3 : defaultSliderValues.road,
    university: Object.keys(contextQuery).length === 0
      ? "" : defaultSliderValues.university
  });

  // TESTING REMOVAL OF SEPARATE STATE FOR UNI: const [university, setUniversity] = useState("")

  const handleChoice = (question, choice) => {
    setSelectedChoices({
      ...selectedChoices,
      [question]: choice,
    });
  };

  // Calls /api/liveablesuburbs with GET method
  function sendInput() {
    let rentChoice = selectedChoices.someQuestionOne
    let affordabilityChoice = selectedChoices.affordableHousing
    let transportChoice = selectedChoices.publicTransport
    let parkChoice = selectedChoices.openSpace
    let crimeChoice = selectedChoices.lowCrimeRate
    let roadChoice = selectedChoices.safeRoads
    let uniChoice = selectedChoices.university
    console.log("recos file, sendInput params --> uniChoice: " + selectedChoices.university)
    router.push({
      pathname: "/recommendations",
      query: {
        rentChoice,
        affordabilityChoice,
        transportChoice,
        parkChoice,
        crimeChoice,
        roadChoice,
        uniChoice
      },
    });
  }

  // CHECK nearbyWithinRentRanked elements with: console.log("\n\nINSIDE recos component --> nerbyWithinRentRanked: " + nearbyWithinRentRanked + "\n\n\n\n");
  let liveableSuburbs = (nearbyWithinRentRanked === null) ? null : JSON.parse(nearbyWithinRentRanked);
  // USE this after map work is complete: const [selectedFeature, setSelectedFeature] = React.useState(null);

  // Loading animation
  const [mapLoading, setMapLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Check if there are any recommended suburbs to display and select the HTML content accordingly
  return (<>
    {liveableSuburbs && (
      <>
        <Head>
          <title>MyRentalCompass | Explore the Map</title>
          <meta name="description" content="Discover potential suburbs." />
        </Head>
        <main className="font-inter flex flex-col h-screen">
          <Navbar activePage="Find where to live" />
          <section className="flex-grow w-full bg-ResourceButtonYellow flex items-center justify-center text-NavTextGray">
            <Box
              my="14px"
              bgcolor="#fff"
              borderRadius="10px"
              padding="10px"
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "80%",
              }}
            >
              <div style={{ flex: "1 0 33%", padding: "10px" }}>
                <PreferencesBar handleChoice={handleChoice} sendInput={sendInput} defaultSliderValues={defaultSliderValues} />
              </div>
              <div style={{ flex: "1 0 66%", padding: "10px" }}>
                {
                  mapLoading && (
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src="/loading.gif"
                        alt="Loading"
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>
                  )
                }
                {
                  (!mapLoading) && (
                    // <DynamicBasicMap recommendations={true} />
                    // Uncomment the above line to display the map
                    <Card style={{ flex: "1 0 66%", padding: "10px" }}>
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-lg">Here are your top suburb recommendations</p>
                          <p className="text-small text-default-500">Adjust your preferences to update them</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        {
                          (liveableSuburbs.length !== 0) &&
                          (<ol>
                            {liveableSuburbs.slice(0, 10).map((item, index) => (
                              <li key={index} dangerouslySetInnerHTML={{ __html: (index + 1) + ". " + item.suburb + " with an average rent of A$" + item.average_rent }} />
                            ))}
                          </ol>)
                        }
                        {
                          (liveableSuburbs.length === 0) && (<h3>NO SUBURBS MATCHED</h3>)
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
    )}
    {
      !liveableSuburbs && (
        <>
          <Head>
            <title>MyRentalCompass | Explore the Map</title>
            <meta name="description" content="Discover potential suburbs." />
          </Head>
          <main className="font-inter flex flex-col h-screen">
            <Navbar activePage="Find where to live" />
            <section className="flex-grow w-full bg-ResourceButtonYellow flex items-center justify-center text-NavTextGray">
              <Box
                my="14px"
                bgcolor="#fff"
                borderRadius="10px"
                padding="10px"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <div style={{ flex: "1 0 33%", padding: "10px" }}>
                  <PreferencesBar selectedChoices={selectedChoices} handleChoice={handleChoice} sendInput={sendInput} defaultSliderValues={defaultSliderValues} />
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
                    // Uncomment the above line to display the map
                    <h3 className="text-center">Enter your preferences to get started.</h3>
                  )}
                </div>
              </Box>
            </section>
            <Footer />
          </main>
        </>
      )
    }
  </>);
}

export default Recommendations;