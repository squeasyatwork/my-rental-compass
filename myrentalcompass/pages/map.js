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
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>MyRentalCompass | Map</title>
        <meta name="description" content="Find the best places to live." />
      </Head>

      <div className="font-istok flex flex-col min-h-screen bg-white text-black">
        <Navbar activePage="Find where to live" /> {/* Navbar */}
        {/* Title and Text Section */}
        <section className="flex flex-col md:flex-col sm:flex-col items-start justify-center mb-4 pt-5 pl-12 pb-2 text-left">
          <h2 className="text-3xl font-bold pb-1">
            Liveability index of Melbourne suburbs
          </h2>
          <p className="text-xl py-1 w-2/3">
            The interactive map below shows each suburb&apos;s average rental amount as well a liveability index based on 4 key criteria: safety, affordability, accessibility and wellness.
          </p>
          <p className="text-xl py-1 w-2/3">To learn more about liveability and how it is calculated, see our &apos;
            <span>
              <a href="/liveability" className="underline hover:text-ButtonHoverYellow">What is liveability</a>
            </span>&apos; page</p>
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
              <span className=" py-1">Liveability Index</span>
            </div>
          </div>
          <div
            className="flex justify-center w-full h-full"
          >
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
                ) : !showCard && (
                  <DynamicBasicMap
                    recommendations={false}
                    setSelectedFeature={setSelectedFeature}
                    style={{ zIndex: 1 }}
                  />
                )}
              </div>
              {/* Liveability Index Information Section */}
              <div className="flex flex-col justify-between text-md px-8 py-4 bg-MapHeadingGray shadow-md lg:w-1/3 md:w-1/3 sm:w-1/3">
                <div className="mb-16">
                  <div className="mb-4">
                    <h2 className=" font-bold text-lg mb-1">Selected area:</h2>
                    <div className="flex flex-col p-4 rounded-2xl w-auto border-MerciPurple border-3" >
                      <h3 className="font-semibold">
                        Suburb: {selectedFeature?.suburb || "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Council: {selectedFeature?.lga || "N/A"}
                      </h3>
                      <h3 className="font-semibold">
                        Liveability Score:{" "}
                        {selectedFeature?.liveability_score
                          ? `${(selectedFeature.liveability_score * 100).toFixed(
                            0
                          )}%`
                          : "N/A"}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h2 className=" font-bold text-lg mb-1">Selected indicator:</h2>
                    <div className="flex flex-col p-4 rounded-2xl w-auto border-MerciPurple border-3" >
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
                <div className="flex flex-col justify-between text-lg items-center">
                  <Link href="/questionnaire">
                    <button className="call-action-button">
                      Get customised recommendations
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {(
          <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-99 overflow-auto"
          style={{
            transition: "opacity 0.5s ease-in-out, visibility 0.4s ease-in-out, max-height 0.5s ease-in-out",
            opacity: showCard ? "1" : "0",
            visibility: showCard ? "visible" : "hidden"
          }}>
            <div className="flex flex-col justify-center items-center mb-4 text-left bg-PopupPurple rounded-xl">
              <div className="flex justify-between items-center bg-white rounded-t-xl p-8 mb-2">
                <p className=" text-xl font-bold">
                  Did you know?<br></br>
                  One of the most common scams targeting<br></br>
                  international students is rental fraud
                </p>
                <Image
                  src= "/woman.gif"
                  alt= "woman"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className=" font-bold text-lg">Educate yourself now to avoid falling for dodgy rental deals</h2>
                <br></br>
                <div className=" border-b-2 border-MerciPurple pb-6">
                  <div className="flex flex-col justify-center items-center mb-4">
                    <p>Learn more about the rental process in Melbourne</p>
                    <Link href="/resources"> 
                      <button className=" bg-ResourceButtonYellow call-action-button text-md">
                        <p>What you need to do</p>
                      </button>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>Learn more about the rental laws and your rights</p>
                    <Link href="/rights"> 
                      <button className=" bg-ResourceButtonYellow call-action-button text-md">
                        <p>What you need to know</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <br></br>
              <button className="text-2xl font-bold call-action-button mb-4" onClick={toggleCard}>
                Continue
              </button>
            </div>
          </div>
        )}
        </section>
        <Footer /> {/* Footer */}
      </div>
    </>
  );
}

export default Map;
