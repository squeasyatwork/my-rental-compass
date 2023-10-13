import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "~/next-i18next.config";
import { useRouter } from "next/router.js";

import CustomTooltip from "~/components/CustomTooltip.js";

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(
        locale,
        ["common", "resources"],
        i18nextConfig
      )),
    },
  };
}

const UserguideBar = () => {
  const { t } = useTranslation();

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
    <div className="mx-auto flex flex-col w-full timeline -space-y-12">
      <div className="flex justify-center items-start">
        <div className="flex justify-end items-center w-2/5">
          <Image
            src="/resources_item1.svg"
            alt="information"
            width={200}
            height={200}
          />
          <hr className="w-64 h-1 my-4 bg-HeadingTextGray border-10 rounded md:my-10" />
        </div>
        <div className="mt-12 ml-3 flex flex-col items-start w-2/5">
          <button
            onClick={toggleDetails1}
            className={
              showDetails1
                ? "font-medium text-2xl p-6 border-1 border-FooterButtonYellow w-full bg-MainButtonYellow/10"
                : "font-medium text-2xl p-6 rounded-xl border-1 border-FooterButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"
            }
          >
            <div className="flex justify-evenly">
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">
                {t("resources:RESOURCES_STEP_1_TITLE")}
              </h1>
              {!showDetails1 && (
                <svg
                  id="applicationButtonArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#757575"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
              {showDetails1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#757575"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </div>
          </button>
          <div
            className="flex flex-col items-center px-1 pb-10 p-5 bg-FooterButtonYellow w-full text-LongContentGray"
            style={{
              transition:
                "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
              opacity: showDetails1 ? "1" : "0",
              visibility: showDetails1 ? "visible" : "hidden",
              maxHeight: showDetails1 ? "1000px" : "0",
            }}
          >
            <div className="flex flex-col w-5/6">
              <div className="flex w-full justify-between items-end">
                <h2 className="text-lg font-semibold">
                  {t("resources:RESOURCES_STEP_1_SUBHEADING_1")}
                </h2>
                <button onClick={() => setShowQuizQuestion(true)}>
                  <Image
                    src="/resources_quiz_icon.gif"
                    alt="information"
                    width={40}
                    height={40}
                    className="rounded-md shadow-md"
                  />
                </button>
                <div
                  className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                  style={{
                    transition:
                      "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showQuizQuestion ? "1" : "0",
                    visibility: showQuizQuestion ? "visible" : "hidden",
                  }}
                >
                  <div
                    className="flex flex-col justify-center px-12 py-8 mb-4 text-left font-istok bg-BackgroundWhite shadow-sm shadow-yellow-400 rounded-xl space-y-4 h-1/2"
                    style={{ width: "38%" }}
                  >
                    <div className=" text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow -mt-5 p-2 pb-4">
                      {t("resources:RESOURCES_QUIZ_QUESTION")}
                    </div>

                    <div className="flex flex-col items-center justify-center -mt-2 space-y-3">
                      <button onClick={() => processChoice1()}>
                        <div className="flex justify-between items-center">
                          {!choice1Selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#FFCD29"
                              class="w-9 h-9 mx-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                          {choice1Selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#FFCD29"
                              class="w-9 h-9 mx-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          )}
                          <div className="text-3xl">
                            {t("resources:RESOURCES_QUIZ_CHOICE_1")}
                          </div>
                        </div>
                      </button>
                      <button onClick={() => processChoice2()}>
                        <div className="flex justify-between items-center">
                          {!choice2Selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#FFCD29"
                              class="w-9 h-9 mx-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                          {choice2Selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#FFCD29"
                              class="w-9 h-9 mx-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          )}
                          <div className="text-3xl">
                            {t("resources:RESOURCES_QUIZ_CHOICE_2")}
                          </div>
                        </div>
                      </button>
                      <button onClick={() => processChoice3()}>
                        <div className="flex justify-between items-center">
                          {!choice3Selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#FFCD29"
                              class="w-9 h-9 mx-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                          {choice3Selected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#FFCD29"
                              class="w-9 h-9 mx-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          )}
                          <div className="text-3xl">
                            {t("resources:RESOURCES_QUIZ_CHOICE_1")}
                          </div>
                        </div>
                      </button>
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
                <div
                  className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                  style={{
                    transition:
                      "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showQuizRightAnswer ? "1" : "0",
                    visibility: showQuizRightAnswer ? "visible" : "hidden",
                  }}
                >
                  <div
                    className="flex flex-col justify-between px-12 py-8 mb-4 text-left font-istok bg-BackgroundWhite shadow-sm shadow-yellow-400 rounded-xl space-y-4 h-1/2"
                    style={{ width: "38%" }}
                  >
                    <div className="text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow pb-6 pt-2">
                      {t("resources:RESOURCES_QUIZ_RIGHT_ANSWER_TITLE")}
                    </div>
                    <div className="text-center font-medium text-3xl">
                      {t("resources:RESOURCES_QUIZ_RIGHT_ANSWER_PARA")}
                    </div>
                    <div className="text-center text-HeadingTextGray pb-4">
                      {t("resources:RESOURCES_QUIZ_RIGHT_ANSWER_FOOTER")}:{" "}
                      <Link
                        className="underline"
                        href="https://www.dffh.vic.gov.au/publications/rental-report"
                      >
                        Department of Families, Fairness ad Housing{" "}
                      </Link>
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
                <div
                  className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-80 bg-LongContentGray z-50"
                  style={{
                    transition:
                      "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                    opacity: showQuizWrongAnswer ? "1" : "0",
                    visibility: showQuizWrongAnswer ? "visible" : "hidden",
                  }}
                >
                  <div
                    className="flex flex-col justify-evenly mb-4 text-left font-istok bg-BackgroundWhite shadow-sm shadow-yellow-400 rounded-xl space-y-4 px-12 py-8 h-1/2 object-fit"
                    style={{ width: "38%" }}
                  >
                    <div className="text-center font-bold text-4xl font-istok text-HeadingTextGray border-b-2 border-MainButtonYellow pb-12 pt-2 -mt-2">
                      {t("resources:RESOURCES_QUIZ_WRONG_ANSWER_TITLE")}
                    </div>
                    <div className="text-center font-medium text-3xl">
                      {t("resources:RESOURCES_QUIZ_WRONG_ANSWER_PARA")}
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly w-2/5">
                    <button onClick={() => retryQuiz()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        opacity="90%"
                        stroke="#FFCD29"
                        className="w-20 h-20 hover:opacity-70 transition duration-1000 ease-in-out"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
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
                <li>{t("resources:RESOURCES_STEP_1_PARA_1_STEP_2_PART_1") + " "}
                  <CustomTooltip displayText={t("resources:RESOURCES_STEP_1_PARA_1_STEP_2_PART_2")} description={t("resources:RESOURCES_STEP_1_PARA_1_STEP_2_TOOLTIP")} ></CustomTooltip>{" " + t("resources:RESOURCES_STEP_1_PARA_1_STEP_2_PART_3")}
                </li>
              </ul>
            </div>
            <Link href="/rights" className="font-semibold">
              <div className="m-5 p-5 rounded-3xl bg-ResourceButtonYellow">
                {t("resources:RESOURCES_STEP_1_BRIGHT_YELLOW_BOX")}
              </div>
            </Link>
            <div className="w-5/6">
              <h2 className="text-lg font-semibold">
                {t("resources:RESOURCES_STEP_1_SUBHEADING_2")}
              </h2>
              <ul className="list-disc pl-5">
                <li>{t("resources:RESOURCES_STEP_1_PARA_2_STEP_1")}</li>
                <li>{t("resources:RESOURCES_STEP_1_PARA_2_STEP_2_PART_1") + " "}
                  <CustomTooltip displayText={t("resources:RESOURCES_STEP_1_PARA_2_STEP_2_PART_2")} description={t("resources:RESOURCES_STEP_1_PARA_2_STEP_2_TOOLTIP")} ></CustomTooltip>{" " + t("resources:RESOURCES_STEP_1_PARA_2_STEP_2_PART_3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="flex justify-center items-start">
        <div className="mt-12 mr-3 flex flex-col items-end w-2/5 text-LongContentGray">
          <button
            onClick={toggleDetails2}
            className={
              showDetails2
                ? "font-medium text-2xl p-6 border-1 border-FooterButtonYellow w-full bg-MainButtonYellow/10"
                : "font-medium text-2xl p-6 rounded-xl border-1 border-FooterButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"
            }
          >
            <div className="flex justify-evenly">
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">
                {t("resources:step_2_title")}
              </h1>
              {!showDetails2 && (
                <svg
                  id="applicationButtonArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#757575"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
              {showDetails2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#757575"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </div>
          </button>
          {showDetails2 && (
            <div className="flex flex-col items-center w-full">
              <div className="py-8 px-12 bg-FooterButtonYellow w-full text-LongContentGray">
                <div>
                  <h2 className="text-lg font-semibold">
                    {t("resources:step_2_para_1_subheading")}
                  </h2>
                  <ul className="list-disc pl-5">
                    <li>{t("resources:step_2_para_1_point_1")}</li>
                    <li>{t("resources:step_2_para_1_point_2")}</li>
                    <li>{t("resources:step_2_para_1_point_3")}</li>
                  </ul>
                </div>
                <br />
                <div>
                  <h2 className="text-lg font-semibold">
                    {t("resources:step_2_para_2_subheading")}
                  </h2>
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
                <Link href="/questionnaire">
                  <div className="m-5 p-5 mb-0 -mx-6 rounded-3xl font-semibold bg-ResourceButtonYellow">
                    {t("resources:step_2_bright_yellow_box")}
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-start items-center w-2/5">
          <hr className="w-64 h-1 my-4 bg-HeadingTextGray border-10 rounded md:my-10" />
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
      <div className="flex justify-center items-start">
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
        <div className="mt-12 ml-3 flex flex-col items-start w-2/5">
          <button
            onClick={toggleDetails3}
            className={
              showDetails3
                ? "font-medium text-2xl p-6 border-1 border-FooterButtonYellow w-full bg-MainButtonYellow/10"
                : "font-medium text-2xl p-6 rounded-xl border-1 border-FooterButtonYellow w-full hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 duration-150"
            }
          >
            <div className="flex justify-evenly">
              <h1 className="text-5xl font-bold text-center text-HeadingTextGray">
                {t("resources:step_3_title")}
              </h1>
              {!showDetails3 && (
                <svg
                  id="applicationButtonArrow"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#757575"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
              {showDetails3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#757575"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </div>
          </button>
          {showDetails3 && (
            <div className="flex flex-col items-center">
              <div className="py-8 px-20 pb-10 bg-FooterButtonYellow w-full text-LongContentGray">
                <div>
                  <h2 className="text-lg font-semibold">
                    {t("resources:step_3_para_1_subheading")}
                  </h2>
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
                      <li>{t("resources:step_3_para_1_point_2_item_7")}</li>
                      <li>{t("resources:step_3_para_1_point_2_item_8")}</li>
                      <li>{t("resources:step_3_para_1_point_2_item_9")}</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <br></br>
      <div className="flex flex-col">
        <div className="flex justify-center items-center mt-8">
          <Image
            src="/resources_item4.svg"
            alt="information"
            width={200}
            height={200}
            className="rounded-xl z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default function Resources() {
  const { t } = useTranslation();
  const router = useRouter();

  const [showDetails4, setShowDetails4] = useState(false);

  const toggleDetails4 = () => {
    setShowDetails4(!showDetails4);
  };

  return (
    <>
      <Head>
        <title>{t("resources:RESOURCES_TAB_TITLE")}</title>
        <meta name="description" content="What you need to do." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="font-istok flex flex-col min-h-screen text-black">
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
                {t("resources:RESOURCES_BANNER_HEADING")}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-BackgroundWhite items-center px-6 pb-20 p-8">
          <div className="w-10/12 flex justify-center items-center font-bold text-4xl text-HeadingTextGray">
            <h1>
              {t("resources:RESOURCES_BYLINE")}
            </h1>
            {router.locale === "en" && (<Image className="object-contain ml-8"
              src="/resources_dialog_cloud_english.svg"
              alt="chat"
              width={150}
              height={75}
            />)}
            {router.locale === "hi" && (<Image className="object-contain ml-8"
              src="/resources_dialog_cloud_hindi.svg"
              alt="chat"
              width={150}
              height={75}
            />)}
            {router.locale === "ms" && (<Image className="object-contain ml-8"
              src="/resources_dialog_cloud_malay.svg"
              alt="chat"
              width={150}
              height={75}
            />)}
            {router.locale === "zh" && (<Image className="object-contain ml-8"
              src="/resources_dialog_cloud_chinese.svg"
              alt="chat"
              width={150}
              height={75}
            />)}
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
                className={
                  showDetails4
                    ? "font-medium text-2xl p-6 w-3/5 border-1 border-FooterButtonYellow bg-MainButtonYellow/10"
                    : "w-3/5 font-medium text-2xl p-6 border-1 rounded-lg border-FooterButtonYellow hover:bg-MainButtonYellow/10 hover:shadow-sm hover:shadow-purple-100 transition-all duration-1000"
                }
              >
                <div
                  className="flex justify-between items-center"
                  id="applicationButton"
                >
                  <h1 className="text-5xl font-semibold text-center text-HeadingTextGray">
                    {t("resources:step_4_title")}
                  </h1>
                  {!showDetails4 && (
                    <svg
                      id="applicationButtonArrow"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#757575"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                  {showDetails4 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="#757575"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>
            {showDetails4 && (
              <div className="flex flex-col items-center">
                <div className="p-8 bg-FooterButtonYellow w-3/5">
                  <div>
                    <h2 className="text-3xl pb-4 font-bold text-LongContentGray">
                      {t("resources:step_4_checklist_description")}
                    </h2>
                    <FormGroup className="text-xl">
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_1_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li className="pb-5">
                          {t("resources:step_4_item_1_point_1")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_2_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li className="pb-5">
                          {t("resources:step_4_item_2_point_1")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_3_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li>{t("resources:step_4_item_3_point_1")}</li>
                        <li>{t("resources:step_4_item_3_point_2")}</li>
                        <li className="pb-5">
                          {t("resources:step_4_item_3_point_3")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_4_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li className="pb-5">
                          {t("resources:step_4_item_4_point_1")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_5_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li>{t("resources:step_4_item_5_point_1")}</li>
                        <li className="pb-5">
                          {t("resources:step_4_item_5_point_2")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_6_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li>{t("resources:step_4_item_6_point_1")}</li>
                        <li className="pb-5">
                          {t("resources:step_4_item_6_point_2")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_7_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li className="pb-5">
                          {t("resources:step_4_item_7_point_1")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_8_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li className="pb-5">
                          {t("resources:step_4_item_8_point_1")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_9_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li className="pb-5">
                          {t("resources:step_4_item_9_point_1")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_10_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li>{t("resources:step_4_item_10_point_1")}</li>
                        <li className="pb-5">
                          {t("resources:step_4_item_10_point_2")}
                        </li>
                      </ul>
                      <FormControlLabel
                        control={<Checkbox />}
                        label={t("resources:step_4_item_11_title")}
                        componentsProps={{ typography: { variant: "h6" } }}
                      />
                      <ul className="list-disc pl-14 text-LongContentGray">
                        <li>{t("resources:step_4_item_11_point_1")}</li>
                        <li className="pb-5">
                          {t("resources:step_4_item_11_point_2")}
                        </li>
                      </ul>
                    </FormGroup>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer footer_text={t("common:footer_text")} />
      </main>
    </>
  );
}
