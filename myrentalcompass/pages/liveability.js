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
                Liveability is what a place is like to live in
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
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
        <div className="flex justify-center items-start divider_rights">
          <div className="font-istok flex flex-col justify-center pb-4 mr-24">
            <div className="flex flex-col items-center justify-center border-b-2 border-HeadingTextGray">
              <div className="my-8">
                <Image
                  src="/interior-design.png"
                  alt="interior"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col font-bold text-xl items-center">
                <h2>You have the right to live in a property that is</h2>
                <h2>clean, and meets minium rental standards.</h2>
                <h2>This is measured with a condition report</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok mt-8">
                <button
                  onClick={toggleDetails1}
                  className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Condition reports</h1>
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
                    maxWidth: "24rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails1 ? "1" : "0",
                    visibility: showDetails1 ? "visible" : "hidden",
                    maxHeight: showDetails1 ? "1000px" : "0"
                  }}>
                  <h2> ● A condition report is a 
                    record of a property&apos;s condition
                    when a rental agreement(lease) is signed
                  </h2>
                  <h2> ● Anything that is dirty, damaged or not working
                    should be in the condition report, including everything inside and outside the property</h2>
                  <h2> ● The landlord is responsible
                    for preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                  <h2> ● Condition report can be important
                    in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                </div>
              </div>
            </div>
            <div className="font-istok flex flex-col items-center justify-center border-b-2 border-HeadingTextGray mt-4">
              <div className="my-8">
                <Image
                  src="/chat.png"
                  alt="chat"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col font-bold text-xl items-center">
                <h2>You have the right to not be discriminated</h2>
                <h2>against when renting or applying to rent</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok mt-8">
                <button
                  onClick={toggleDetails3}
                  className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Unlawful discrimination</h1>
                  {!showDetails3 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                  {showDetails3 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  )}
                </button>
                <div className="p-4 mb-2 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl mt-2"
                  style={{
                    maxWidth: "24rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails3 ? "1" : "0",
                    visibility: showDetails3 ? "visible" : "hidden",
                    maxHeight: showDetails3 ? "1000px" : "0"
                  }}>
                  <h2>In Victoria, it is against the law
                    to stop somebody from renting a property because of certain personal characteristics.
                  </h2>
                  <h2>These include:</h2>
                  <h2> ● age</h2>
                  <h2> ● carer status, family responsibilities, parental status</h2>
                  <h2> ● disability</h2>
                  <h2> ● employment</h2>
                  <h2> ● gender identity, lawful sexual activity, sexual orientation (e.g. gay, lesbian, transgender, etc)</h2>
                  <h2> ● marital status</h2>
                  <h2> ● physical features</h2>
                  <h2> ● pregnancy, breastfeeding</h2>
                  <h2> ● profession, trade or occupation, including being a sex worker</h2>
                  <h2> ● race (including colour, nationality, ethnicity and ethnic origin)</h2>
                  <h2> ● religious belief or activity</h2>
                  <h2> ● sex</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="font-istok flex flex-col justify-center ml-24">
            <div className="flex flex-col justify-center items-center border-b-2 border-HeadingTextGray">
              <div className="my-8">
                <Image
                  src="/agreement.png"
                  alt="agreement"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col font-bold text-xl items-center">
                <h2>You have the right to live in a property that</h2>
                <h2>meets minimum rental standards to ensure a</h2>
                <h2>safe and adequate place to live</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok mt-8">
                <button
                  onClick={toggleDetails2}
                  className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Minimum rental standards</h1>
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
                    maxWidth: "24rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails2 ? "1" : "0",
                    visibility: showDetails2 ? "visible" : "hidden",
                    maxHeight: showDetails2 ? "1000px" : "0"
                  }}>
                  <h2>
                    ● A doors and windows
                    that access the outside must have
                      functioning locks
                  </h2>
                  <h2> ● Landlords must provide
                    a general rubbish and recycling bin
                  </h2>
                  <h2> ● There must be a working toilet
                  </h2>
                  <h2> ● The bathroom must have a washbasin
                    (sink) and a shower or bath, 
                    and be connected to hot and cold water.
                  </h2>
                  <h2>
                    ● There must be a kitchen with a dedicated cooking and food preparation
                    area, and a stovetop
                    and sink 
                    in good working order, connected to hot and cold water.
                  </h2>
                  <h2>
                    ● The property must be structurally sound and weatherproof.
                  </h2>
                  <h2>
                    ● All rooms must be free from mould and damp.
                  </h2>
                  <h2>
                    ● There must be a fixed heater
                    (not portable) in good working order in the main living area.
                  </h2>
                  <br></br>
                  <h2 className="font-bold">
                    If the property does not meet minimum standards, the renter can request that the rental provider make repairs or changes before signing the agreement or before they move in.
                  </h2>
                </div>
              </div>
            </div>
            <div className="font-istok flex flex-col items-center justify-center border-b-2 border-HeadingTextGray mt-4">
              <div className="my-8">
                <Image
                  src="/village.png"
                  alt="village"
                  width={100}
                  height={100}
                />
              </div>
              <div className=" flex flex-col font-bold text-xl items-center">
                <h2>You have the right to informed when the</h2>
                <h2>landlord intends to access the property</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok mt-8">
                <button
                  onClick={toggleDetails4}
                  className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Inspection</h1>
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
                    maxWidth: "24rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails4 ? "1" : "0",
                    visibility: showDetails4 ? "visible" : "hidden",
                    maxHeight: showDetails4 ? "1000px" : "0"
                  }}>
                  <h2> ● Your landlord can enter the property at a date and time that you have both agreed on.
                  </h2>
                  <h2> ● This agreement must 
                    be made within 7 days
                    before they enter.
                  </h2>
                  <h2> ● Unless agreed with you, the rental provider or agent can only enter between 8am and 6pm,
                    and not on public holidays.</h2>
                  <h2> ● If you have agreed, they can enter when you are not home.</h2>
                  <h2> ● A general inspection may only be made
                    after the first 3 months of the rental agreement. They can be done every 6 months at the most.</h2>
                  <h2> ● You are not required to leave
                    if the landlord is doing an inspection or showing the property the prospective buyers.
                  </h2>
                  <br></br>
                  <h2>
                    Reasons for entering your home:
                  </h2>
                  <h2>● General inspection</h2>
                  <h2>● Repairs or other legal responsibilities</h2>
                  <h2>● Showing the property to renters, buyers or lenders</h2>
                  <h2>● Having the property valued</h2>
                  <h2>● Taking photos or videos to advertise the property</h2>
                  <h2>● Renter has not met their obligations </h2>
                  <h2>● Family violence proceedings in VCAT</h2>
                  <br></br>
                  <h2>Each of these has different days notice required. Read more at&nbsp;
                    <span>
                      <a href="https://www.consumer.vic.gov.au/housing/renting/starting-and-changing-rental-agreements
                        /resources-and-guides-for-renters/renters-guide" class="text-ButtonHoverYellow font-semibold hover:underline ">Consumer Affairs Victoria</a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mt-8 mx-96">
          <Link href="https://auo.org.au/">
            <button className="text-sm md:text-sm lg:text-md font-bold call-action-button mr-12">
            Read more at the<br></br>AUO website
            </button>
          </Link>
          <Link href="/">
            <button className="text-xl bg-ResourceButtonYellow md:text-xl lg:text-xl font-bold call-action-button p-7">
              Return Home
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center my-12 px-12">
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
