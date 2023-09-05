import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";

const imageLoader = ({ src, width, quality }) => {
  return `https://develop.d1f77h13nbf5uz.amplifyapp.com/${src}?w=${width}&q=${quality || 75
    }`;
};

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
  return (
    <>
      <Head>
        <title>MyRentalCompass | Home</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
      </Head>

      <main className="font-inter flex flex-col h-screen">
        <Navbar activePage="Home" className="z-10" />

        <div className="relative h-4/5-screen w-full">
          <img
            src="/liveable-cities.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative z-10 flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col items-center space-y-6 mt-40">
              <h1 className="text-5xl font-bold text-center">
                Everyone has the right to
              </h1>
              <h1 className="text-5xl font-bold text-center">
                affordable, safe and liveable housing
              </h1>
              <h2 className="text-2xl font-medium text-center mt-16">
                We are here to help you find the place you can call home
              </h2>
              <Link href="/map">
                <button className="call-action-button text-lg width-52 p-2 mt-6">
                  Find where to live
                </button>
              </Link>
            </div>
            <div className="flex flex-col items-end pb-4 pr-4">
              <h2 className="text-xs font-normal">
                Picture credit: Australian Urban Observatory
              </h2>
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
              subheading="Looking to rent?"
              content="Finding a place to live in Victoria can be very frustrating. We
              know, because we have been there too. |||That is why we are driven
              to help young people like you to make an informed decision in
              finding a place to call home in Victoria."
              link="/questionnaire"
              btnText="Use our AI tool to find where to live"
            />
            <Section
              id="yqa-section-1"
              imageSrc="/curious-icon.jpeg"
              altText="curious-icon"
              subheading="Curious what it means?"
              content="Not everyone is born to be a lawyer. 
              Tenancy laws and contract can be very confusing, especially if it is your first time.|||
              We have curate an easy-to-follow guide to help you understand your rights and responsibilities as a renter."
              link="/rights"
              btnText="Get to know your rights as a renter"
            />
            <Section
              id="yqa-section-1"
              imageSrc="/liveability-icon.jpeg"
              altText="liveability-icon"
              subheading="What is liveability?"
              content="Living in a safe and liveable neighbourhood is everyone's dream. But do you 
              know what makes a suburb liveable? Researchers have done many studies on this, 
              and we are putting them here to help you make an informed decision when renting 
              in Melbourne."
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
              id="or-section-1"
              imageSrc="/or-unsdg-picture.jpeg"
              altText="or-unsdg-picture"
              link="https://sdgs.un.org/goals/goal11"
            />
            <ResourceSection
              id="or-section-1"
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
