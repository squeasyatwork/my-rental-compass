import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export const ResourceSection = ({ id, imageSrc, altText, link }) => {
  return (
    <div
      id={id}
      className="flex flex-col justify-between w-96 h-80 border border-NavTextGray rounded-lg shadow-sm mx-auto p-4 pt-12"
    >
      <div className="flex-1 flex justify-center items-start">
        <Image
          loader={imageLoader}
          src={imageSrc}
          alt={altText}
          width={150}
          height={100}
          loading="eager"
          className="mx-auto"
        />
      </div>
      <div className="mt-auto flex items-center justify-center pb-4">
        <Link href={link}>
          <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

function Liveability() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  const toggleDetails4 = () => {
    setShowDetails4(!showDetails4);
  };
  
  return (
    <>
      <Head>
        <title>MyRentalCompass | Liveability</title>
        <meta name="description" content="Learn about liveability factors." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black">
        <Navbar activePage="What is liveability" className="z-10" />

        <div className="relative h-3/5 w-full">
          <img
            loader={imageLoader}
            loading="eager"
            src="/park.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col justify-center my-44">
              <h1 className="text-5xl font-bold text-center">
               Liveability is what a place like to live in
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                - a liveable place is a healthy place
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white font-istok p-6 ">
          <div className=" font-bold text-5xl text-HeadingTextGray mb-4">
            <h1>What is liveability?</h1>
          </div>
          <div className=" px-6 py-2">
            <h2 className="font-bold text-3xl mb-4">Liveability Index</h2>
            <h2 className="text-2xl">The Liveability Index is a composite score based on measures related to aspects of liveability including good transport connectivity, 
            safe roads, low crime rate, and abundance of open spaces.</h2>
            <br></br>
            <h2 className="text-2xl">Click on each aspect to know more.</h2>
          </div>
          <div className="flex flex-col justify-center items-center px-6 py-2 mt-8">
            <div className="flex flex-col justify-center items-center">
              <button onClick={toggleDetails1}>
                <Image
                  src="/1-transport.svg"
                  alt="transport"
                  width={300}
                  height={300}
                  className=" hover:scale-110 transition duration-1000 ease-in-out"
                />
              </button>
              <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                style={{
                  transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out", 
                  opacity: showDetails1 ? "1" : "0", 
                  visibility: showDetails1 ? "visible" : "hidden"
                }}>
                <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                  style={{ width: "36%"}}>
                  <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                    <Image
                      src="/subway-map.png"
                      alt="subway"
                      width={200}
                      height={200}
                    />
                    <h2>Good transport</h2>
                    <h2>connectivity</h2>
                  </div>
                  <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                    <h2 className=" text-justify">
                      In measuring how well connected a suburb is to the public transportation system, 
                      we use the open data by Public Transport Victoria (PTV) 
                      to count the number of public transport stops that exist in every suburb. 
                    </h2>
                    <h2 className=" text-justify mb-2">Source: </h2>
                    <a href="https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2"
                    className=" flex justify-center hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2</a>
                  </div>
                  <div className="flex justify-between items-center mt-8 px-6">
                    <Image
                      src="/train.png"
                      alt="train"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="/bus.png"
                      alt="bus"
                      width={100}
                      height={100}
                      
                    />
                    <Image
                      src="/tram.png"
                      alt="tram"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <button onClick={toggleDetails1}>
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={80}
                    height={80}
                    className=" hover:opacity-70 transition duration-1000 ease-in-out"
                  />
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <button onClick={toggleDetails2}>
                  <Image
                    src="/4-crime.svg"
                    alt="crime"
                    width={300}
                    height={300}
                    className=" hover:scale-110 transition duration-1000 ease-in-out"
                  />
                </button>
                <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out", 
                    opacity: showDetails2 ? "1" : "0", 
                    visibility: showDetails2 ? "visible" : "hidden"
                  }}>
                  <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                    style={{ width: "36%"}}>
                    <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                      <Image
                        src="/secure-shield.png"
                        alt="secure"
                        width={200}
                        height={200}
                      />
                      <h2>Low crime rate</h2>
                    </div>
                    <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                      <h2 className=" text-justify">
                        We measure liveability based on the crime rate recorded in a particular suburb. 
                        We used crime statistics data that has been recorded in the year 2019.
                      </h2>
                      <h2 className=" justify-start text-justify mb-2">Source: </h2>
                      <a href="https://www.crimestatistics.vic.gov.au/crime-statistics/latest-victorian-crime-data/download-data"
                      className=" mb-2 hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://www.crimestatistics.vic.gov.au/crime-statistics/latest-victorian-crime-data/download-data</a>
                      <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023"
                      className=" hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 2. https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023</a>
                    </div>
                    <div className="flex justify-around items-center mt-8 px-6">
                      <Image
                        src="/police-station.png"
                        alt="police"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/couple.png"
                        alt="couple"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <button onClick={toggleDetails2}>
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={80}
                      height={80}
                      className=" hover:opacity-70 transition duration-1000 ease-in-out"
                    />
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src="/centre-liveability.svg"
                  alt="centre-liveability"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <button onClick={toggleDetails3}>
                  <Image
                    src="/2-roads.svg"
                    alt="roads"
                    width={300}
                    height={300}
                    className=" hover:scale-110 transition duration-1000 ease-in-out"
                  />
                </button>
                <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out", 
                    opacity: showDetails3 ? "1" : "0", 
                    visibility: showDetails3 ? "visible" : "hidden"
                  }}>
                  <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                    style={{ width: "36%"}}>
                    <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                      <Image
                        src="/t-kreuzung.png"
                        alt="t-kreuzung"
                        width={200}
                        height={200}
                      />
                      <h2>Safe roads</h2>
                    </div>
                    <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                      <h2 className=" text-justify">
                        We count the number of road crashes and traffic incidents that have been recorded in each suburbs in the year 2022 and 2023.
                      </h2>
                      <h2 className=" justify-start text-justify mb-2">Source: </h2>
                      <a href="https://discover.data.vic.gov.au/dataset/crash-stats-data-extract"
                      className=" hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://discover.data.vic.gov.au/dataset/crash-stats-data-extract</a>
                    </div>
                    <div className="flex justify-between items-center mt-8 px-6">
                      <Image
                        src="/speed-limit.png"
                        alt="speed"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/guard.png"
                        alt="guard"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/car.png"
                        alt="car"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <button onClick={toggleDetails3}>
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={80}
                      height={80}
                      className=" hover:opacity-70 transition duration-1000 ease-in-out"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <button onClick={toggleDetails4}>
                  <Image
                    src="/3-openspace.svg"
                    alt="openspace"
                    width={300}
                    height={300}
                    className=" hover:scale-110 transition duration-1000 ease-in-out"
                  />
                </button>
                <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out", 
                    opacity: showDetails4 ? "1" : "0", 
                    visibility: showDetails4 ? "visible" : "hidden"
                  }}>
                  <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                    style={{ width: "36%"}}>
                    <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                      <Image
                        src="/nature.png"
                        alt="nature"
                        width={200}
                        height={200}
                      />
                      <h2>Abundance of</h2>
                      <h2>open spaces</h2>
                    </div>
                    <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                      <h2 className=" text-justify">
                        We count the number of parks and gardens that exists within the geographical boundary of each suburb in 2023.
                      </h2>
                      <h2 className=" justify-start text-justify mb-2">Source: </h2>
                      <a href="https://discover.data.vic.gov.au/dataset/open-space"
                      className=" mb-2 hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://discover.data.vic.gov.au/dataset/open-space</a>
                      <a href="https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundarie"
                      className=" hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 2. https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundarie</a>
                    </div>
                    <div className="flex justify-between items-center mt-8 px-6">
                      <Image
                        src="/playground.png"
                        alt="playground"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/running.png"
                        alt="running"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/park.png"
                        alt="park"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <button onClick={toggleDetails4}>
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={80}
                      height={80}
                      className=" hover:opacity-70 transition duration-1000 ease-in-out"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-6 py-2 mt-12">
            <Link href="https://auo.org.au/">
              <button className="text-sm md:text-sm lg:text-sm font-bold call-action-button mr-16">
                Read more at the Australian Urban Observatory website
              </button>
            </Link>
            <Link href="/">
              <button className="text-xl bg-ResourceButtonYellow md:text-xl lg:text-xl font-bold call-action-button p-7">
                Return Home
              </button>
            </Link>
          </div>
          <div className="flex flex-col justify-center px-6 mt-12">
            <h1 className="font-bold text-3xl">References</h1>
            <a href="https://research-repository.uwa.edu.au/en/publications/creating-liveable-cities-in-australia-mapping-urban-policy-implem"
              className=" hover:underline">
              <h2 className=" text-HeadingTextGray">1. Arundel J, Lowe M, Hooper P, Roberts R, Rozek J, Higgs C, Giles-Corti B. (2017) Creating liveable cities in Australia: Mapping urban policy implementation and evidence-based national liveability indicators. Centre for Urban Research (CUR). RMIT University.</h2>
            </a>
          </div>
        </div>
          <div className="bg-white px-4 pb-12">
            <h1 className="index-page-section-heading pt-6 pb-6">
              Other Resources
            </h1>
            <div className="yqa-cross-section-container">
              <ResourceSection
                id="or-section-1"
                imageSrc="/or-plan-melb-picture.jpeg"
                altText="or-plan-melb-picture"
                link="https://www.planning.vic.gov.au/guides-and-resources/strategies-and-initiatives/plan-melbourne"
              />
              <ResourceSection
                id="or-section-2"
                imageSrc="/or-unsdg-picture.jpeg"
                altText="or-unsdg-picture"
                link="https://sdgs.un.org/goals/goal11"
              />
              <ResourceSection
                id="or-section-3"
                imageSrc="/or-crt-logo.jpeg"
                altText="or-crt-picture"
                link="https://www.rentingcommissioner.vic.gov.au/"
              />
            </div>
          </div>
        <Footer />
      </main>
    </>
  );
}

export default Liveability;
