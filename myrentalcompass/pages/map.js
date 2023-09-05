import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"; // Import useState hook
import dynamic from "next/dynamic";
import Navbar from "~/pages/helperpages/navbar.js";
import Footer from "~/pages/helperpages/footer.js";

const DynamicBasicMap = dynamic(() => import("~/components/BasicMap"), {
  ssr: false,
});

function Map() {
  const [selectedFeature, setSelectedFeature] = React.useState(null);

  return (
    <>
      <Head>
        <title>MyRentalCompass | Map</title>
        <meta name="description" content="Find the best places to live." />
      </Head>

      <div className="font-inter flex flex-col h-screen bg-white">
        <Navbar activePage="Find where to live" /> {/* Navbar */}
        {/* Title and Text Section */}
        <section className="flex flex-col items-start justify-center pt-5 pl-12 pb-2 text-left">
          <h2 className="text-3xl font-bold pb-1">
            Liveability index of Melbourne suburbs
          </h2>
          <h2 className="text-xl py-1 w-2/3">
            {
              "The interactive map below shows each suburb's liveability index based on 4 key criteria: safety, affordability, accessibility, and wellness."
            }
          </h2>
        </section>
        {/* Liveability Index Information Section */}
        <div className="flex justify-center items-center w-full">
          <div
            className="flex text-xl items-center font-semibold w-2/3 text-green-700 bg-MapHeadingGray"
            style={{
              width: "66.656%",
              height: "auto",
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
            <span>Liveability Index</span>
          </div>
        </div>
        {/* Map Section */}
        <section className="flex-grow flex flex-row items-center justify-center">
          <div className="w-2/3 h-5/6 ml-12">
            <DynamicBasicMap
              recommendations={false}
              setSelectedFeature={setSelectedFeature}
            />
          </div>

          {/* New div for displaying info */}
          <div className="w-1/3 h-5/6 flex flex-col justify-between p-4 bg-gray-200 shadow-md mr-12">
            <div>
              <h3 className="font-semibold text-NavTextGray">
                LGA: {selectedFeature?.lga || "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                Suburb: {selectedFeature?.suburb || "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                Liveability Score:{" "}
                {selectedFeature?.liveability_score
                  ? `${(selectedFeature.liveability_score * 100).toFixed(0)}%`
                  : "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                Average Rent:{" "}
                {selectedFeature?.average_rent
                  ? `$${selectedFeature.average_rent.toFixed(2)} per week`
                  : "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                No. of PTV Stops: {selectedFeature?.ptv_stop_count || "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                Number of Park & Recreation Areas:{" "}
                {selectedFeature?.openspace_count || "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                Traffic Incident Count: {selectedFeature?.crash_count || "N/A"}
              </h3>
              <h3 className="font-semibold text-NavTextGray">
                Crime Count: {selectedFeature?.crime_count || "N/A"}
              </h3>
            </div>
            <div className="flex flex-col justify-between items-center space-y-4">
              {/* REMEMBER TO RECONFIGURE THE LINKS BELOW */}
              <Link href="/scratchquestionnaire">
                <button className="call-action-button">
                  Get new recommendations
                </button>
              </Link>
              <Link href="/scratchquestionnaire">
                <button className="call-action-button bg-FooterButtonYellow">
                  View my previous recommendations
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Footer /> {/* Footer */}
      </div>
    </>
  );
}

export default Map;
