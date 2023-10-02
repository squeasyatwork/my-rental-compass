import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const UserguideBar = () => {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showQuizQuestion, setShowQuizQuestion] = useState(false);
  const [showQuizRightAnswer, setShowQuizRightAnswer] = useState(false);
  const [showQuizWrongAnswer, setShowQuizWrongAnswer] = useState(false);
  const [choice1Selected, setChoice1Selected] = useState(false);
  const [choice2Selected, setChoice2Selected] = useState(false);
  const [choice3Selected, setChoice3Selected] = useState(false);


  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  function processChoice1() {
    setShowQuizQuestion(false);
    setChoice1Selected(true);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setShowQuizWrongAnswer(true);
  }
  function processChoice2() {
    setShowQuizQuestion(false);
    setChoice2Selected(true);
    setChoice1Selected(false);
    setChoice3Selected(false);
    setShowQuizRightAnswer(true);
  }
  function processChoice3() {
    setShowQuizQuestion(false);
    setChoice3Selected(true);
    setChoice1Selected(false);
    setChoice2Selected(false);
    setShowQuizWrongAnswer(true);
  }

  function retryQuiz() {
    setShowQuizQuestion(true);
    setShowQuizWrongAnswer(false);
  }

  function closeQuiz() {
    setShowQuizQuestion(false);
    setChoice1Selected(false);
    setChoice2Selected(false);
    setChoice3Selected(false);
    setShowQuizRightAnswer(false);
    setShowQuizWrongAnswer(false);
  }


  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  return (
    <div className="mx-auto flex flex-col w-4/5 timeline -space-y-12">
      <div className='flex justify-center items-start'>
        <div className="flex justify-end items-center w-2/5">
          <Image
            src="/resources_item1.svg"
            alt="information"
            width={200}
            height={200}
          />
          <hr className="w-64 h-1 my-4 bg-HeadingTextGray border-10 rounded md:my-10" />
        </div>
        <div className='mt-12 ml-3 flex flex-col items-start w-2/5' >
          <button
            onClick={toggleDetails1}
            className={showDetails1 ? "font-medium text-2xl p-6 border-1 border-FooterButtonYellow w-full bg-MainButtonYellow/10" : "font-medium text-2xl p-6 rounded-xl border-1 border-FooterButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-semibold text-center text-HeadingTextGray">1. Before you leave</h1>
              {!showDetails1 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails1 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </div>
          </button>
          <div className="flex flex-col items-center px-1 p-5 bg-FooterButtonYellow w-full text-LongContentGray" style={{
            transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
            opacity: showDetails1 ? "1" : "0",
            visibility: showDetails1 ? "visible" : "hidden",
            maxHeight: showDetails1 ? "1000px" : "0"
          }}>
            <div className="flex flex-col w-4/5">
              <div className="flex w-full justify-between items-end">
                <h2 className="text-lg font-semibold">Do your research</h2>
                <button onClick={() => setShowQuizQuestion(true)}>
                  <Image
                    src="/resources_quiz_icon.gif"
                    alt="information"
                    width={40}
                    height={40}
                    className="rounded-md shadow-md"
                  />
                </button>
                <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showQuizQuestion ? "1" : "0",
                    visibility: showQuizQuestion ? "visible" : "hidden"
                  }}>
                  <div className="pt-4 mb-4 text-left bg-white shadow-sm shadow-yellow-400 rounded-xl h-2/5"
                    style={{ width: "38%" }}>
                    <div className="flex flex-col justify-center text-3xl p-5 px-12">
                      <div className="text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow pb-6">
                        How much do you think the average weekly rent in Melbourne is?
                      </div>
                      <br></br>
                      <div className="flex flex-col items-center justify-center -mt-2 space-y-3">
                        <button onClick={() => processChoice1()}>
                          <div className="flex justify-between items-center">
                            {!choice1Selected && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFCD29" class="w-9 h-9 mx-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>)}
                            {choice1Selected && (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFCD29" class="w-9 h-9 mx-5">
                              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            )}
                            <div className="text-3xl">A$350 per week</div>
                          </div>
                        </button>
                        <button onClick={() => processChoice2()}>
                          <div className="flex justify-between items-center">
                            {!choice2Selected && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFCD29" class="w-9 h-9 mx-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>)}
                            {choice2Selected && (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFCD29" class="w-9 h-9 mx-5">
                              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            )}
                            <div className="text-3xl">A$500 per week</div>
                          </div>
                        </button>
                        <button onClick={() => processChoice3()}>
                          <div className="flex justify-between items-center">
                            {!choice3Selected && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFCD29" class="w-9 h-9 mx-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>)}
                            {choice3Selected && (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFCD29" class="w-9 h-9 mx-5">
                              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                            )}
                            <div className="text-3xl">A$750 per week</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => closeQuiz()}>
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={80}
                      height={80}
                      className=" hover:opacity-70 transition duration-1000 ease-in-out"
                    />
                  </button>
                </div>
                <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showQuizRightAnswer ? "1" : "0",
                    visibility: showQuizRightAnswer ? "visible" : "hidden"
                  }}>
                  <div className="flex flex-col justify-between px-12 py-8 mb-4 text-left font-istok bg-white shadow-sm shadow-yellow-400 rounded-xl space-y-4 h-2/5"
                    style={{ width: "38%" }}>
                    <div className="text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow pb-6 pt-2">
                      Spot On!
                    </div>
                    <div className="text-center font-medium text-3xl">The average weekly rent in Melbourne is A$500.</div>
                    <div className="text-center text-HeadingTextGray pb-4">Source: <Link className="underline" href="https://www.dffh.vic.gov.au/publications/rental-report">Department of Families, Fairness and Housing </Link></div>
                  </div>

                  <button onClick={() => closeQuiz()}>
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={80}
                      height={80}
                      className=" hover:opacity-70 transition duration-1000 ease-in-out"
                    />
                  </button>
                </div>
                <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                  style={{
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showQuizWrongAnswer ? "1" : "0",
                    visibility: showQuizWrongAnswer ? "visible" : "hidden"
                  }}>
                  <div className="flex flex-col justify-evenly mb-4 text-left font-istok bg-white shadow-sm shadow-yellow-400 rounded-xl space-y-4 px-12 py-8 h-2/5 object-fit"
                    style={{ width: "38%" }}>
                    <div className="text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow pb-6 pt-2">
                      Not quite.
                    </div>
                    <div className="text-center font-medium text-3xl"><div>Try again</div></div>

                  </div>
                  <div className="flex items-center justify-evenly w-2/5">
                    <button onClick={() => retryQuiz()}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} opacity="90%" stroke="#FFCD29" className="w-20 h-20 hover:opacity-70 transition duration-1000 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </button>
                    <button onClick={() => closeQuiz()}>
                      <Image
                        src="/close.svg"
                        alt="close"
                        width={75}
                        height={75}
                        className=" hover:opacity-70 transition duration-1000 ease-in-out"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <ul className="list-disc pl-5">
                <li>Understand the typical rent costs of the area</li>
                <li>Research lease terms and other legal requirements to protect your rights as a tenant</li>
              </ul>
            </div>
            <Link href="/rights" className="font-semibold"><div className="mx-20 my-6 p-5 rounded-2xl bg-ResourceButtonYellow">Click here to check out our What You Need to Know page for more information on rental laws
            </div></Link>
            <div className="w-4/5">
              <h2 className="text-lg font-semibold">Begin saving</h2>
              <ul className="list-disc pl-5 pb-4">
                <li>Know that you know how much rent will be a week, start saving up!</li>
                <li>
                  Be aware that it is standard practice when securing a rental to also pay for security deposits and the first month&apos;s rent so save more than you think you will need</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='flex justify-center items-start'>
        <div className='mt-12 mr-3 flex flex-col items-end w-2/5 text-LongContentGray'>
          <button
            onClick={toggleDetails2}
            className={showDetails2 ? "font-medium text-2xl p-6 border-1 border-FooterButtonYellow w-full bg-MainButtonYellow/10" : "font-medium text-2xl p-6 rounded-xl border-1 border-FooterButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-semibold text-center text-HeadingTextGray">2. When you arrive</h1>
              {!showDetails2 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails2 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </div>
          </button>
          <div className="flex flex-col items-center w-full" style={{
            transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
            opacity: showDetails2 ? "1" : "0",
            visibility: showDetails2 ? "visible" : "hidden",
            maxHeight: showDetails2 ? "1000px" : "0"
          }}>
            <div className="py-8 px-20 bg-FooterButtonYellow w-full text-LongContentGray">
              <div>
                <h2 className="text-lg font-semibold">Welcome to Melbourne</h2>
                <ul className="list-disc pl-5">
                  <li>Contact your university&apos;s student services, as they may have resources to help you find rental accommodation</li>
                  <li>Inquire about on-campus accommodation options</li>
                  <li>Arrange temporary accommodation for your first few days or weeks, like a hostel, hotel, or AirBnB</li>
                </ul>
              </div>
              <br />
              <div>
                <h2 className="text-lg font-semibold">Finding accommodation</h2>
                <ul className="list-disc pl-5">
                  <li>Use our site to help you find out which suburbs best suit your needs</li>
                  <li>
                    Now you can begin finding listed rental properties that match your preferences</li>
                  <li>Places you could search include:</li>
                  <ul className="list-disc pl-5">
                    <li>realestate.com</li>
                    <li>Real estate agency websites</li>
                    <li>Newspaper listings</li>
                    <li>Noticeboards</li>
                    <li>Online marketplaces</li>
                  </ul>
                </ul>
              </div>
              <Link href="/questionnaire"><div className="m-5 p-5 rounded-2xl font-semibold bg-ResourceButtonYellow">Complete the questionnaire for our Find a Suburb to Live feature to determine the best suburb for you</div></Link>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-2/5">
          <hr class="w-64 h-1 my-4 bg-HeadingTextGray border-10 rounded md:my-10" />
          <Image
            src="/resources_item2.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='flex justify-center items-start'>
        <div className="flex justify-end items-center w-2/5">
          <Image
            src="/resources_item3.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl"
          />
          <hr className="w-64 h-1 my-4 bg-HeadingTextGray border-10 rounded md:my-10" />
        </div>
        <div className='mt-12 ml-3 flex flex-col items-start w-2/5'>
          <button
            onClick={toggleDetails3}
            className={showDetails3 ? "font-medium text-2xl p-6 border-1 border-FooterButtonYellow w-full bg-MainButtonYellow/10" : "font-medium text-2xl p-6 rounded-xl border-1 border-FooterButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-semibold text-center text-HeadingTextGray">3. Found a property</h1>
              {!showDetails3 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails3 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </div>
          </button>
          {showDetails3 && (<div className="flex flex-col items-center">
            <div className="py-8 px-20 pb-10 bg-FooterButtonYellow w-full text-LongContentGray">
              <div>
                <h2 className="text-lg font-semibold">Inspecting a property</h2>
                <ul className="list-disc pl-5">
                  <li>Congratulations you have a found a property that you like. Now it is time to inspect it to make sure it suits your needs, and is safe to live in</li>
                  <li>Some things to consider when inspecting a property include:</li>
                  <ul className="list-disc pl-5">
                    <li>Assess the general condition of the property, including walls, floors, ceilings, and windows</li>
                    <li>Check the locks on doors and windows to ensure they work properly</li>
                    <li>Verify the presence of smoke detectors, fire extinguishers, and carbon monoxide detectors if required by law.</li>
                    <li>Inspect appliances such as the stove, refrigerator, dishwasher, and washer/dryer (if included).</li>
                    <li>Test lights, faucets, and electrical outlets to ensure they are functional.</li>
                    <li>Turn on faucets and showers to check water pressure and temperature.</li>
                    <li>
                      Consider if there&apos;s enough room for your belongings.
                      Pay attention to the noise level in the area, especially during the day and night.
                    </li>
                    <li>Evaluate the proximity to public transportation options if needed.</li>
                    <li>Explore the neighbourhood to assess proximity to essential services, grocery stores, and schools.</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>)}
        </div>

      </div>
      <br></br>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center mt-8'>
          <Image
            src="/resources_item4.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl z-10"
          />
        </div>

      </div>
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

        <div className="relative h-6/12 w-full">
          <img
            src="/resources_page_banner.png"
            alt="Description of the image"
            className="absolute inset-0 object-cover object-center w-full h-full filter brightness-60 z-0"
          />
          <div className="relative flex flex-col justify-between h-full text-center ">
            <div className="flex flex-col justify-center my-40 text-gray-100/90">
              <h2 className="text-5xl font-bold text-center">
                Knowing the steps to apply for a rental can be confusing!
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center px-6 pb-20 p-8">
          <div className="flex justify-center items-center font-bold text-4xl text-HeadingTextGray">
            <h1>
              Follow our guide to take you on the journey of applying for a property
            </h1>

            {/* <hr className="h-1 bg-MainButtonYellow border-10 rounded my-4" /> */}
            <Image className="object-contain ml-8"
              src="/resources_dialog_cloud.svg"
              alt="chat"
              width={150}
              height={75}
            />
            <Image className="object-contain"
              src="/woman.gif"
              alt="woman"
              width={150}
              height={75}
            />
          </div>
          <div className="relative h-full w-full">

            <UserguideBar />
            <div className="flex justify-center">
              <button
                onClick={toggleDetails4}
                className={showDetails4 ? "font-medium text-2xl p-6 w-3/5 border-1 border-FooterButtonYellow bg-MainButtonYellow/10" : "w-3/5 font-medium text-2xl p-6 rounded-md border-1 rounded-lg border-FooterButtonYellow hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 transition-all duration-1000"}
              >
                <div className="flex justify-between items-center" id="applicationButton">
                  <h1 className="text-5xl font-semibold text-center text-HeadingTextGray">4. Making an application</h1>
                  {!showDetails4 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>)}
                  {showDetails4 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                  )}
                </div>
              </button>
            </div>
            {showDetails4 && (<div className="flex flex-col items-center" >
              <div className="p-8 bg-FooterButtonYellow w-3/5">
                <div>
                  <h2 className="text-lg font-semibold text-LongContentGray">Follow the checklist to make sure that you have everything you need to make a rental application</h2>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Personal Information" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li className="pb-5">Full legal name that matches your other documents, and contact details, including phone number and email address.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Proof of Identification" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li className="pb-5">A copy of your passport, driver&apos;s license, or other government-issued ID.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Proof of Income" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li>Pay slips, employment letter, or bank statements to demonstrate your ability to pay rent.</li><li>If you are not working whilst being a student, provide proof of financial support from a scholarship, sponsor, or family</li><li className="pb-5">Recent bank statements to verify your financial stability and ability to cover rent and expenses.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Proof of Visa or Residency Status" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li className="pb-5">Provide proof of your visa or residency status.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Rental History" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li>Contact information for previous landlords or property managers.</li><li className="pb-5">Rental references or recommendation letters from previous landlords if available.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="References" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li>Personal references who can vouch for your character and reliability.</li><li className="pb-5">If you are working, also include contact information for your employer or proof of current employment, such as a job offer letter.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Co-Signer Information" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li className="pb-5">If your income or credit doesn&apos;t meet the landlord&apos;s requirements, provide information about a co-signer who can guarantee the lease.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Cover Letter or Letter of Intent" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li className="pb-5">Write a brief letter explaining why you are a suitable tenant and why you want to rent the property.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Emergency Contact Information" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li className="pb-5">Provide the contact information of someone who can be reached in case of emergencies, preferably someone local as well as from your home country.</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Fees" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li>Be prepared to pay any application fees required by the landlord or property management company.</li><li className="pb-5">Also be prepared to pay the security deposit and first month’s rent promptly if your application is approved</li></ul>
                    <FormControlLabel control={<Checkbox />} label="Application Forms" />
                    <ul className="list-disc pl-16 text-LongContentGray"><li>Fill out the rental application form provided by the landlord or property manager accurately and completely.</li><li className="pb-5">Note that any application form will include require much of the information that has been listed above</li></ul>
                  </FormGroup>
                </div>
              </div>
            </div>)}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
