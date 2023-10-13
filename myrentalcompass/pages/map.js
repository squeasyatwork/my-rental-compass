import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Import useState hook
import dynamic from "next/dynamic";
import Navbar from "~/pages/helperpages/navbar.js";
import Footer from "~/pages/helperpages/footer.js";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "~/next-i18next.config";

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(
        locale,
        ["common", "map"],
        i18nextConfig
      )),
    },
  };
}

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

function Map() {
  const { t } = useTranslation();
  const [selectedFeature, setSelectedFeature] = React.useState(null);
  const [mapLoading, setMapLoading] = useState(true);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  const toggleCard = () => {
    sessionStorage.setItem("hasShownPopup", "true");
    setShowCard(!showCard);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  console.log(
    "Average Rent Type:",
    typeof t.average_rent,
    "Value:",
    t.average_rent
  );
  // const averageRentFormatted =
  //   typeof t.average_rent === "number" ? t.average_rent.toFixed(2) : "N/A";

  let displayedRent = "N/A";
  if (typeof selectedFeature?.average_rent === "number") {
    displayedRent = `$${selectedFeature.average_rent.toFixed(2)} per week`;
  }

  return (
    <>
      <Head>
        <title>{"MyRentalCompass | " + t("map:tab_title")}</title>
        <meta name="description" content="Find the best places to live." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="font-istok flex flex-col min-h-screen bg-BackgroundWhite text-black">
        <Navbar activePage="Find where to live" className="z-10" />{" "}
        {/* Navbar */}
        {/* Title and Text Section */}
        <section className="flex flex-col md:flex-col sm:flex-col items-center justify-center p-4 text-left mb-4">
          <h2 className="flex justify-center font-bold text-5xl text-HeadingTextGray my-4">
            {t("map:page_heading")}
          </h2>
          <p className="text-xl w-2/3">
            {t("map:page_description_para_1")}
          </p>
          <p className="text-xl w-2/3">
            {t("map:page_description_para_2_part_1") + " "}
            &apos;
            <span>
              <Link
                href="/liveability"
                className="underline hover:text-ButtonHoverYellow"
              >
                {t("map:page_description_para_2_part_2")}
              </Link>
            </span>
            &apos; {" " + t("map:page_description_para_2_part_3")}
          </p>
        </section>
        {/* Map Section */}
        <section className="flex-grow flex flex-col h-full">
          <div className="flex justify-center items-center">
            <div
              className="flex text-xl lg:text-2xl md:text-xl sm:text-xl items-center w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5 h-3/4 lg:h-3/4 md:h-auto sm:h-auto font-semibold text-green-700 bg-MapHeadingGray"
              style={{
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Image
                src="/information-icon.svg"
                alt="information:"
                width={22}
                height={22}
                className="rounded-xl mx-2"
              />
              <span className=" py-1">{t("map:map_box_title")}</span>
            </div>
          </div>
          <div className="flex justify-center w-full h-full">
            <div className="flex justify-center w-4/5">
              <div
                className="flex justify-center items-center"
                style={{ flex: "1" }}
              >
                {mapLoading ? (
                  <div>
                    <img
                      src="/map-loading-animation-2.gif"
                      alt="Loading"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                ) : (
                  !showCard && (
                    <DynamicBasicMap
                      recommendations={false}
                      setSelectedFeature={setSelectedFeature}
                      style={{ zIndex: 1 }}
                    />
                  )
                )}
              </div>
              {/* Liveability Index Information Section */}
              <div className="flex flex-col justify-between text-md px-8 py-4 bg-MapHeadingGray shadow-md lg:w-1/3 md:w-1/3 sm:w-1/3">
                <div className="mb-16">
                  <div className="mb-4">
                    <h2 className=" font-bold text-lg mb-1">{t("map:map_box_area_title")}</h2>
                    <div className="flex flex-col p-4 rounded-2xl w-auto border-MerciPurple border-3">
                      <h3>
                        {t("map:map_box_area_suburb")} {selectedFeature?.suburb || "N/A"}
                      </h3>
                      <h3>
                        {t("map:map_box_area_council")} {selectedFeature?.lga || "N/A"}
                      </h3>
                      <h3>
                        {t("map:map_box_area_score")} {" "}
                        {selectedFeature?.liveability_score
                          ? `${(
                            selectedFeature.liveability_score * 100
                          ).toFixed(0)}%`
                          : "N/A"}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2 className=" font-bold text-lg mb-1">
                      {t("map:map_box_indicator_title")}
                    </h2>
                    <div className="flex flex-col p-4 rounded-2xl w-auto border-MerciPurple border-3">
                      <h3>
                        {t("map:map_box_indicator_rent")} {displayedRent}
                      </h3>
                      <h3>
                        {t("map:map_box_indicator_transport")} {" "}
                        {selectedFeature?.ptv_stop_count || "N/A"}
                      </h3>
                      <h3>
                        {t("map:map_box_indicator_park")}{" "}
                        {selectedFeature?.openspace_count || "N/A"}
                      </h3>
                      <h3>
                        {t("map:map_box_indicator_road")} {" "}
                        {selectedFeature?.crash_count || "N/A"}
                      </h3>
                      <h3>
                        {t("map:map_box_indicator_crime")} {" "}
                        {selectedFeature?.crime_count || "N/A"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between text-lg items-center">
                  <Link href="/questionnaire">
                    <button className="call-action-button">
                      {t("map:recommendations_button")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {
            <div
              className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-99 overflow-auto"
              style={{
                transition:
                  "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, max-height 0.3s ease-in-out",
                opacity: showCard ? "1" : "0",
                visibility: showCard ? "visible" : "hidden",
              }}
            >
              <div className="flex flex-col justify-center items-center mb-4 text-left bg-PopupPurple rounded-xl">
                <div className="flex justify-between items-center bg-BackgroundWhite rounded-t-xl p-8 mb-2">
                  <p className=" text-xl font-bold">
                    {t("map:modal_heading_line_1")}<br></br>
                    {t("map:modal_heading_line_2")}<br></br>
                    {t("map:modal_heading_line_3")}
                  </p>
                  <Image
                    src="/woman.gif"
                    alt="woman"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className=" font-bold text-lg">
                    {t("map:modal_subheading")}
                  </h2>
                  <br></br>
                  <div className=" border-b-2 border-MerciPurple pb-6">
                    <div className="flex flex-col justify-center items-center mb-4">
                      <p>{t("map:modal_button_1_description")}</p>
                      <Link href="/resources">
                        <button className=" bg-ResourceButtonYellow call-action-button text-base">
                          <p>{t("map:modal_button_1_text")}</p>
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p>{t("map:modal_button_2_description")}</p>
                      <Link href="/rights">
                        <button className=" bg-ResourceButtonYellow call-action-button text-base">
                          <p>{t("map:modal_button_2_text")}</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <br></br>
                <button
                  className="text-2xl font-bold call-action-button mb-4"
                  onClick={toggleCard}
                >
                  {t("map:modal_continue_button")}
                </button>
              </div>
            </div>
          }
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Map;
