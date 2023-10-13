import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import i18nextConfig from '~/next-i18next.config';
import { useRouter } from "next/router.js";

const imageLoader = ({ src, width, quality }) => {
  return `https://www.myrentalcompass.me/${src}?w=${width}&q=${quality || 75}`;
};

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale, ['common', 'dict2'], i18nextConfig)),
    },
  }
}

export const ResourceSection = ({ id, imageSrc, buttonText, altText, link }) => {
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
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Rights() {

  const { t } = useTranslation();
  const router = useRouter();
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
        <title>{t("dict2:rights_tab_title")}</title>
        <meta name="description" content="What you need to do." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar activePage="What you need to know" className="z-10" />

      <main className="font-istok flex flex-col min-h-screen text-black justify-start w-full h-full bg-BackgroundWhite">
        <div className="relative flex flex-col">
          <img
            src="/businesswoman.jpeg"
            alt="businesswoman"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-center h-full text-center ">
            <div className="flex flex-col justify-center items-center space-y-6 my-28 text-gray-100/90">
              <h2 className="text-5xl font-bold max-w-5xl">
                {t("dict2:rights_banner_title")}
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center px-8 w-full h-full">
          <div className="flex justify-between items-center w-4/5">
            <div className="flex flex-col items-center justify-between text-HeadingTextGray font-bold text-4xl text-center max-w-md">
              <h2>{t("dict2:rights_description_heading")}</h2>
            </div>
            <div className="flex justify-between items-start">
              <div>
                {router.locale === "en" && (<Image className="object-contain ml-8"
                  src="/chat_bubble_rights.png"
                  alt="chat"
                  width={300}
                  height={170}
                />)}
                {router.locale === "hi" && (<Image className="object-contain ml-8"
                  src="/rights_dialog_cloud_hindi.svg"
                  alt="chat"
                  width={300}
                  height={170}
                />)}
                {router.locale === "ms" && (<Image className="object-contain ml-8"
                  src="/rights_dialog_cloud_malay.svg"
                  alt="chat"
                  width={300}
                  height={170}
                />)}
                {router.locale === "zh" && (<Image className="object-contain ml-8"
                  src="/rights_dialog_cloud_chinese.svg"
                  alt="chat"
                  width={300}
                  height={170}
                />)}
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
          <div className="flex justify-between font-istok text-4xl font-bold mb-2 w-4/5">
            <h2>{t("dict2:rights_subheading_1")}</h2>
          </div>
          <div className="flex justify-between items-start divider_rights w-4/5">
            <div className="font-istok flex flex-col justify-center pb-4">
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow">
                <div className="my-8">
                  <Image
                    src="/interior-design.png"
                    alt="interior"
                    width={100}
                    height={100}
                  />
                </div>
                <div className=" flex flex-col font-bold text-xl items-center max-w-md text-center">
                  <h2>{t("dict2:rights_section_1_description")}</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok mt-8">
                  <button
                    onClick={toggleDetails1}
                    className="flex justify-between items-center font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict2:rights_section_1_button")}</h1>
                    {!showDetails1 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                    {showDetails1 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className="w-8 h-8">
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
                    <h2> {"● " + t("dict2:rights_section_1_point_1")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_1_point_2")}</h2>
                    <h2> {"● " + t("dict2:rights_section_1_point_3")}</h2>
                    <h2> {"● " + t("dict2:rights_section_1_point_4")}</h2>
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
                <div className=" flex flex-col font-bold text-xl items-center max-w-md text-center">
                  <h2>{t("dict2:rights_section_3_description")}</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok mt-8">
                  <button
                    onClick={toggleDetails3}
                    className="flex justify-between items-center font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray max-w-md">{t("dict2:rights_section_3_button")}</h1>
                    {!showDetails3 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                    {showDetails3 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className="w-8 h-8">
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
                    <h2>{t("dict2:rights_section_3_line_1")}
                    </h2>
                    <h2>{t("dict2:rights_section_3_line_2")}</h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_1")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_2")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_3")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_4")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_5")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_6")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_7")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_8")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_9")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_10")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_11")} </h2>
                    <h2> {"● " + t("dict2:rights_section_3_point_12")} </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-istok flex flex-col justify-center">
              <div className="flex flex-col justify-center items-center border-b-2 border-MainButtonYellow">
                <div className="my-8">
                  <Image
                    src="/agreement.png"
                    alt="agreement"
                    width={100}
                    height={100}
                  />
                </div>
                <div className=" flex flex-col font-bold text-xl items-center max-w-md text-center">
                  <h2>{t("dict2:rights_section_2_description")}</h2>
                </div>
                <div className="flex flex-col items-center justify-center font-istok mt-8">
                  <button
                    onClick={toggleDetails2}
                    className="flex justify-between items-center font-medium rounded-xl text-2xl p-2 w-full hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict2:rights_section_2_button")}</h1>
                    {!showDetails2 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                    {showDetails2 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className="w-8 h-8">
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
                      {"● " + t("dict2:rights_section_2_point_1")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_2_point_2")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_2_point_3")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_2_point_4")}
                    </h2>
                    <h2>
                      {"● " + t("dict2:rights_section_2_point_5")}
                    </h2>
                    <h2>
                      {"● " + t("dict2:rights_section_2_point_6")}
                    </h2>
                    <h2>
                      {"● " + t("dict2:rights_section_2_point_7")}
                    </h2>
                    <h2>
                      {"● " + t("dict2:rights_section_2_point_8")}
                    </h2>
                    <br></br>
                    <h2 className="font-bold">
                      {t("dict2:rights_section_2_point_9")}</h2>
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
                <div className=" flex flex-col font-bold text-xl items-center max-w-md text-center">
                  <p>{t("dict2:rights_section_4_description")}</p>
                </div>
                <div className="flex flex-col items-center justify-center font-istok mt-8">
                  <button
                    onClick={toggleDetails4}
                    className="flex justify-between items-center font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                  >
                    <h1 className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict2:rights_section_4_button")}</h1>
                    {!showDetails4 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>)}
                    {showDetails4 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className="w-8 h-8">
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
                    <h2> {"● " + t("dict2:rights_section_4_point_1_item_1")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_1_item_2")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_1_item_3")}</h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_1_item_4")}</h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_1_item_5")}</h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_1_item_6")}</h2>
                    <br></br>
                    <h2>
                      {t("dict2:rights_section_4_point_2")}
                    </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_2_item_1")} </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_2_item_2")} </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_2_item_3")} </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_2_item_4")} </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_2_item_5")} </h2>
                    <h2> {"● " + t("dict2:rights_section_4_point_2_item_6")} </h2>
                    <h2>{"● " + t("dict2:rights_section_4_point_2_item_7") + " VCAT"}</h2>
                    <br></br>
                    <h2>{t("dict2:rights_section_4_point_3") + " "}
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
          <div className="flex justify-between font-istok text-4xl font-bold mt-12 mb-4 w-4/5">
            <h2>{t("dict2:rights_subheading_2")}</h2>
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
                <div className="text-center flex flex-col justify-center items-center font-bold text-4xl text-HeadingTextGray">
                  <h2>{t("dict2:rights_section_7_heading")}</h2>
                </div>
                <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                  <h2 className=" max-w-2xl mb-4 text-base">
                    {t("dict2:rights_section_7_description")}
                  </h2>
                  <h2 className="font-bold">
                    {t("dict2:rights_section_7_point_1_heading")}
                  </h2>
                  <h2 className=" max-w-2xl mb-4 text-base">
                    {t("dict2:rights_section_7_point_1_description")}<br></br>
                    <span className=" font-semibold underline">1300 55 81 81 </span><br></br>
                    <span className=" font-semibold underline">
                      <a href="https://www.consumer.vic.gov.au/" class=" underline">consumer.vic.gov.au</a>
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {t("dict2:rights_section_7_point_2_heading") + " (VCAT)"}
                  </h2>
                  <h2 className=" max-w-2xl mb-4 text-base">
                    {t("dict2:rights_section_7_point_2_description")}<br></br>
                    <span className=" font-semibold underline">1300 55 81 81 </span><br></br>
                    <span className=" font-semibold underline">
                      <a href="https://www.vcat.vic.gov.au/case-types/residential-tenancies" class=" underline">vcat.vic.giv.au/renting</a>
                    </span>
                  </h2>
                  <h2 className="font-bold">
                    {t("dict2:rights_section_7_point_3_heading") + " (RTBA)"}
                  </h2>
                  <h2 className=" max-w-2xl mb-4 text-base">
                    {t("dict2:rights_section_7_point_3_description")}<br></br>
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
          <div className="flex justify-between items-start divider_rights w-4/5">
            <div className="font-istok flex flex-col items-center justify-center border-b-2 border-MainButtonYellow pb-2">
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
                <a href="https://www.youtube.com/watch?v=oX6usi7Rgn0" class=" text-HeadingTextGray hover:underline text-center items-center">{t("dict2:rights_section_5_video_link")}</a>
              </div>
              <div className=" flex flex-col font-bold text-xl items-center mt-2 max-w-md text-center">
                <h2>{t("dict2:rights_section_5_description")}</h2>
              </div>
              <div className="flex flex-col items-center justify-center mt-8 font-istok">
                <button
                  onClick={toggleDetails5}
                  className="flex justify-between items-center font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict2:rights_section_5_button")}</h1>
                  {!showDetails5 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>)}
                  {showDetails5 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                  )}
                </button>
                <div className="p-4 text-lg justify-between text-left bg-FooterButtonYellow rounded-xl mt-2 w-96"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails5 ? "1" : "0",
                    visibility: showDetails5 ? "visible" : "hidden",
                    maxHeight: showDetails5 ? "1000px" : "0"
                  }}>
                  <h2> {t("dict2:rights_section_5_point_1")} </h2>
                  <br></br>
                  <h2> {t("dict2:rights_section_5_point_2")} </h2>
                  <h2> {"● " + t("dict2:rights_section_5_point_2_item_1")} </h2>
                  <h2> {"● " + t("dict2:rights_section_5_point_2_item_2")} </h2>
                  <h2> {"● " + t("dict2:rights_section_5_point_2_item_3")}
                  </h2>
                  <h2> {"● " + t("dict2:rights_section_5_point_2_item_4")} </h2>
                  <h2> {"● " + t("dict2:rights_section_5_point_2_item_5")} </h2>
                </div>
              </div>
            </div>
            <div className="font-istok flex flex-col items-center justify-center border-b-2 border-MainButtonYellow pb-2">
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
                <a href="https://www.youtube.com/watch?v=IJCRr6OYm4U&list=PLyJsWesP-0qmL3r2uf7ddID-LaDIy0Y7F" class=" text-HeadingTextGray hover:underline text-center items-center">{t("dict2:rights_section_6_video_link")}</a>
              </div>
              <div className=" flex flex-col font-bold text-xl items-center mt-2 max-w-md text-center">
                <h2>{t("dict2:rights_section_6_description")}</h2>
              </div>
              <div className="flex flex-col items-center mt-8 font-istok">
                <button
                  onClick={toggleDetails6}
                  className="flex justify-between items-center font-medium rounded-xl text-2xl w-full p-2 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-15"
                >
                  <h1 className="text-3xl font-bold text-center text-HeadingTextGray ">{t("dict2:rights_section_6_button")}</h1>
                  {!showDetails6 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>)}
                  {showDetails6 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#757575" className=" w-8 h-8">
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
                  <h2> {t("dict2:rights_section_6_point_1")} </h2>
                  <h2> {t("dict2:rights_section_6_point_1_item_1")} </h2>
                  <h2> {t("dict2:rights_section_6_point_1_item_2")} </h2>
                  <h2> {t("dict2:rights_section_6_point_1_item_3")} </h2>
                  <br></br>
                  <h2> {t("dict2:rights_section_6_point_2")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_1")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_2")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_3")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_4")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_5")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_6")} </h2>
                  <h2> {"● " + t("dict2:rights_section_6_point_2_item_7")} </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-3/5">
            <div className="flex justify-start items-center">
              <div className="flex flex-col items-start justify-center">
                {router.locale === "en" && (<Image className="object-contain ml-8"
                  src="/chat_bubble_rights2.png"
                  alt="chat"
                  width={270}
                  height={270}
                />)}
                {router.locale === "hi" && (<Image className="object-contain ml-8"
                  src="/rights_dialog_cloud_hindi.svg"
                  alt="chat"
                  width={270}
                  height={270}
                />)}
                {router.locale === "ms" && (<Image className="object-contain ml-8"
                  src="/rights_dialog_cloud_malay.svg"
                  alt="chat"
                  width={270}
                  height={270}
                />)}
                {router.locale === "zh" && (<Image className="object-contain ml-8"
                  src="/rights_dialog_cloud_chinese.svg"
                  alt="chat"
                  width={270}
                  height={270}
                />)}
                <div className="flex justify-center items-end">
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
            <div className="flex justify-center items-end">
              <Link href="/">
                <button className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button bg-ResourceButtonYellow">
                  {t("dict2:rights_return_home_button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" px-4 my-12">
          <h1 className="flex index-page-section-heading pt-6 pb-6 items-center justify-center">
            {t("dict2:index_or_section_heading")}
          </h1>
          <div className="yqa-cross-section-container">
            <ResourceSection
              id="or-section-1"
              imageSrc="/or-plan-melb-picture.jpeg"
              buttonText={t("dict2:index_or_section_buttons_text")}
              altText="or-plan-melb-picture"
              link="https://www.planning.vic.gov.au/guides-and-resources/strategies-and-initiatives/plan-melbourne"
            />
            <ResourceSection
              id="or-section-2"
              imageSrc="/or-unsdg-picture.jpeg"
              buttonText={t("dict2:index_or_section_buttons_text")}
              altText="or-unsdg-picture"
              link="https://sdgs.un.org/goals/goal11"
            />
            <ResourceSection
              id="or-section-3"
              imageSrc="/or-crt-logo.jpeg"
              buttonText={t("dict2:index_or_section_buttons_text")}
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
