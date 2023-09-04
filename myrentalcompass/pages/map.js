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
  // create a loading state
  const [mapLoading, setMapLoading] = useState(true);

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
            {mapLoading ? (
              <div className="w-full h-full flex items-center justify-center" >
                <img src="/loading.gif" alt="Loading" style={{width: "200px", height: "200px"}}/>
              </div>
            ) : (
              <DynamicBasicMap
                recommendations={false}
                setSelectedFeature={setSelectedFeature}
                onMapLoad={() => setMapLoading(false)} // Set loading to false when the map has loaded
              />
            )}
          </div>

          {/* New div for displaying info */}
          <div className="w-1/3 h-5/6 flex flex-col justify-between p-4 bg-gray-200 shadow-md mr-12">
            <div>
              <h3 className="font-semibold">
                LGA: {selectedFeature?.lga || "N/A"}
              </h3>
              <h3 className="font-semibold">
                Suburb: {selectedFeature?.suburb || "N/A"}
              </h3>
              <h3 className="font-semibold">
                Liveability Score:{" "}
                {selectedFeature?.liveability_score
                  ? `${(selectedFeature.liveability_score * 100).toFixed(0)}%`
                  : "N/A"}
              </h3>
              <h3 className="font-semibold">
                Average Rent:{" "}
                {selectedFeature?.average_rent
                  ? `$${selectedFeature.average_rent.toFixed(2)} per week`
                  : "N/A"}
              </h3>
              <h3 className="font-semibold">
                No. of PTV Stops: {selectedFeature?.ptv_stop_count || "N/A"}
              </h3>
              <h3 className="font-semibold">
                Number of Park & Recreation Areas:{" "}
                {selectedFeature?.openspace_count || "N/A"}
              </h3>
              <h3 className="font-semibold">
                Traffic Incident Count: {selectedFeature?.crash_count || "N/A"}
              </h3>
              <h3 className="font-semibold">
                Crime Count: {selectedFeature?.crime_count || "N/A"}
              </h3>
            </div>
            <div className="flex flex-col justify-between items-center space-y-4">
              <Link href="/questionnaire">
                <button className="call-action-button">
                  Get new recommendations
                </button>
              </Link>
              <Link href="/recommendations">
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
