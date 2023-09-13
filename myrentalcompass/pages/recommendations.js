import * as React from "react";
import Router from "next/router";
import { Box, Button, Slider, TextField } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

import { RentSlider, LiveabilitySliders } from "~/components/Sliders.js";
import UniversityDropdown from "~/components/Dropdown";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

export const config = {
  runtime: "nodejs",
};

export const getServerSideProps = async (context) => {
  if (context.query) {
    let contextQuery = context.query;
    let reqQuery = new URLSearchParams(contextQuery);

    let dbResponse = await fetch(
      process.env.API_URL + "/api/liveablesuburbs?" + reqQuery,
      {
        method: "GET",
      }
    );

    // Check if the response is valid and is JSON before attempting to parse
    if (
      dbResponse.ok &&
      dbResponse.headers.get("content-type").includes("application/json")
    ) {
      let rankedSuburbs = await dbResponse.json();
      return { props: { rankedSuburbs, contextQuery } };
    }
  }

  return { props: { rankedSuburbs: null, contextQuery: {} } };
};

export default function Recommendations({
  rankedSuburbs = null,
  contextQuery = {},
}) {
  const router = Router.useRouter();

  const [inputValues, setInputValues] = React.useState({
    rent: contextQuery.rentChoice || 50,
    affordability: contextQuery.affordabilityChoice || 3,
    transport: contextQuery.transportChoice || 3,
    park: contextQuery.parkChoice || 3,
    crime: contextQuery.crimeChoice || 3,
    road: contextQuery.roadChoice || 3,
    university: contextQuery.uniChoice || "",
  });

  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSliderChange = (name) => (e, value) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const sendInput = () => {
    router.push({
      pathname: "/recommendations",
      query: inputValues,
    });
  };

  const topTenSuburbs = rankedSuburbs ? rankedSuburbs.slice(0, 10) : [];

  return (
    <>
      <Head>
        <title>MyRentalCompass | Recommendations</title>
        <meta name="description" content="Discover potential suburbs." />
      </Head>
      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="Find where to live" />
        <section className="flex-grow w-full bg-ResourceButtonYellow flex items-center justify-center text-NavTextGray">
          
          <Box
            my="14px"
            bgcolor="#fff"
            borderRadius="12px"
            padding="1rem"
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              justifyContent: "space-between",
            }}
          >
            
            <Box
              sx={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginRight: "2rem",
                padding: "1rem",
              }}
            >
              <div className=" font-bold text-2xl">
                <h1>Updated Selection</h1>
              </div>
              {/* Rental and liveability sliders */}
              <RentSlider
                handleChoice={handleSliderChange("rent")}
                defaultArg={inputValues.rent}
              />
              <LiveabilitySliders
                inputValues={inputValues}
                handleSliderChange={handleSliderChange}
              />

              {/* University dropdown */}
              <UniversityDropdown
                value={{ label: inputValues.university }}
                onChange={(event, newValue) =>
                  handleInputChange({
                    target: {
                      name: "university",
                      value: newValue ? newValue.label : "",
                    },
                  })
                }
              />
              <Button onClick={sendInput}>Get Recommendations</Button>
            </Box>
            <Box
              sx={{
                width: "80%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Dynamic map rendering */}
              <DynamicBasicMap
                recommendations={true}
                data={rankedSuburbs}
                setSelectedFeature={setSelectedFeature}
              />

              {/* Panel toggle button */}
              <Button onClick={() => setIsPanelOpen(!isPanelOpen)}>
                Toggle Panel
              </Button>

              {/* Top 10 Suburbs panel */}
              {isPanelOpen && (
                <Box
                  bgcolor="#fff"
                  padding="10px"
                  borderRadius="10px"
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "10px",
                    width: "250px",
                    maxHeight: "70vh",
                    overflowY: "scroll",
                    zIndex: 1000,
                  }}
                >
                  <h3>Top 10 Suburbs</h3>
                  {topTenSuburbs.map((suburb, index) => (
                    <p key={suburb.suburb}>
                      {index + 1}. {suburb.suburb},{" "}
                      {(suburb.liveability_score * 100).toFixed(2)}% - $
                      {suburb.average_rent}/week
                    </p>
                  ))}
                </Box>
              )}

              {/* Selected feature details */}
              {selectedFeature && (
                <Box>
                  <p>Name: {selectedFeature.suburb}</p>
                  <p>Council: {selectedFeature.lga}</p>
                  <p>
                    Liveability Score:{" "}
                    {(selectedFeature.liveability_score * 100).toFixed(2)}%
                  </p>
                </Box>
              )}
            </Box>
          </Box>
        </section>
        <Footer />
      </main>
    </>
  );
}
