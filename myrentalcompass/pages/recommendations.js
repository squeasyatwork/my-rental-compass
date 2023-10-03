import * as React from "react";
import Router from "next/router";
import { Box } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

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
      let data = await dbResponse.json();
      return { props: { data, contextQuery } };
    }
  }

  return { props: { data: null, contextQuery: {} } };
};

export default function Recommendations({ data = null, contextQuery = {} }) {
  const { rankedSuburbs = [] } = data || {};

  const router = Router.useRouter();

  const [inputValues, setInputValues] = React.useState({
    rent: contextQuery.rentChoice || 400,
    // affordability: contextQuery.affordabilityChoice || 3,
    transport: contextQuery.transportChoice || 3,
    park: contextQuery.parkChoice || 3,
    crime: contextQuery.crimeChoice || 3,
    road: contextQuery.roadChoice || 3,
    university: contextQuery.uniChoice || "",
  });

  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

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

  const [universitySuburb, setUniversitySuburb] = useState(null);

  const sendInput = () => {
    if (inputValues.university) {
      const suburb = inputValues.university.split(",").pop().trim();
      setUniversitySuburb(suburb);
    } else {
      setUniversitySuburb(null);
    }

    router.push({
      pathname: "/recommendations",
      query: inputValues,
    });
  };

  const topTenSuburbs = rankedSuburbs ? rankedSuburbs.slice(0, 10) : [];

  const handleMouseClick = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setBoxPosition({ x: mouseX, y: mouseY });
  };

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
            <h1>
              Here are the Melbourne suburbs that we think are suitable for you
            </h1>
            <br />
          </div>
          <div className="font-bold text-2xl text-HeadingTextGray bg-BackgroundWhite p-6 rounded-xl">
            <h2>● How we calculated your score</h2>
            <p className="text-xl font-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;This website generates a liveablity index
              score that ranks the suburbs based on your responses to the
              questionnaire you just finished.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;To find out more about liveability, see
              our page &apos;What is Liveability&apos;.
            </p>
            <h2>● How to read the map</h2>
            <p className="text-xl font-normal">
              &nbsp;&nbsp;&nbsp;&nbsp;The suburbs that are your best match (i.e.
              highest liveability score) are in dark green. Those with the
              lowest are dark pink.
            </p>
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
                onChange={(event, newValue) => {
                  handleInputChange({
                    target: {
                      name: "university",
                      value: newValue ? newValue.label : "",
                    },
                  });
                }}
              />

              <button
                className="text-lg md:text-lg lg:text-lg font-bold call-action-button"
                onClick={sendInput}
              >
                Update Result
              </button>
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
                selectedUniversitySuburb={universitySuburb}
                setSelectedFeature={setSelectedFeature}
                onMouseEnter={(feature) => setSelectedFeature(feature)}
                onMouseLeave={() => setSelectedFeature(null)}
                onClick={handleMouseClick}
              />

              {/* Top 10 Suburbs panel */}
              <Box
                bgcolor="#fff"
                padding="1rem"
                borderRadius="10px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  right: 0,
                  top: "10px",
                  width: "37%",
                  boxShadow: "0 4px 6px rgb(0 0 0 / 0.1)",
                  maxHeight: "70vh",
                  //overflowY: "scroll",
                  zIndex: 1000,
                }}
              >
                {/* Panel toggle button */}
                <button
                  className=" text-base md:text-base lg:text-base font-bold call-action-button"
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                  {isPanelOpen
                    ? "▼ Hide Top 10 Suburbs"
                    : "▶ See Top 10 Suburbs"}
                </button>

                {isPanelOpen && (
                  <>
                    <h3 className=" font-istok text-lg text-center font-bold mt-2">
                      Suburb Recommendations For You
                    </h3>
                    <table className="mx-auto">
                      <thead>
                        <tr>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            Rank
                          </th>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            Score
                          </th>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            Suburbs
                          </th>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            Rent ($/week)
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" text-sm font-normal items-center justify-center text-center">
                        {topTenSuburbs.map((suburb, index) => (
                          <tr key={suburb.suburb} style={{ margin: "1rem" }}>
                            <td className="px-2 py-2">{index + 1}</td>
                            <td className="px-2 py-2">
                              {(suburb.liveability_score * 100).toFixed(2)}
                            </td>
                            <td className="px-2 py-2">{suburb.suburb}</td>
                            <td className="px-2 py-2">
                              ${suburb.average_rent}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </>
                )}
              </Box>

              {/* Selected feature details 
                cannot the box cannot be displayed near the mouse*/}
              {selectedFeature && (
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "1rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: 1000,
                    position: "absolute",
                    left: `${boxPosition.x + 50}px`,
                    top: `${boxPosition.y + 2}px`,
                  }}
                >
                  <button
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "15px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                    onClick={() => setSelectedFeature(null)}
                  >
                    x
                  </button>
                  <p>Name: {selectedFeature.suburb}</p>
                  <p>Council: {selectedFeature.lga}</p>
                  <p>
                    Liveability Score:{" "}
                    {(selectedFeature.liveability_score * 100).toFixed(2)}%
                  </p>
                </div>
              )}
            </Box>
          </Box>
        </section>
        <Footer />
      </main>
    </>
  );
}
