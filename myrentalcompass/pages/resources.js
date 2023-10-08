import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import QuizModal from "~/components/QuizModal.js";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { t } from "i18next";


export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale, ['resources'])),
    },
  }
}


const UserguideBar = () => {

  const { t } = useTranslation();

  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showQuizQuestion, setShowQuizQuestion] = useState(false);
  const [showQuizRightAnswer, setShowQuizRightAnswer] = useState(false);
  const [showQuizWrongAnswer, setShowQuizWrongAnswer] = useState(false);


  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  function displayRightAnswer() {
    setShowQuizQuestion(false);
    setShowQuizRightAnswer(true);
  }

  function displayWrongAnswer() {
    setShowQuizQuestion(false);
    setShowQuizWrongAnswer(true);
  }

  function retryQuiz() {
    setShowQuizQuestion(true);
    setShowQuizWrongAnswer(false);
  }

  function closeQuiz() {
    setShowQuizQuestion(false);
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
    <div className="mx-auto flex flex-col w-full timeline">
      <div className='flex justify-center items-start'>
        <div className="flex justify-end items-center w-2/5">
          <Image
            src="/resources_item1.svg"
            alt="information"
            width={200}
            height={200}
          />
          <hr className="w-64 h-1 my-4 bg-MerciPurple border-10 rounded md:my-10" />
        </div>
        <div className='mt-12 ml-3 flex flex-col items-start w-2/5' >
          <button
            onClick={toggleDetails1}
            className={showDetails1 ? "font-medium text-2xl p-6 border-1 border-MainButtonYellow w-full bg-MainButtonYellow/10" : "font-medium text-2xl p-6 rounded-xl border-1 border-MainButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"}
          >
            <div className="flex justify-evenly">
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">{t("resources:RESOURCES_STEP_1_TITLE")}</h1>
              {!showDetails1 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails1 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </div>
          </button>
          <div className="flex flex-col items-center p-5 bg-FooterButtonYellow w-full text-LongContentGray " style={{
            transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
            opacity: showDetails1 ? "1" : "0",
            visibility: showDetails1 ? "visible" : "hidden",
            maxHeight: showDetails1 ? "1000px" : "0"
          }}>
            <div>
              <div className="flex w-full justify-between items-end">
                <h2 className="text-lg font-semibold">{t("resources:RESOURCES_STEP_1_SUBHEADING_1")}</h2>
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
                  <div className="p-4 mb-4 text-left bg-white shadow-sm shadow-yellow-400 rounded-xl"
                    style={{ width: "38%" }}>
                    <div className="text-3xl p-5 space-y-4">
                      <div className=" text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow p-2">
                        {t("resources:RESOURCES_QUIZ_QUESTION")}
                      </div>
                      <br></br>
                      <div className="flex flex-col items-center justify-center font-medium">
                        <div className="flex">
                          <input type="radio" value="350" name="rent" className="py-6 mr-4" onClick={() => displayWrongAnswer()} /> {"A. " + t("resources:RESOURCES_QUIZ_CHOICE_1")}
                        </div>
                        <div className="flex">
                          <input type="radio" value="500" name="rent" className="py-6 mr-4" onClick={() => displayRightAnswer()} /> {"A. " + t("resources:RESOURCES_QUIZ_CHOICE_2")}
                        </div>
                        <div className="flex">
                          <input type="radio" value="750" name="rent" className="py-6 mr-4" onClick={() => displayWrongAnswer()} /> {"A. " + t("resources:RESOURCES_QUIZ_CHOICE_3")}
                        </div>
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
                  <div className="flex flex-col p-4 mb-4 text-left font-istok bg-white shadow-sm shadow-yellow-400 rounded-xl space-y-4 py-8"
                    style={{ width: "36%" }}>
                    <div className=" text-center font-bold text-4xl text-HeadingTextGray border-b-2 border-MainButtonYellow p-2">
                      {t("resources:RESOURCES_QUIZ_RIGHT_ANSWER_TITLE")}
                    </div>
                    <div className="text-center font-medium text-3xl">{t("resources:RESOURCES_QUIZ_RIGHT_ANSWER_PARA")}</div>
                    <div className="text-center text-HeadingTextGray">{t("resources:RESOURCES_QUIZ_RIGHT_ANSWER_FOOTER")}: <Link className="underline" href="https://www.dffh.vic.gov.au/publications/rental-report">Department of Families, Fairness ad Housing </Link></div>
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
                  <div className="flex flex-col p-4 mb-4 text-left font-istok bg-white shadow-sm shadow-yellow-400 rounded-xl space-y-4 py-8"
                    style={{ width: "36%" }}>
                    <div className=" text-center font-bold text-4xl text-HeadingTextGray border-b-2 border-MainButtonYellow p-2">
                      {t("resources:RESOURCES_QUIZ_WRONG_ANSWER_TITLE")}
                    </div>
                    <div className="text-center font-medium text-3xl">{t("resources:RESOURCES_QUIZ_WRONG_ANSWER_PARA")}</div>

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
                <li>{t("resources:RESOURCES_STEP_1_PARA_1_STEP_1")}</li>
                <li>{t("resources:RESOURCES_STEP_1_PARA_1_STEP_2")}</li>
              </ul>
            </div>
            <Link href="/rights" className="font-semibold"><div className="m-5 p-5 rounded-3xl bg-ResourceButtonYellow">{t("resources:RESOURCES_STEP_1_BRIGHT_YELLOW_BOX")}
            </div></Link>
            <div>
              <h2 className="text-lg font-semibold">{t("resources:RESOURCES_STEP_1_SUBHEADING_2")}</h2>
              <ul className="list-disc pl-5">
                <li>{t("resources:RESOURCES_STEP_1_PARA_2_STEP_1")}</li>
                <li>
                  {t("resources:RESOURCES_STEP_1_PARA_2_STEP_2")}</li>
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
            className={showDetails2 ? "font-medium text-2xl p-6 border-1 border-MainButtonYellow w-full bg-MainButtonYellow/10" : "font-medium text-2xl p-6 rounded-xl border-1 border-MainButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"}
          >
            <div className="flex justify-evenly">
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">{t("resources:step_2_title")}</h1>
              {!showDetails2 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails2 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </div>
          </button>
          <div className="flex flex-col items-center" style={{
            transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
            opacity: showDetails2 ? "1" : "0",
            visibility: showDetails2 ? "visible" : "hidden",
            maxHeight: showDetails2 ? "1000px" : "0"
          }}>
            <div className="p-5 bg-FooterButtonYellow w-full text-LongContentGray">
              <div>
                <h2 className="text-lg font-semibold">{t("resources:step_2_para_1_subheading")}</h2>
                <ul className="list-disc pl-5">
                  <li>{t("resources:step_2_para_1_point_1")}</li>
                  <li>{t("resources:step_2_para_1_point_2")}</li>
                  <li>{t("resources:step_2_para_1_point_3")}</li>
                </ul>
              </div>
              <br />
              <div>
                <h2 className="text-lg font-semibold">{t("resources:step_2_para_2_subheading")}</h2>
                <ul className="list-disc pl-5">
                  <li>{t("resources:step_2_para_2_point_1")}</li>
                  <li>{t("resources:step_2_para_2_point_2")}</li>
                  <li>{t("resources:step_2_para_2_point_3")}</li>
                  <ul className="list-disc pl-5">
                    <li>realestate.com</li>
                    <li>{t("resources:step_2_para_2_point_4_item_2")}</li>
                    <li>{t("resources:step_2_para_2_point_4_item_3")}</li>
                    <li>{t("resources:step_2_para_2_point_4_item_4")}</li>
                    <li>{t("resources:step_2_para_2_point_4_item_5")}</li>
                  </ul>
                </ul>
              </div>
              <Link href="/questionnaire"><div className="m-5 p-5 rounded-3xl font-semibold bg-ResourceButtonYellow">{t("resources:step_2_bright_yellow_box")}</div></Link>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-2/5">
          <hr class="w-64 h-1 my-4 bg-MerciPurple border-10 rounded md:my-10" />
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
          <hr className="w-64 h-1 my-4 bg-MerciPurple border-10 rounded md:my-10" />
        </div>
        <div className='mt-12 ml-3 flex flex-col items-start w-2/5'>
          <button
            onClick={toggleDetails3}
            className={showDetails3 ? "font-medium text-2xl p-6 border-1 border-MainButtonYellow w-full bg-MainButtonYellow/10" : "font-medium text-2xl p-6 rounded-xl border-1 border-MainButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"}
          >
            <div className="flex justify-evenly">
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">{t("resources:step_3_title")}</h1>
              {!showDetails3 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>)}
              {showDetails3 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              )}
            </div>
          </button>
          <div className="flex flex-col items-center" style={{
            transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
            opacity: showDetails3 ? "1" : "0",
            visibility: showDetails3 ? "visible" : "hidden",
            maxHeight: showDetails3 ? "1000px" : "0"
          }}>
            <div className="p-5 bg-FooterButtonYellow w-full text-LongContentGray">
              <div>
                <h2 className="text-lg font-semibold">{t("resources:step_3_para_1_subheading")}</h2>
                <ul className="list-disc pl-5">
                  <li>{t("resources:step_3_para_1_point_1")}</li>
                  <li>{t("resources:step_3_para_1_point_2")}</li>
                  <ul className="list-disc pl-5">
                    <li>{t("resources:step_3_para_1_point_2_item_1")}</li>
                    <li>{t("resources:step_3_para_1_point_2_item_2")}</li>
                    <li>{t("resources:step_3_para_1_point_2_item_3")}</li>
                    <li>{t("resources:step_3_para_1_point_2_item_4")}</li>
                    <li>{t("resources:step_3_para_1_point_2_item_5")}</li>
                    <li>{t("resources:step_3_para_1_point_2_item_6")}</li>
                    <li>
                      {t("resources:step_3_para_1_point_2_item_7")}
                    </li>
                    <li>{t("resources:step_3_para_1_point_2_item_8")}</li>
                    <li>{t("resources:step_3_para_1_point_2_item_9")}</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
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

  const { t } = useTranslation();

  const [showDetails4, setShowDetails4] = useState(false);

  const toggleDetails4 = () => {
    setShowDetails4(!showDetails4);
  };

  return (
    <>
      <Head>
        <title>{t("resources:RESOURCES_TAB_TITLE")}</title>
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
            <div className="flex flex-col justify-center mt-24 text-gray-100/90">
              <h2 className="text-4xl font-bold text-center">
                {t("resources:RESOURCES_BANNER_HEADING")}
              </h2>
              {/* <h2 className="text-4xl font-bold text-center mt-4">
                  
                </h2> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center px-6 pb-20 p-8">
          <div className="w-10/12 flex justify-center items-center font-bold text-4xl text-HeadingTextGray">
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
                className={showDetails4 ? "font-medium text-2xl p-6 w-10/12 border-1 border-MainButtonYellow bg-MainButtonYellow/10" : "w-3/5 font-medium text-2xl p-6 rounded-md border-1 rounded-lg border-MainButtonYellow hover:w-10/12 hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 transition-all duration-1000"}
              >
                <div className="flex justify-between" id="applicationButton">
                  <h1 className="text-5xl font-bold text-center text-HeadingTextGray">4. Making an application</h1>
                  {!showDetails4 && (<svg id="applicationButtonArrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>)}
                  {showDetails4 && (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                  </svg>
                  )}
                </div>
              </button>
            </div>
            {showDetails4 && (<div className="flex flex-col items-center" >
              <div className="p-8 bg-FooterButtonYellow w-10/12">
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
      </main >
    </>
  );
}
