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
              width={150}
              height={150}
              className="mt-20"
            />
          </div>
        </div>
        <div className="flex justify-around items-center mt-8 mx-96">
          <Link href="https://auo.org.au/">
            <button className="text-sm md:text-sm lg:text-md font-bold call-action-button mr-12">
            Read more at the AUO website
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
