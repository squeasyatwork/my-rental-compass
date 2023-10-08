import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";
import UserguideBar from "~/components/UserguideBar.js";
import Image from "next/image";
import { useState, useEffect } from "react";

const imageLoader = ({ src, width, quality }) => {
  return `https://develop.myrentalcompass.me/${src}?w=${width}&q=${quality || 75}`;
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

export default function Rights() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);
  const [showDetails6, setShowDetails6] = useState(false);
  const [showDetails7, setShowDetails7] = useState(false);

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
  const toggleDetails6 = () => {
    setShowDetails6(!showDetails6);
  };
  const toggleDetails7 = () => {
    setShowDetails7(!showDetails7);
  };

  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to know</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <Navbar activePage="What you need to know" className="z-10" />
      <main className="font-inter flex flex-col min-h-screen text-black justify-start w-full h-full">
        <div className="relative flex flex-col">
          <img
            src="/businesswoman.jpeg"
            alt="businesswoman"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-center h-full text-center ">
            <div className="flex flex-col justify-center items-center space-y-6 my-40 text-BackgroundWhite">
              <h2 className=" text-5xl font-bold max-w-5xl">
              As a tenant, you have the right to live in a 
              safe, secure and quiet environment 
              that is managed in accordance with the law.
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-white items-center px-8 w-full h-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center justify-between text-HeadingTextGray font-bold text-4xl text-center max-w-md mr-48">
              <h2>Understand your rights and responsibilities</h2>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <Image
                  src="/chat_bubble_rights.png"
                  alt="chat"
                  width={300}
                  height={170}
                />
              </div>
              <div >
                <Image
                  src="/woman.gif"
                  alt="girl"
                  width={140}
                  height={140}
                  className="mt-20 p-0"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between font-istok text-4xl font-bold mb-2">
            <h2 style={{ marginRight: "37rem" }}>1. Your rights as renters</h2>
          </div>
          <div className="flex justify-center items-start divider_rights">
            <div className="font-istok flex flex-col justify-center pb-4 mr-24">
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow">
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
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-4">
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
              <div className="flex flex-col justify-center items-center border-b-2 border-MainButtonYellow">
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
                    className="flex justify-between font-medium rounded-xl text-2xl p-2 w-full hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
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
                      maxWidth: "28rem",
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
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-4">
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
          <div className="flex justify-between font-istok text-4xl font-bold mt-12 mb-4">
            <h2 className="mr-4 lg:mr-56 md:mr-12 sm:mr-4">2. Your responsibilities as renters</h2>
            <div className="flex">
              <button onClick={toggleDetails7}>
                <Image
                  src="/alert.gif"
                  alt="alert"
                  width={90}
                  height={90}
                />
              </button>
              <Image
                src="/woman.gif"
                alt="woman"
                width={100}
                height={100}
              />
            </div>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50 overflow-auto"
              style={{
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                opacity: showDetails7 ? "1" : "0",
                visibility: showDetails7 ? "visible" : "hidden"
              }}>
              <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl px-6"
                style={{ width: "44%" }}>
                <div className="flex flex-col justify-center items-center font-bold text-4xl text-HeadingTextGray">
                  <h2>Something doesn&apos;t feel quite right?</h2>
                </div>
                <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                  <h2 className=" max-w-2xl mb-4 text-base">
                    If you think that your landlord or rental provider (like a real estate agency)
                    is not fulfilling their requirements, or is violating your rights, there are several places you can contact for help:
                  </h2>
                  <h2 className="font-bold">
                    Consumer Affairs Victoria
                  </h2>
                  <h2 className=" max-w-2xl mb-4 text-base">
                    If you have questions about renting agreements, bonds, rent increases or repairs, if you are being evicted<br></br>
                    <span className=" font-semibold underline">1300 55 81 81 </span><br></br>
                    <span className=" font-semibold underline">
                      <a href="https://www.consumer.vic.gov.au/" class=" underline">consumer.vic.gov.au</a>
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    Victorian Civil and Tribunal Authority (VCAT)
                  </h2>
                  <h2 className=" max-w-2xl mb-4 text-base">
                    To apply for a hearing about a renting dispute (e.g not providing repairs, excessive rental increases)<br></br>
                    <span className=" font-semibold underline">1300 55 81 81 </span><br></br>
                    <span className=" font-semibold underline">
                      <a href="https://www.vcat.vic.gov.au/case-types/residential-tenancies" class=" underline">vcat.vic.giv.au/renting</a>
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    Residential Tenancies Bond Authority (RTBA)
                  </h2>
                  <h2 className=" max-w-2xl mb-4 text-base">
                    To look up your bond, transfer a bond or arrange a bond refund<br></br>
                    <span className=" font-semibold underline">1300 137 164 </span><br></br>
                    <span className=" font-semibold underline">
                      <a href="https://rentalbonds.vic.gov.au/" class=" underline">rentalbonds.vic.giv.au</a>
                    </span>
                  </h2>
                </div>
              </div>
              <button onClick={toggleDetails7}>
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
          <div className="flex items-start divider_rights">
            <div className="font-istok flex flex-col items-center justify-center mr-24 border-b-2 border-MainButtonYellow pb-2">
              <div className="my-8">
                <Image
                  src="/house.png"
                  alt="house"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/video.svg"
                  alt="video"
                  width={30}
                  height={30}
                />
                <a href="https://www.youtube.com/watch?v=oX6usi7Rgn0" class=" text-HeadingTextGray hover:underline text-center items-center">Quick Watch: Condition reports</a>
              </div>
              <div className=" flex flex-col font-bold text-xl items-center mt-2">
                <h2>You have a responsibility to maintain the</h2>
                <h2>house to a reasonable standard</h2>
              </div>
              <div className="flex flex-col items-center justify-center mt-8 font-istok">
                <button
                  onClick={toggleDetails5}
                  className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray">Maintenance</h1>
                  {!showDetails5 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                  {showDetails5 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  )}
                </button>
                <div className="p-4 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl mt-2"
                  style={{
                    maxWidth: "24rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails5 ? "1" : "0",
                    visibility: showDetails5 ? "visible" : "hidden",
                    maxHeight: showDetails5 ? "1000px" : "0"
                  }}>
                  <h2>It is your job as tenant to maintain the property, and keep it up to a reasonable standard. </h2>
                  <br></br>
                  <h2>This includes:</h2>
                  <h2> ● keeping the premises clean</h2>
                  <h2> ● not causing any damage damage
                    to the property</h2>
                  <h2> ● if damage is caused, notifying the landlord 
                    or agent as soon as possible.
                  </h2>
                  <h2> ● obtain consent from the landlord before installing any fixtures, or making any alterations/ renovations, if these were not agreed up-front and included in your written lease.</h2>
                  <h2> ● ensure the property is not used for any illegal purpose.</h2>
                </div>
              </div>
            </div>
            <div className="font-istok flex flex-col items-center justify-center ml-28 border-b-2 border-MainButtonYellow pb-2">
              <div className="my-8">
                <Image
                  src="/home-repair.png"
                  alt="repair"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/video.svg"
                  alt="video"
                  width={30}
                  height={30}
                />
                <a href="https://www.youtube.com/watch?v=IJCRr6OYm4U&list=PLyJsWesP-0qmL3r2uf7ddID-LaDIy0Y7F" class=" text-HeadingTextGray hover:underline text-center items-center">Quick Watch: Starting and ending a lease</a>
              </div>
              <div className=" flex flex-col font-bold text-xl items-center mt-2">
                <h2>You have several responsibilities to follow</h2>
                <h2>when ending your tenancy agreement</h2>
              </div>
              <div className="flex flex-col items-center mt-8 font-istok">
                <button
                  onClick={toggleDetails6}
                  className="flex justify-between font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-15" 
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray ">End of your lease</h1>
                  {!showDetails6 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                  {showDetails6 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                  )}
                </button>
                <div className="p-4 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl mt-2"
                  style={{
                    maxWidth: "24rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails6 ? "1" : "0",
                    visibility: showDetails6 ? "visible" : "hidden",
                    maxHeight: showDetails6 ? "1000px" : "0"
                  }}>
                  <h2 >There are three main ways to end a tenancy:</h2>
                  <h2> 1. All the parties can agree to end the tenancy. </h2>
                  <h2> 2. Your landlord or agent gives you a valid &apos;Notice to Vacate&apos;. </h2>
                  <h2> 3. You give valid notice to your landlord or agent that you intend to vacate.</h2>
                  <br></br>
                  <h2> When ending your lease, make sure you:</h2>
                  <h2> ● give adequate notice
                    when planning to leave; the notice period will depend on your reason for leaving </h2>
                  <h2> ● pay any outstanding rent</h2>
                  <h2> ● clean 
                    the property</h2>
                  <h2> ● consider taking photos 
                    after you move your furniture out to show the condition of the property </h2>
                  <h2> ● take all your belongings with you</h2>
                  <h2> ● keep the &apos;Condition Report&apos;
                    in case of a dispute</h2>
                  <h2> ● try to agree with your landlord or agent on the return of the bond</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center mr-24">
              <div className="flex flex-col items-start justify-center">
                <Image
                  src="/chat_bubble_rights2.png"
                  alt="chatb2"
                  width={270}
                  height={270}
                />
                <div className="flex justify-center items-center">
                  <Image
                    src="/finger.gif"
                    alt="finger"
                    width={35}
                    height={35}
                    className="mr-2"
                  />
                  <a href="https://www.consumer.vic.gov.au/housing/renting/starting-and-changing-rental-agreements
                  /resources-and-guides-for-renters/renters-guide" className="text-ButtonHoverYellow text-base font-semibold hover:underline lg:text-xl md:text-base">Consumer Affairs Victoria</a>
                </div>
              </div>
              <div className="flex items-start mt-24">
                <Image
                  src="/woman.gif"
                  alt="woman"
                  width={140}
                  height={140}
                />
              </div>
            </div>
            <div className="flex justify-center items-end ml-24">
              <Link href="/">
                <button className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button bg-ResourceButtonYellow">
                  Return Home
                </button>
              </Link>
            </div>
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
        <div className="flex flex-col justify-center font-istok text-HeadingTextGray bg-white px-8 pb-6">
          <h2 className="font-semibold text-lg">Credits</h2>
          <div className="flex">
            <div className="flex flex-col">
              <a href="https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110 " class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/agreement_2838110?term=agreement&page=1&position=3&origin=search&related_id=2838110 </a>
              <a href="https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629 " class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/interior-design_2400629?term=interior+design&related_id=2400629 </a>
              <a href="https://www.flaticon.com/free-icon/chat_3286051?term=tell&related_id=3286051" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/chat_3286051?term=tell&related_id=3286051</a>
              <a href="https://www.flaticon.com/free-icon/village_1648590?term=neighborhood&page=1&position=4&origin=search&related_id=1648590" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/village_1648590?term=neighborhood&page=1&position=4&origin=search&related_id=1648590</a>
              <a href="https://www.flaticon.com/free-icon/house_2954870?related_id=2946601&origin=search" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/house_2954870?related_id=2946601&origin=search</a>
              <a href="https://www.flaticon.com/free-icon/home-repair_3084918?term=house+repair&related_id=3084918" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icon/home-repair_3084918?term=house+repair&related_id=3084918</a>
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
