import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const imageLoader = ({ src, width, quality }) => {
  return `https://iterationtwo.myrentalcompass.me/${src}?w=${width}&q=${quality || 75}`;
};

function Liveability() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);

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

  const toggleDetails5 = () => {
    setShowDetails5(!showDetails5);
  };
  
  return (
    <>
      <Head>
        <title>MyRentalCompass | Liveability</title>
        <meta name="description" content="Learn about liveability factors." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen bg-white text-black">
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
                Liveability is what a place is like to live in<br></br>
                - a liveable place is a healthy place
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-8">
          <div className="flex flex-col justify-center font-istok">
            <div className=" font-bold text-5xl text-HeadingTextGray mt-4 mb-4">
              <h1>What is liveability?</h1>
            </div>
            <div className=" my-2">
              <h2 className="font-bold text-3xl mb-4 px-4">Liveability Index</h2>
              <h2 className="text-xl max-w-4xl px-4">The Liveability Index is a composite score based on measures related to aspects of liveability including good transport connectivity,
                safe roads, low crime rate, and abundance of open spaces.</h2>
              <br></br>
              <h2 className="text-xl px-4">We understand that not everyone is the same.</h2>
              <br></br>
              <h2 className="text-xl max-w-4xl px-4">Unlike other websites that provide a standardised liveability index, 
              My Rental Compass offers personalised liveability score that is unique and tailored to each user, 
              based on their individual preferences with regards to the liveability factors.</h2>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Image
              src= "/chat_bubble_liveability.png"
              alt= "chat"
              width={400}
              height={400}
            />
            <Image
              src="/woman.gif"
              alt="girl"
              width={140}
              height={140}
              className="mt-20"
            />
          </div>
        </div>

          <div className="flex justify-center items-start divider_rights my-8">
            <div className="font-istok flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow w-1/2">
                <div className="my-8">
                  <Image
                    src="/interior-design.png"
                    alt="interior"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails1}
                    className="flex justify-between font-medium rounded-xl text-2xl p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Transport Connectivity</h1>
                    {!showDetails1 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>)}
                    {showDetails1 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    )}
                  </button>
                  <div className="p-4 mb-2 text-lg text-left bg-FooterButtonYellow rounded-xl mt-2"
                    style={{
                      width: "50%",
                      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                      opacity: showDetails1 ? "1" : "0",
                      visibility: showDetails1 ? "visible" : "hidden",
                      maxHeight: showDetails1 ? "1000px" : "0"
                    }}>
                    <h2> In measuring how well connected a suburb is to the public transportation system, 
                      we use the open data by Public Transport Victoria (PTV) 
                      as at May 2023 to count the number of public transport stops that exist in every suburb, 
                      and divide it by the suburb&apos;s land size in square kilometre.
                    </h2>
                    <br></br>
                    <h2>Source:</h2>
                    <a href="https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2" className="hover:underline hover:text-ButtonHoverYellow">
                      1. https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2
                    </a><br></br>
                    <a href="https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundaries" className="hover:underline hover:text-ButtonHoverYellow">
                      2. https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundaries
                    </a>
                  </div>
                </div>
              </div>
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-4">
                <div className="my-8">
                  <Image
                    src="/chat.png"
                    alt="chat"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails3}
                    className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Safe Roads</h1>
                    {!showDetails3 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>)}
                    {showDetails3 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    )}
                  </button>
                  <div className="p-4 mb-2 text-lg text-left bg-FooterButtonYellow rounded-xl mt-2"
                    style={{
                      maxWidth: "34rem",
                      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                      opacity: showDetails3 ? "1" : "0",
                      visibility: showDetails3 ? "visible" : "hidden",
                      maxHeight: showDetails3 ? "1000px" : "0"
                    }}>
                    <h2> We count the number of road crashes and traffic incidents that have been 
                      recorded in each suburbs during a 12-month period ending 2019, 
                      and then we divide the number by the suburb&apos;s population as at June 2021.
                    </h2>
                    <br></br>
                    <h2>Source:</h2>
                    <a href="https://discover.data.vic.gov.au/dataset/crash-stats-data-extract " className="hover:underline hover:text-ButtonHoverYellow">
                      1. https://discover.data.vic.gov.au/dataset/crash-stats-data-extract 
                    </a><br></br>
                    <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023 " className="hover:underline hover:text-ButtonHoverYellow">
                      2. https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-istok flex flex-col justify-center ml-24">
              <div className="flex flex-col justify-center items-center border-b-2 border-MainButtonYellow">
                <div className="my-8">
                  <Image
                    src="/agreement.png"
                    alt="agreement"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails2}
                    className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                      <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Crime Rate</h1>
                    {!showDetails2 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>)}
                    {showDetails2 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    )}
                  </button>
                  <div className="p-4 mb-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl mt-2"
                    style={{
                      maxWidth: "38rem",
                      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                      opacity: showDetails2 ? "1" : "0",
                      visibility: showDetails2 ? "visible" : "hidden",
                      maxHeight: showDetails2 ? "1000px" : "0"
                    }}>
                    <h2>
                      We measure liveability based on the crime rate recorded in a particular suburb. 
                      We used crime statistics data that has been recorded during the 12-month period ending March 2023 
                      and divide it by each suburb&apos;s population as at June 2021
                    </h2>
                    <br></br>
                    <h2 className=" font-medium">
                      Source:
                    </h2>
                    <a href="https://www.crimestatistics.vic.gov.au/crime-statistics/latest-victorian-crime-data/download-data " className="hover:underline hover:text-ButtonHoverYellow">
                      1. https://discover.data.vic.gov.au/dataset/crash-stats-data-extract 
                    </a><br></br>
                    <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023  " className="hover:underline hover:text-ButtonHoverYellow">
                      2. https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023 
                    </a>
                  </div>
                </div>
              </div>
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-4">
                <div className="my-8">
                  <Image
                    src="/village.png"
                    alt="village"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails4}
                    className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Open Spaces</h1>
                    {!showDetails4 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>)}
                    {showDetails4 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    )}
                  </button>
                  <div className="p-4 mb-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl mt-2"
                    style={{
                      maxWidth: "38rem",
                      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                      opacity: showDetails4 ? "1" : "0",
                      visibility: showDetails4 ? "visible" : "hidden",
                      maxHeight: showDetails4 ? "1000px" : "0"
                    }}>
                    <h2> 
                      We count the number of parks and gardens that exists within the geographical boundary of each suburb as at 2023,
                      and divide the number by the land size of each suburb in square kilometre.
                    </h2>
                    <br></br>
                    <h2 className=" font-medium">
                      Source:
                    </h2>
                    <a href="https://discover.data.vic.gov.au/dataset/open-space" className="hover:underline hover:text-ButtonHoverYellow">
                      1. https://discover.data.vic.gov.au/dataset/open-space
                    </a><br></br>
                    <a href="https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundarie" className="hover:underline hover:text-ButtonHoverYellow">
                      2. https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundarie 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="flex flex-col items-center justify-center font-istok">
          <button
            onClick={toggleDetails5}
            className="flex justify-between text-4xl font-bold rounded-xl w-2/5 p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
          >
            <h1 className="text-center text-HeadingTextGray">Liveability Score Explained</h1>
            {!showDetails5 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
            {showDetails5 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            )}
          </button>
          <div className="p-4 mb-2 text-lg justify-center text-left bg-FooterButtonYellow rounded-xl mt-2"
            style={{
              maxWidth: "40%",
              transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
              opacity: showDetails5 ? "1" : "0",
              visibility: showDetails5 ? "visible" : "hidden",
              maxHeight: showDetails5 ? "1000px" : "0"
            }}>
            <h2 className="font-bold">
              Liveability Score Calculation:
            </h2>
            <h2>
              - Four key factors are considered: crime rate, traffic incidents rate (per 1000 people), number of open spaces, and public transport stops (per square kilometre).<br></br>
              - Each factor&apos;s values for every suburb are normalised between 0 and 1.<br></br>
              - The suburb&apos;s aggregate liveability score is determined by summing these normalised values.
            </h2>
            <br></br>
            <h2 className="font-bold">Personalized Liveability Score:</h2>
            <h2>
              - Users rate the importance of each liveability factor on a scale of 1 to 5.<br></br>
              - The normalised values are weighted according to the user&apos;s input.<br></br>
              - User-provided data, such as rental budget and university location, are also factored in.<br></br>
              - University campuses are scored based on their proximity to suburbs (e.g., score 5 for within 5km, score 4 for within 5 to 10km).
            </h2>
            <br></br>
            <h2 className="font-bold">Final Score Calculation:</h2>
              - The personalised liveability score is computed using a linear equation.<br></br>
              - The equation incorporates user preferences, budget, and university location.<br></br>
              - The result is a final liveability score tailored to the user&apos;s unique needs and preferences.<br></br>
          </div>
        </div>
        <div className="flex justify-around items-center mt-12 mx-96">
          <Link href="https://auo.org.au/">
            <button className=" text-xs md:text-sm lg:text-md font-bold call-action-button mr-12">
              Read more at the<br></br>AUO website
            </button>
          </Link>
          <Link href="/">
            <button className="text-sm md:text-sm lg:text-xl font-bold call-action-button bg-ResourceButtonYellow">
              Return Home 
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center mt-12 mb-6 px-8">
          <h1 className="font-bold text-3xl">References</h1>
          <a href="https://research-repository.uwa.edu.au/en/publications/creating-liveable-cities-in-australia-mapping-urban-policy-implem"
            className=" hover:underline">
            <h2 className=" text-HeadingTextGray">1. Arundel J, Lowe M, Hooper P, Roberts R, Rozek J, Higgs C, Giles-Corti B. (2017) Creating liveable cities in Australia: Mapping urban policy implementation and evidence-based national liveability indicators. Centre for Urban Research (CUR). RMIT University.</h2>
          </a>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Liveability;
