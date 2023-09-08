import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Import useState hook
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>MyRentalCompass | Map</title>
        <meta name="description" content="Find the best places to live." />
      </Head>

      <div className="font-inter flex flex-col min-h-screen bg-white text-black">
        <Navbar activePage="Find where to live" /> {/* Navbar */}
        {/* Title and Text Section */}
        <section className="flex flex-col md:flex-col sm:flex-col items-start justify-center mb-4 pt-5 pl-12 pb-2 text-left">
          <h2 className="text-3xl font-bold pb-1">
            Liveability index of Melbourne suburbs
          </h2>
          <h2 className="text-xl py-1 w-2/3">
            {
              "The interactive map below shows each suburb's liveability index based on 4 key criteria: safety, affordability, accessibility, and wellness. Click on a suburb below to get more information!"
            }
          </h2>
        </section>
        {/* Liveability Index Information Section */}
        {/* Map Section */}
        <section className="flex-grow flex flex-col h-full">
          <div className="flex justify-center items-center">
            <div
              className="flex text-xl lg:text-2xl md:text-xl sm:text-xl items-center w-full lg:w-3/4 md:w-full sm:w-full h-3/4 lg:h-3/4 md:h-auto sm:h-auto font-semibold text-green-700 bg-MapHeadingGray"
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
              <span className=" py-1">Liveability Index</span>
            </div>
          </div>
          <div
            className="flex justify-center "
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="flex justify-center"
              style={{ width: "75%", height: "90%" }}
            >
              <div
                className="flex justify-center items-center"
                style={{ flex: "1" }}
              >
                {mapLoading ? (
                  <div>
                    <img
                      src="/loading.gif"
                      alt="Loading"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                ) : (
                  <DynamicBasicMap
                    recommendations={false}
                    setSelectedFeature={setSelectedFeature}
                  />
                )}
              </div>
              {/* New div for displaying info */}
              <div className="flex flex-col justify-between text-md px-8 py-4 bg-MapHeadingGray shadow-md w-full lg:w-1/3 md:w-full sm:w-full">
                <div className="mb-12">
                  <div className="mb-4">
                    <h2 className=" font-bold text-lg mb-1">Selected area:</h2>
                    <div className="flex flex-col p-2 rounded-2xl w-auto" style={{border: "3px solid #05FFD7"}}>
                      <h3 className="font-semibold">
                        Suburb: {selectedFeature?.suburb || "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Council: {selectedFeature?.lga || "N/A"}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2 className=" font-bold text-lg mb-1">Selected indicator:</h2>
                    <div className="flex flex-col p-2 rounded-2xl w-auto" style={{border: "3px solid #05FFD7"}}>
                      <h3 className="font-semibold">
                        Liveability Score:{" "}
                        {selectedFeature?.liveability_score
                          ? `${(selectedFeature.liveability_score * 100).toFixed(
                              0
                            )}%`
                          : "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Average Rent:{" "}
                        {selectedFeature?.average_rent
                          ? `$${selectedFeature.average_rent.toFixed(2)} per week`
                          : "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        No. of Public Transport Stops:{" "}
                        {selectedFeature?.ptv_stop_count || "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Number of Parks & Recreation Areas:{" "}
                        {selectedFeature?.openspace_count || "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Traffic Incident Count (past 12 months):{" "}
                        {selectedFeature?.crash_count || "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Crime Count (past 12 months):{" "}
                        {selectedFeature?.crime_count || "N/A"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between text-lg items-center space-y-4">
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
            </div>
          </div>
        </section>
        <Footer /> {/* Footer */}
      </div>
    </>
  );
}

export default Map;
