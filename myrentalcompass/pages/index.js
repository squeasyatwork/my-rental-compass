import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "~/next-i18next.config";

const imageLoader = ({ src, width, quality }) => {
  return `https://develop.myrentalcompass.me/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(
        locale,
        ["common", "dict2"],
        i18nextConfig
      )),
    },
  };
}

export const Section = ({
  id,
  imageSrc,
  altText,
  subheading,
  content,
  link,
  btnText,
}) => {
  return (
    <div id={id} className="flex flex-col items-center mx-3 section-container">
      <div className="bg-gray-200 w-96 h-44 flex rounded items-center justify-center mb-1">
        <Image
          loader={imageLoader}
          src={imageSrc}
          width={150}
          height={100}
          alt={altText}
          loading="eager"
          className="mx-auto"
        />
      </div>
      <div className="yqa-subheading text-center w-96">{subheading}</div>
      <div className="copywrite-content mx-2 my-4 text-justify w-96 mb-6">
        {content.split("|||").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== content.split("|||").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center">
        <Link href={link}>
          <button className="call-action-button">{btnText}</button>
        </Link>
      </div>
    </div>
  );
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

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("dict2:index_tab_title")}</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black">
        <Navbar
          activePage="Home"
          className="z-10"
          option1={t("common:menu_item_1")}
          option2={t("common:menu_item_2")}
          option3={t("common:menu_item_3")}
          option4={t("common:menu_item_4")}
          option5={t("common:menu_item_5")}
        />

        <div className="relative h-3/5 w-full">
          <img
            src="/banner-homepage.jpg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full z-0 shadow-md"
            style={{
              filter: "brightness(60%)",
            }}
          />
          <div className="relative z-10 flex flex-col justify-center h-full text-BackgroundWhite space-y-6">
            <div className="flex flex-col items-center space-y-6 flex-grow">
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <div className="h1-container">
                    <h1 className="text-6xl font-bold mt-16 relative z-10 text-center whitespace-nowrap">
                      You deserve a place you can call home
                    </h1>
                    <div className="highlighter-line"></div>
                  </div>
                </div>
                <h2 className="text-4xl font-medium text-center mt-14 mb-6">
                  International students often face difficulties finding
                  <div className="mb-4" />
                  accommodation in Melbourne, we are here to help!
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/map">
                  <button className="call-action-button w-auto p-6 mt-6 text-2xl font-bold rounded-3xl">
                    Find a suburb to live
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end pb-4 pr-4">
              <h2 className="text-xs font-normal">
                Picture credit: 
              </h2>
              <div className="mb-4" />
            </div>
          </div>
        </div>
        <div className="bg-white px-6 pb-20">
          <h1 className="index-page-section-heading mt-16 mb-6">
            Your questions answered
          </h1>
          <div className="yqa-cross-section-container">
            <Section
              id="yqa-section-1"
              imageSrc="/looking-to-rent-icon.jpeg"
              altText="looking-to-rent-icon"
              subheading="Not sure where to start?"
              content="The process of finding a place to rent can be confusing. |||We have made a step-by-step guide that you can follow to lead you through the process - from before you leave your country, all the way to arriving in Melbourne and beyond."
              link="/resources"
              btnText="Follow our step-by-step rental guide"
            />
            <Section
              id="yqa-section-2"
              imageSrc="/curious-icon.jpeg"
              altText="curious-icon"
              subheading="Curious what it means?"
              content="Not everyone is born to be a lawyer. Tenancy laws and contract can be very confusing, especially if it is your first time.|||We have curated an easy-to-follow guide to help you understand your rights and responsibilities as a renter."
              link="/rights"
              btnText="Get to know your rights as a renter"
            />
            <Section
              id="yqa-section-3"
              imageSrc="/liveability-icon.jpeg"
              altText="liveability-icon"
              subheading="What is liveability?"
              content="Living in a safe and liveable neighborhood is everyone's dream. But do you know what makes a suburb liveable? Researchers have done many studies on this, and we are putting them here to help you make an informed decision when renting in Melbourne."
              link="/liveability"
              btnText="Read more about liveability"
            />
          </div>

          <h1 className="index-page-section-heading pt-12 pb-6">
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
              <a href="https://www.freepik.com/free-photo/kitchen-student-dormitory-group-interracial-students-engaged-education_29719888.htm" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.freepik.com/free-photo/kitchen-student-dormitory-group-interracial-students-engaged-education_29719888.htm Image by fxquadro on Freepik</a>
              <a href="https://www.flaticon.com/free-icons/home" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icons/home Home icons created by Freepik - Flaticon </a>
              <a href="https://www.flaticon.com/free-icons/playground" class="text-HeadingTextGrey text-sm font-istok hover:underline ">● https://www.flaticon.com/free-icons/playground Playground icons created by Bamicon - Flaticon </a>
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
