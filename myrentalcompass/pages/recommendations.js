import * as React from "react";
import Router from "next/router";
import { Box } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState, useContext, useEffect } from "react";

import { RentSlider, LiveabilitySliders } from "~/components/Sliders.js";
import UniversityDropdown from "~/components/Dropdown";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import DataContext from "../components/DataContext.js";
import Image from "next/image.js";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "~/next-i18next.config";

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

export const config = {
  runtime: "nodejs",
};

export const getServerSideProps = async (context) => {
  const { locale } = context;
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
      console.log("RECOS: DB response OK and header condition true.");
      let data = await dbResponse.json();
      return {
        props: {
          data: data, contextQuery: contextQuery,
          ...(await serverSideTranslations(
            locale,
            ["common", "recommendations"],
            i18nextConfig
          ))
        }
      };
    }
  }

  console.log("RECOS: DB response not OK or header condition not true.");
  return {
    props: {
      data: null, contextQuery: {},
      ...(await serverSideTranslations(
        locale,
        ["common", "recommendations"],
        i18nextConfig
      )),
    }
  };
};

export default function Recommendations({ data = null, contextQuery = {} }) {
  const { t } = useTranslation();
  const contextValues = useContext(DataContext);

  // console.log("(/recommendations 50:) DataContext contents:", contextValues); // Added this line
  console.log("(/recommendations 51:) contextQuery rent value:", contextQuery.rent);

  const [showDetails1, setShowDetails1] = useState(true);
  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  // const { rent, transport, park, crime, road, university } =
  //   contextValues.data || {};

  const { rankedSuburbs = [] } = data || {};

  const router = Router.useRouter();

  const [inputValues, setInputValues] = React.useState({
    rent: contextQuery.rent || 400,
    transport: contextQuery.transport || 3,
    park: contextQuery.park || 3,
    crime: contextQuery.crime || 3,
    road: contextQuery.road || 3,
    university: contextQuery.university || "",
  });

  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  // AM_translation/2: added query param while pushing to this page from questionnaire, so we can skip this as it reloads this page upon every visit to it. CAUTION: Find an alternative to display the uni pin; because its logic is currently in the sendInput() block.
  useEffect(() => {
    //   console.log("Values from DataContext on Recommendations page load:", contextValues);
    sendInput();
  }, []);

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

  console.log("(/recommendations 50:) [recos -> RentSLider] rent: ", inputValues.rent);
  return (
    <>
      <Head>
        <title>{"MyRentalCompass | " + t("recommendations:tab_title")}</title>
        <meta name="description" content="Discover potential suburbs." />
      </Head>
      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="Find where to live" />

        <section className="flex flex-col bg-ResourceButtonYellow md:flex-col sm:flex-col items-start justify-center pt-5 pl-12 pb-2 text-left">
          <div className="flex font-bold text-4xl text-black items-center">
            <h1 className="mr-2">{t("recommendations:page_heading")}</h1>
            <button onClick={toggleDetails1}>
              <Image src="/query.gif" alt="query" width={50} height={50} />
            </button>
          </div>
          <div
            className=" p-4 text-lg text-left text-LongContentGray bg-FooterButtonYellow rounded-xl"
            style={{
              transition:
                "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
              opacity: showDetails1 ? "1" : "0",
              visibility: showDetails1 ? "visible" : "hidden",
              maxHeight: showDetails1 ? "1000px" : "0",
            }}
          >
            <div className="font-bold text-2xl text-HeadingTextGrayp-6 rounded-xl">
              <h2>{"●" + t("recommendations:page_subheading_1")} </h2>
              <p className="text-xl font-normal">
                {"    " + t("recommendations:page_description_1_part_1")}
                <br />
                {"    " + t("recommendations:page_description_1_part_2")}.
              </p>
              <h2>{"●" + t("recommendations:page_subheading_2")}</h2>
              <p className="text-xl font-normal">
                {"    " + t("recommendations:page_description_2")}
              </p>
            </div>
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
                <h1>{t("recommendations:slider_section_heading")}</h1>
              </div>
              {/* Rental and liveability sliders */}
              <RentSlider
                labelText={t("recommendations:rent_slider")}
                handleChoice={handleSliderChange("rent")}
                defaultArg={inputValues.rent}
              />
              <LiveabilitySliders

                inputValues={inputValues}
                handleSliderChange={handleSliderChange}
              />

              {/* University dropdown */}
              <UniversityDropdown
                labelText={t("recommendations:university_label")}
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
                {t("recommendations:slider_section_update_button")}
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
                bgcolor="#FFFEFC"
                padding="1rem"
                borderRadius="10px"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  justifyContent: "start",
                  alignItems: "center",
                  right: 0,
                  top: "10px",
                  width: "37%",
                  boxShadow: "0 4px 6px rgb(0 0 0 / 0.1)",
                  maxHeight: "90vh",
                  //overflowY: "scroll",
                  zIndex: 10,
                }}
              >
                {/* Panel toggle button */}
                <button
                  className=" text-base md:text-base lg:text-base font-bold call-action-button"
                  onClick={() => setIsPanelOpen(!isPanelOpen)}
                >
                  {isPanelOpen
                    ? "▼ " + t("recommendations:map_hide_suburb_list")
                    : "▶ " + t("recommendations:map_show_suburb_list")}
                </button>

                {isPanelOpen && (
                  <>
                    <h3 className="font-istok text-lg text-center font-bold mt-2 -z-50">
                      {t("recommendations:map_suburb_list_title")}
                    </h3>
                    <table className="mx-auto">
                      <thead>
                        <tr>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            {t("recommendations:map_suburb_list_rank")}
                          </th>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            {t("recommendations:map_suburb_list_score")}
                          </th>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            {t("recommendations:map_suburb_list_suburb")}
                          </th>
                          <th className=" text-sm font-medium px-2 border-b-2">
                            {t("recommendations:map_suburb_list_rent")}
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
                              A${suburb.average_rent}
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
                    zIndex: 10,
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
                  <p>
                    {t("recommendations:map_current_suburb_name") +
                      ": " +
                      selectedFeature.suburb}
                  </p>
                  <p>
                    {t("recommendations:map_current_suburb_council") +
                      ": " +
                      selectedFeature.lga}
                  </p>
                  <p>
                    {t("recommendations:map_current_suburb_score") +
                      ": " +
                      (selectedFeature.liveability_score * 100).toFixed(2)}
                    %
                  </p>
                </div>
              )}
            </Box>
          </Box>
          <div className="flex justify-between items-center w-full my-4 px-48 pt-6">
            <button
              className="text-lg md:text-lg lg:text-lg font-bold call-action-button bg-FooterButtonYellow p-2 z-0"
              onClick={() => router.push("/map")}
            >
              {t("recommendations:map_page_button")}
            </button>
            <div className="flex items-center">
              <span className="text-xl mr-8 font-bold">
                {t("recommendations:dream_suburb_text")}
              </span>
              <button
                className="text-lg md:text-lg lg:text-lg font-bold call-action-button lg:w-96 z-0"
                onClick={() => router.push("/resources")}
              >
                {t("recommendations:resources_page_button")}
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
