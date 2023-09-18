import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Image from "next/image";
import { useState } from "react";

const imageLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
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
        <div className="flex flex-col justify-center bg-white font-istok p-12 ">
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
          <div className="flex flex-col justify-center items-center px-6 py-2 mt-12">
            <div className="flex flex-col justify-center items-center">
              
              <button onClick={toggleDetails1}>
                <Image
                  src="/1-transport.svg"
                  alt="transport"
                  width={250}
                  height={250}
                />
              </button>
              <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                style={{
                  transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out", 
                  opacity: showDetails1 ? "1" : "0", 
                  visibility: showDetails1 ? "visible" : "hidden"
                }}>
                <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                  style={{ width: "35%"}}>
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
                  <div className=" flex flex-col justify-center items-center px-6 text-lg font-medium mt-4">
                    <h2 className=" text-justify">
                      In measuring how well connected a suburb is to the public transportation system, 
                      we use the open data by Public Transport Victoria (PTV) 
                      to count the number of public transport stops that exist in every suburb. 
                    </h2>
                    <a href="https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2"
                    className=" hover:underline hover:text-ButtonHoverYellow"> 1. https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2</a>
                  </div>
                  <div className="flex justify-between items-center mt-8 px-6">
                    <Image
                      src="/train.png"
                      alt="train"
                      width={100}
                      height={100}
                      //className="mr-12"
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
            <div></div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Liveability;
