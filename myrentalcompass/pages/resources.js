import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import React, { useState } from 'react';
import Image from 'next/image';

const UserguideBar = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  return (
    <div className="mx-auto flex flex-col w-full space-y-12 timeline">
      <div className='flex justify-center items-center resource_item'>
        <div className="flex justify-between items-center">
          <Image
            src="/resources_item1.svg"
            alt="information"
            width={200}
            height={200}
          // className="mr-12"
          />
          <hr class="w-64 h-1 ml-5 my-4 bg-MainButtonYellow border-10 rounded md:my-10" />
        </div>
        <div className='flex flex-col ml-10'>
          <button
            onClick={toggleDetails1}
            className="font-medium text-2xl px-3 py-1 rounded-md"
          >
            <h1 className="ml-14 text-5xl font-bold text-center text-HeadingTextGray">Before you leave..</h1>
          </button>
          {showDetails1 && (
            <div className="mt-4 ml-12">
              <div className="cursor-pointer">
                <h2 className="text-lg font-semibold">Section 1</h2>
                <p>Details about Section 1...</p>
              </div>
              <div className="cursor-pointer mt-2">
                <h2 className="text-lg font-semibold">Section 2</h2>
                <p>Details about Section 2...</p>
              </div>
              {/* Add more sections as needed */}
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center items-center resource_item'>
        <div className='flex flex-col items-center justify-center mr-12'>
          <button
            onClick={toggleDetails2}
            className=" font-medium text-2xl px-3 py-1 rounded-md"
          >
            <h1 className="mr-12 text-5xl font-bold text-center text-HeadingTextGray">When you arrive..</h1>
          </button>
          {showDetails2 && (
            <div className="mt-4 mr-12">
              <div className="cursor-pointer">
                <h2 className="text-lg font-semibold">Section 1</h2>
                <p>Details about Section 1...</p>
              </div>
              <div className="cursor-pointer mt-2">
                <h2 className="text-lg font-semibold">Section 2</h2>
                <p>Details about Section 2...</p>
              </div>
              {/* Add more sections as needed */}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <hr class="w-64 h-1 mr-5 my-4 bg-MainButtonYellow border-10 rounded md:my-10" />
          <Image
            src="/resources_item2.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className='flex justify-center items-center resource_item'>
        <div className="flex justify-between items-center">
          <Image
            src="/resources_item3.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl"
          />
          <hr class="w-64 h-1 ml-5 my-4 bg-MainButtonYellow border-10 rounded md:my-10" />
        </div>
        <div className='flex flex-col ml-10'>
          <button
            onClick={toggleDetails3}
            className=" font-medium text-2xl px-3 py-1 rounded-md"
          >
            <h1 className="ml-12 text-5xl font-bold text-center text-HeadingTextGray">Found a property..</h1>
          </button>
          {showDetails3 && (
            <div className="mt-4 ml-12">
              <div className="cursor-pointer">
                <h2 className="text-lg font-semibold">Section 1</h2>
                <p>Details about Section 1...</p>
              </div>
              <div className="cursor-pointer mt-2">
                <h2 className="text-lg font-semibold">Section 2</h2>
                <p>Details about Section 2...</p>
              </div>
              {/* Add more sections as needed */}
            </div>
          )}
        </div>

      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center'>
          <Image
            src="/resources_item4.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl z-10"
          />
        </div>

      </div>
      <hr class="h-px my-8 bg-MainButtonYellow border-3 dark:bg-gray-700" />
    </div >

  );
};
export default function Resources() {
  const [showDetails4, setShowDetails4] = useState(false);

  const toggleDetails4 = () => {
    setShowDetails4(!showDetails4);
  };

  return (
    <>
      <Head>
        <title>MyRentalCompass | What you need to do</title>
        <meta name="description" content="What you need to do." />
      </Head>

      <main className="font-inter flex flex-col min-h-screen text-black">
        <Navbar activePage="What you need to do" className="z-10" />

        <div className="relative h-3/5 w-full">
          <img
            src="/liveable-cities.jpeg"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-BackgroundWhite">
            <div className="flex flex-col justify-center my-44">
              <h1 className="text-5xl font-bold text-center">
                Knowing what to do to apply for a rental can be
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                confusing!
              </h1>
              <h1 className="text-5xl font-bold text-center mt-4">
                Follow our guide to take you on the journey of
              </h1>
              <h2 className="text-5xl font-bold text-center mt-4">
                applying for a property
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center px-6 pb-20 p-8">
          <h1 className="text-5xl w-3/5 font-bold text-center text-HeadingTextGray">
            Follow our step-by-step guide below to help you
            understand the rental process.
          </h1>
          <div className="relative my-8 h-full w-4/5">
            <div className='flex justify-center mb-6'>
              <Image className="object-contain"
                src="/resources_dialog_cloud.svg"
                alt="chat"
                width={200}
                height={100}
              />
              <Image className="object-contain"
                src="/woman.gif"
                alt="woman"
                width={200}
                height={100}
              />
            </div>
            <UserguideBar />
            <button
              onClick={toggleDetails4}
              className=" font-medium text-2xl px-3 py-1 rounded-md"
            >
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">Making an application...</h1>
            </button>
            {showDetails4 && (
              <div className="mt-4">
                <div className="cursor-pointer">
                  <h2 className="text-lg font-semibold">Section 1</h2>
                  <p>Details about Section 1...</p>
                </div>
                <div className="cursor-pointer mt-2">
                  <h2 className="text-lg font-semibold">Section 2</h2>
                  <p>Details about Section 2...</p>
                </div>
                {/* Add more sections as needed */}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
