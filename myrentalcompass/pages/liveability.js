import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      ...(await serverSideTranslations(locale, ['common', 'dict3'], i18nextConfig)),
    },
  }
}

function Liveability() {
  const { t } = useTranslation();
  const router = useRouter();

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
        <title>{"MyRentalCompass | " + t("dict3:liveability_tab_title")}</title>
        <meta name="description" content="Learn about liveability factors." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar activePage="What is liveability" className="z-10" />
      <main className="font-istok flex flex-col min-h-screen bg-BackgroundWhite text-black">
        <div className="relative h-3/5 w-full">
          <img
            loader={imageLoader}
            loading="eager"
            src="/park.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-gray-100/90">
            <div className="flex flex-col justify-center my-36">
              <h1 className="text-5xl font-bold text-center">
                {t("dict3:liveability_banner_title_1")}<br></br>
                {t("dict3:liveability_banner_title_2")}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center font-bold text-5xl text-HeadingTextGray mt-16">
          <h1> {t("dict3:liveability_description_heading")} </h1>
        </div>
        <div className="flex justify-center items-center px-8">
          <div className="flex flex-col justify-center items-center">
            <div className=" my-2">
              <h2 className="font-bold text-3xl mb-4 px-4"> {t("dict3:liveability_description_subheading")} </h2>
              <h2 className="text-xl max-w-4xl px-4"> {t("dict3:liveability_description_point_1")} </h2>
              <br></br>
              <h2 className="text-xl px-4"> {t("dict3:liveability_description_point_2")} </h2>
              <br></br>
              <h2 className="text-xl max-w-4xl px-4"> {t("dict3:liveability_description_point_3")} </h2>
            </div>
          </div>
          <div className="flex justify-between items-center">
            {router.locale === "en" && (<Image
              src="/chat_bubble_liveability.png"
              alt="chat"
              width={400}
              height={400}
            />)}
            {router.locale === "hi" && (<Image
              src="/liveability_dialog_cloud_hindi.svg"
              alt="chat"
              width={400}
              height={400}
            />)}
            {router.locale === "ms" && (<Image
              src="/liveability_dialog_cloud_malay.svg"
              alt="chat"
              width={400}
              height={400}
            />)}
            {router.locale === "zh" && (<Image
              src="/liveability_dialog_cloud_chinese.svg"
              alt="chat"
              width={400}
              height={400}
            />)}
            <Image
              src="/woman.gif"
              alt="girl"
              width={140}
              height={140}
              className="mt-20"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center font-istok mt-12">
          <div className="flex items-start divider_rights">
            <div className="flex flex-col justify-center items-center mr-12">
              <Image
                src="/tram.png"
                alt="tram"
                width={180}
                height={180}
              />
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-8">
                <button onClick={toggleDetails1}
                  className="flex justify-between font-medium rounded-xl p-2 w-full
                  hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200">
                  <p className="text-3xl font-bold text-center text-HeadingTextGray"> {t("dict3:liveability_section_1_button")} </p>
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
                    maxWidth: "38rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails1 ? "1" : "0",
                    visibility: showDetails1 ? "visible" : "hidden",
                    maxHeight: showDetails1 ? "1000px" : "0"
                  }}>

                  <p> {t("dict3:liveability_section_1_description")}
                  </p>
                  <br></br>
                  <h2>{t("dict3:liveability_section_1_source_heading")}</h2>
                  <a href="https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2" className="hover:underline hover:text-ButtonHoverYellow">
                    1. https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2
                  </a><br></br>
                  <a href="https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundaries" className="hover:underline hover:text-ButtonHoverYellow">
                    2. https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundaries
                  </a>
                </div>
              </div>
              <Image
                src="/guard.png"
                alt="guard"
                width={180}
                height={180}
                className="mt-12"
              />
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-8">
                <button
                  onClick={toggleDetails3}
                  className="flex justify-between font-medium rounded-xl text-2xl p-2 w-full hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <p className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict3:liveability_section_3_button")}</p>
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
                    maxWidth: "38rem",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showDetails3 ? "1" : "0",
                    visibility: showDetails3 ? "visible" : "hidden",
                    maxHeight: showDetails3 ? "1000px" : "0"
                  }}>
                  <p> {t("dict3:liveability_section_3_description")}
                  </p>
                  <br></br>
                  <h2>{t("dict3:liveability_section_1_source_heading")}</h2>
                  <a href="https://discover.data.vic.gov.au/dataset/crash-stats-data-extract " className="hover:underline hover:text-ButtonHoverYellow">
                    1. https://discover.data.vic.gov.au/dataset/crash-stats-data-extract
                  </a><br></br>
                  <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023 " className="hover:underline hover:text-ButtonHoverYellow">
                    2. https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/police-station.png"
                alt="police"
                width={180}
                height={180}
              />
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-8">
                <button
                  onClick={toggleDetails2}
                  className="flex justify-between font-medium rounded-xl text-2xl p-2 w-full hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <p className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict3:liveability_section_2_button")}</p>

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

                  <p>{t("dict3:liveability_section_2_description")}

                  </p>
                  <br></br>
                  <h2 className=" font-medium">
                    {t("dict3:liveability_section_1_source_heading")}
                  </h2>
                  <a href="https://www.crimestatistics.vic.gov.au/crime-statistics/latest-victorian-crime-data/download-data " className="hover:underline hover:text-ButtonHoverYellow">
                    1. https://discover.data.vic.gov.au/dataset/crash-stats-data-extract
                  </a><br></br>
                  <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023  " className="hover:underline hover:text-ButtonHoverYellow">
                    2. https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023
                  </a>
                </div>
              </div>
              <Image
                src="/park.png"
                alt="park"
                width={180}
                height={180}
                className="mt-12"
              />
              <div className="flex flex-col items-center justify-center border-b-2 border-MainButtonYellow mt-8">
                <button
                  onClick={toggleDetails4}
                  className="flex justify-between font-medium rounded-xl text-2xl p-2 w-full hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
                >
                  <p className="text-3xl font-bold text-center text-HeadingTextGray">{t("dict3:liveability_section_4_button")}</p>
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
                  <p>{t("dict3:liveability_section_4_description")}
                  </p>
                  <br></br>
                  <h2 className=" font-medium">
                    {t("dict3:liveability_section_1_source_heading")}
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
          <div className="flex flex-col items-center justify-center mt-8">
            <button
              onClick={toggleDetails5}
              className="flex justify-center font-medium rounded-xl text-2xl p-2 w-4/5 hover:shadow-md hover:shadow-ShadeGray hover:bg-ResourceButtonYellow duration-200"
            >
              <p className="text-4xl font-bold text-center text-HeadingTextGray mr-12">{t("dict3:liveability_section_5_button")}</p>
              {!showDetails5 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className=" w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails5 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </button>
            <div className="p-4 mb-2 text-md justify-between text-left bg-FooterButtonYellow rounded-xl mt-4 w-4/5"
              style={{
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                opacity: showDetails5 ? "1" : "0",
                visibility: showDetails5 ? "visible" : "hidden",
                maxHeight: showDetails5 ? "1000px" : "0"
              }}>
              <h2 className="font-bold text-xl">
                {t("dict3:liveability_section_5_item_1_heading")}
              </h2>
              <p className="text-left">
                {"- " + t("dict3:liveability_section_5_item_1_point_1")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_1_point_2")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_1_point_3")}
              </p>
              <br></br>
              <h2 className="font-bold text-xl">
                {t("dict3:liveability_section_5_item_2_heading")}
              </h2>
              <p className="text-left">
                {"- " + t("dict3:liveability_section_5_item_2_point_1")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_2_point_2")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_2_point_3")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_2_point_4")}
              </p>
              <br></br>
              <h2 className="font-bold text-xl">
                {t("dict3:liveability_section_5_item_3_heading")}
              </h2>
              <p className="text-left">
                {"- " + t("dict3:liveability_section_5_item_3_point_1")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_3_point_2")} <br></br>
                {"- " + t("dict3:liveability_section_5_item_3_point_3")} <br></br>
              </p>
            </div>

          </div>
        </div>
        <div className="flex justify-center items-center mt-28">
          <Link href="https://auo.org.au/">
            <button className=" text-xs md:text-sm lg:text-lg font-bold call-action-button mr-12">
              <p>{t("dict3:liveability_read_more_auo_button_line_1")}</p>
              <p>{t("dict3:liveability_read_more_auo_button_line_2")}</p>
            </button>
          </Link>
          <Link href="/">
            <button className="text-sm md:text-sm lg:text-2xl font-bold call-action-button bg-ResourceButtonYellow">
              <p className="my-3">{t("dict3:liveability_return_home_button")} </p>

            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center mt-12 mb-6 px-8">
          <h2 className="font-bold text-3xl">{t("common:credits_page_title")}</h2>
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
