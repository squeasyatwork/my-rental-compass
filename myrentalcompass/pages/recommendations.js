import * as React from "react";
import Router from "next/router";
import { Box, Button, Slider, TextField, 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper} from "@mui/material";
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
        
        <section className="flex flex-col bg-ResourceButtonYellow md:flex-col sm:flex-col items-start justify-center pt-5 pl-12 pb-2 text-left">
          <div className="font-bold text-4xl text-black">
            <h1>Here are the Melbourne surburbs that we think is suitable for you</h1>
          </div>
        </section>
        <section className="flex-grow w-full bg-ResourceButtonYellow flex flex-col items-center justify-center text-NavTextGray p-4">
          <Box
            my="14px"
            bgcolor="#fff"
            borderRadius="12px"
            padding="1rem"
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-between",
              boxShadow: "0 4px 6px rgb(0 0 0 / 0.1)",
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
              <Button 
                sx={{ 
                  width: "100%",
                  backgroundColor: "#FFCD29",
                  color: "#262626",
                  rounded: "12px",
                  fontWeight: "bold",
                  '&:hover': {
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                    backgroundColor: "#FFCD29",}
                }}
                      onClick={sendInput} >Update Result
                </Button>
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
                //defaultZoom={12}
              />

              

              {/* Top 10 Suburbs panel */}
              <Box
                  bgcolor="#fff"
                  padding="1rem"
                  borderRadius="10px"
                  sx={{
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    right: 0,
                    top: "10px",
                    width: "40%",
                    boxShadow: "0 4px 6px rgb(0 0 0 / 0.1)",
                    maxHeight: "70vh",
                    //overflowY: "scroll",
                    zIndex: 1000,
                  }}
                >
                {/* Panel toggle button */}
                <Button 
                  sx={{ 
                    width: "100%",
                    backgroundColor: "#FFCD29",
                    color: "#262626",
                    rounded: "12px",
                    fontWeight: "bold",
                    '&:hover': {
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease-in-out",
                      backgroundColor: "#FFCD29",}
                  }}
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                  {isPanelOpen ? '▼ Close Panel' : '▶ Open Panel'} 
                </Button>

                {isPanelOpen && (
                  <><h3 className=" font-istok text-lg text-center font-bold mt-2">Suburb Recommendations For You</h3><table className="mx-auto">
                    <thead>
                      <tr>
                        <th className=" text-sm font-medium px-2 border-b-2">Rank</th>
                        <th className=" text-sm font-medium px-2 border-b-2">Score</th>
                        <th className=" text-sm font-medium px-2 border-b-2">Suburbs</th>
                        <th className=" text-sm font-medium px-2 border-b-2">Rent ($/week)</th>
                      </tr>
                    </thead>
                    <tbody className=" text-sm font-normal items-center justify-center text-center">
                      {topTenSuburbs.map((suburb, index) => (
                        <tr key={suburb.suburb} style={{ margin: "1rem" }}>
                          <td className="px-2 py-2">{index + 1}</td>
                          <td className="px-2 py-2">{(suburb.liveability_score * 100).toFixed(2)}</td>
                          <td className="px-2 py-2">{suburb.suburb}</td>
                          <td className="px-2 py-2">${suburb.average_rent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table></>)}
                </Box>
              

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
