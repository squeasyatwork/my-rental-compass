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
              <div className="p-4 mb-8 text-left bg-FooterButtonYellow rounded-xl"
                style={{ width: "25%", 
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out", 
                opacity: showDetails1 ? "1" : "0", 
                visibility: showDetails1 ? "visible" : "hidden", 
                maxHeight: showDetails1 ? "1000px" : "0" }}>
                <h2> ● A condition report is a&nbsp;
                  <span className="font-bold">record of a property&apos;s condition </span>
                  when a rental agreement(lease) is signed
                </h2>
                <h2> ● Anything that is&nbsp;
                  <span className="font-bold">dirty, damaged or not working </span>
                  should be in the condition report, including everything inside and outside the property</h2>
                <h2> ● The&nbsp;
                  <span className="font-bold">landlord is responsible </span>
                  for preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                <h2> ● Condition report&nbsp;
                  <span className="font-bold">can be important </span>
                  in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
              </div>
              <button onClick={toggleDetails1}>
                <Image
                  src="/1-transport.svg"
                  alt="transport"
                  width={250}
                  height={250}
                />
              </button>
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
