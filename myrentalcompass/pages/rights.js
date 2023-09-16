import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";
import UserguideBar from "~/components/UserguideBar.js";
import Image from "next/image";
import { useState, useEffect } from "react";

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

export default function Rights() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);
  const [showDetails6, setShowDetails6] = useState(false);

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

  useEffect(() => {
    const playButton = document.getElementById('play-button');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    if (playButton && video1 && video2) {
      playButton.addEventListener('click', () => {
        if (video1.paused) {
          video1.play();
          playButton.style.display = 'none';
        } else {
          video1.pause();
          playButton.style.display = 'block';
        }
      });

      playButton.addEventListener('click', () => {
        if (video2.paused) {
          video2.play();
          playButton.style.display = 'none';
        } else {
          video2.pause();
          playButton.style.display = 'block';
        }
      });
    }
  }, []);


  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to know</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black justify-center">
        <Navbar activePage="What you need to know" className="z-10" />

        <div className="relative h-3/5 w-full">
          <img
            src="/businesswoman.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col justify-center my-44">
              <h1 className="text-5xl font-bold text-center">
               As a tenant, you have rights and to live in a
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                safe, secure and quiet environment
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                that is managed in accordance with the law
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-white items-center">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center justify-center text-HeadingTextGray font-bold text-5xl mr-48 ">
              <h2>Understand your </h2>
              <h2>rights and </h2>
              <h2>responsibilities</h2>
            </div>
            <div className="flex items-start">
              <div>
                <Image
                  src="/chat_bubble_rights.png"
                  alt="chat"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <Image
                  src="/woman.gif"
                  alt="girl"
                  width={200}
                  height={200}
                  className="mt-64 p-0"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="font-istok flex flex-col items-center justify-center pb-4 mr-24">
              <div className="flex flex-col items-center justify-center border-b-2 border-HeadingTextGray">
                <div className="font-bold text-4xl">
                  <h2>1. Your rights as renters</h2>
                </div>
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
                <div className="flex flex-col items-center justify-center font-istok mb-6">
                  <button
                    onClick={toggleDetails1}
                    className=" font-bold text-4xl px-3 my-4 text-HeadingTextGray"
                    >
                    Condition reports
                    </button>
                    {showDetails1 && (
                      <div className="p-6 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                        <h2> ● A condition report is a record of a property's condition when a rental agreement(lease) is signed</h2>
                        <h2> ● Anything that is dirty, damaged or not working should be in the condition report, including everything inside and outside the property</h2>
                        <h2> ● The landlord is responsible foe preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                        <h2> ● Condition report can be important in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                      </div>
                    )}
                </div>
              </div>
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-HeadingTextGray pb-6">
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
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails3}
                    className=" font-bold text-4xl px-3 my-4 text-HeadingTextGray"
                    >
                    Unlawful discrimination
                    </button>
                    {showDetails3 && (
                      <div className="p-6 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                        <h2> ● A condition report is a record of a property's condition when a rental agreement(lease) is signed</h2>
                        <h2> ● Anything that is dirty, damaged or not working should be in the condition report, including everything inside and outside the property</h2>
                        <h2> ● The landlord is responsible foe preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                        <h2> ● Condition report can be important in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                      </div>
                    )}
                </div>
              </div>
            </div>
            <div className="flex flex-col border-r-4 border-FooterButtonYellow justify-center items-center"></div>
            <div className="font-istok flex flex-col items-center justify-center ml-24">
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
                <div className="flex flex-col items-center justify-center font-istok mb-6">
                  <button
                    onClick={toggleDetails2}
                    className=" font-bold text-4xl px-3 my-4 text-HeadingTextGray"
                    >
                    Minimum rental standards
                    </button>
                    {showDetails2 && (
                      <div className="p-6 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                        <h2> ● A condition report is a record of a property's condition when a rental agreement(lease) is signed</h2>
                        <h2> ● Anything that is dirty, damaged or not working should be in the condition report, including everything inside and outside the property</h2>
                        <h2> ● The landlord is responsible foe preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                        <h2> ● Condition report can be important in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                      </div>
                    )}
                </div>
              </div>
              <div className="font-istok flex flex-col items-center justify-center border-b-2 border-HeadingTextGray p-6">
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
                <div className="flex flex-col items-center justify-center font-istok">
                  <button
                    onClick={toggleDetails4}
                    className=" font-bold text-4xl px-3 my-4 text-HeadingTextGray"
                    >
                    Inspection
                    </button>
                    {showDetails4 && (
                      <div className="p-6 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                        <h2> ● A condition report is a record of a property's condition when a rental agreement(lease) is signed</h2>
                        <h2> ● Anything that is dirty, damaged or not working should be in the condition report, including everything inside and outside the property</h2>
                        <h2> ● The landlord is responsible foe preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                        <h2> ● Condition report can be important in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between font-istok text-4xl font-bold mt-12 mb-4">
            <h2 className="mr-96">2. Your responsibilities as renters</h2>
            <Image
                src="/alert.gif"
                alt="repair"
                width={100}
                height={100}
            />
          </div>
          <div className="flex">
            <div className="font-istok flex flex-col items-center justify-center mr-24 border-b-2 border-HeadingTextGray pb-4">
              <div className="my-8">
                <Image
                    src="/house.png"
                    alt="house"
                    width={100}
                    height={100}
                    class="cursor-pointer"
                />
                <video id="video1" src="your-video.mp4" class="hidden absolute inset-0"></video>
              </div>
              <div className=" flex flex-col font-bold text-xl items-center">
                <h2>You have the right to live in a property that is</h2>
                <h2>clean, and meets minium rental standards.</h2>
                <h2>This is measured with a condition report</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok">
                <button
                  onClick={toggleDetails5}
                  className=" font-bold text-4xl px-3 my-4 text-HeadingTextGray"
                  >
                  Condition reports
                  </button>
                  {showDetails5 && (
                    <div className="p-6 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                      <h2> ● A condition report is a record of a property's condition when a rental agreement(lease) is signed</h2>
                      <h2> ● Anything that is dirty, damaged or not working should be in the condition report, including everything inside and outside the property</h2>
                      <h2> ● The landlord is responsible foe preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                      <h2> ● Condition report can be important in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                    </div>
                  )}
              </div>
            </div>
            <div className="flex flex-col border-r-4 border-FooterButtonYellow justify-center items-center"></div>
            <div className="font-istok flex flex-col items-center justify-center ml-24 border-b-2 border-HeadingTextGray pb-4">
              <div className="my-8">
                <Image
                    src="/home-repair.png"
                    alt="repair"
                    width={100}
                    height={100}
                    class="cursor-pointer"
                />
                <video id="video2" src="your-video.mp4" class="hidden absolute inset-0"></video>
              </div>
              <div className=" flex flex-col font-bold text-xl items-center">
                <h2>You have the right to live in a property that is</h2>
                <h2>clean, and meets minium rental standards.</h2>
                <h2>This is measured with a condition report</h2>
              </div>
              <div className="flex flex-col items-center justify-center font-istok">
                <button
                  onClick={toggleDetails6}
                  className=" font-bold text-4xl px-3 my-4 text-HeadingTextGray"
                  >
                  Condition reports
                  </button>
                  {showDetails6 && (
                    <div className="p-6 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl" style={{maxWidth: "24rem"}}>
                      <h2> ● A condition report is a record of a property's condition when a rental agreement(lease) is signed</h2>
                      <h2> ● Anything that is dirty, damaged or not working should be in the condition report, including everything inside and outside the property</h2>
                      <h2> ● The landlord is responsible foe preparing the condition report. They must sign it and give two copies to the renter(or one copy of sending electronically) before you move in.</h2>
                      <h2> ● Condition report can be important in determining claims with the landlord(such as claiming all of your bond amount) so it is important to check the rent whne you get it and maintain your plan</h2>
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <Image
                  src="/chat_bubble_rights2.png"
                  alt="chatb2"
                  width={450}
                  height={450}
              />
              <a href="https://www.consumer.vic.gov.au/housing/renting/starting-and-changing-rental-agreements
              /resources-and-guides-for-renters/renters-guide" class="text-ButtonHoverYellow text-2xl font-semibold hover:underline ">▶ Consumer Affairs Victoria</a>
            </div>
            <div className="mt-48 mr-32">
              <Image
                  src="/woman.gif"
                  alt="woman"
                  width={200}
                  height={200}
              />
            </div>
            <div>
              <Link href="/">
                <button className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button">
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
