import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./helperpages/navbar.js";
import QuestionOne from "../components/questionone.js";
import QuestionTwo from "../components/questiontwo.js";
import DataContext from "../components/DataContext.js";
import Footer from "./helperpages/footer.js";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "~/next-i18next.config";
import { useRouter } from "next/router.js";

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(
        locale,
        ["common", "dict3", "questionnaire_hint_text"],
        i18nextConfig
      )),
    },
  };
}

function Questionnaire() {
  const router = useRouter();
  const { t } = useTranslation();
  const { setData } = useContext(DataContext); // Get the setData method from context

  const [currentQuestion, setCurrentQuestion] = useState("q1");
  const [selectedChoices, setSelectedChoices] = useState({
    someQuestionOne: null,
    publicTransport: null,
    openSpace: null,
    lowCrimeRate: null,
    safeRoads: null,
  });
  const [university, setUniversity] = useState(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const hasShownPrivacyPopup = sessionStorage.getItem("hasShownPrivacyPopup");

    if (!hasShownPrivacyPopup) {
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  const toggleCard = () => {
    sessionStorage.setItem("hasShownPrivacyPopup", "true");
    setShowCard(!showCard);
  };

  const handleChoice = (question, choice) => {
    setSelectedChoices({
      ...selectedChoices,
      [question]: choice,
    });
  };

  const handleUniChoice = (choice) => {
    setUniversity(choice);
  };

  const handleNext = () => {
    if (currentQuestion === "q1") {
      setCurrentQuestion("q2");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === "q2") {
      setCurrentQuestion("q1");
    }
  };

  function sendInput() {
    const formattedQuery = {
      rent: selectedChoices.someQuestionOne,
      transport: selectedChoices.publicTransport,
      park: selectedChoices.openSpace,
      crime: selectedChoices.lowCrimeRate,
      road: selectedChoices.safeRoads,
      university: university,
    };

    // console.log("Data being set to DataContext:", formattedQuery); // Added this line

    setData(formattedQuery); // Save the data to context

    // Navigate to the recommendations page
    router.push({ pathname: "/recommendations", query: formattedQuery });
  }

  let q1Contents = {
    heading: t("dict3:questionnaire_q1corpus_heading"),
    line_1: t("dict3:questionnaire_q1corpus_line_1"),
    line_2: t("dict3:questionnaire_q1corpus_line_2"),
    line_3: t("dict3:questionnaire_q1corpus_line_3"),
    line_4: t("dict3:questionnaire_q1corpus_line_4"),
    line_5: t("dict3:questionnaire_q1corpus_line_5"),
    line_6: t("dict3:questionnaire_q1corpus_line_6"),
    line_7: t("dict3:questionnaire_q1corpus_line_7"),
    go_back_button: t("dict3:questionnaire_q1corpus_go_back_button"),
    start_button: t("dict3:questionnaire_q1corpus_start_button"),
    input_validation_message: t(("dict3:questionnaire_q1corpus_input_validation_message"))
  }

  let q2Contents = {
    question_1_label: t("dict3:questionnaire_q2corpus_question_1_label"),
    question_1_line_1: t("dict3:questionnaire_q2corpus_question_1_line_1"),
    question_1_line_2: t("dict3:questionnaire_q2corpus_question_1_line_2"),
    question_1_line_3: t("dict3:questionnaire_q2corpus_question_1_line_3"),

    question_1_modal_heading: t("dict3:questionnaire_q2corpus_question_1_modal_heading"),
    question_1_modal_line_1: t("dict3:questionnaire_q2corpus_question_1_modal_line_1"),
    question_1_modal_line_2: t("dict3:questionnaire_q2corpus_question_1_modal_line_2"),
    question_1_modal_line_3: t("dict3:questionnaire_q2corpus_question_1_modal_line_3"),
    question_1_modal_line_4: t("dict3:questionnaire_q2corpus_question_1_modal_line_4"),
    question_1_modal_line_5: t("dict3:questionnaire_q2corpus_question_1_modal_line_5"),

    click_text: t("questionnaire_hint_text:click_text"),
    to_learn_more_text: t("questionnaire_hint_text:to_learn_more_text"),
    likert_1: t("dict3:questionnaire_q2corpus_likert_1"),
    likert_1_modal_heading_line_1: t("dict3:questionnaire_q2corpus_likert_1_modal_heading_line_1"),
    likert_1_modal_heading_line_2: t("dict3:questionnaire_q2corpus_likert_1_modal_heading_line_2"),
    likert_1_modal_description: t("dict3:questionnaire_q2corpus_likert_1_modal_description"),
    likert_1_modal_source_line: t("dict3:questionnaire_q2corpus_likert_1_modal_source_line"),

    likert_2: t("dict3:questionnaire_q2corpus_likert_2"),
    likert_2_modal_heading_line_1: t("dict3:questionnaire_q2corpus_likert_2_modal_heading_line_1"),
    likert_2_modal_heading_line_2: t("dict3:questionnaire_q2corpus_likert_2_modal_heading_line_2"),
    likert_2_modal_description: t("dict3:questionnaire_q2corpus_likert_2_modal_description"),

    likert_3: t("dict3:questionnaire_q2corpus_likert_3"),
    likert_3_modal_description: t("dict3:questionnaire_q2corpus_likert_3_modal_description"),

    likert_4: t("dict3:questionnaire_q2corpus_likert_4"),
    likert_4_modal_description: t("dict3:questionnaire_q2corpus_likert_4_modal_description"),

    question_2_label: t("dict3:questionnaire_q2corpus_question_2_label"),
    question_2_line_1: t("dict3:questionnaire_q2corpus_question_2_line_1"),
    question_2_line_2: t("dict3:questionnaire_q2corpus_question_2_line_2"),

    university_line_1: t("dict3:questionnaire_q2corpus_university_line_1"),
    university_line_2: t("dict3:questionnaire_q2corpus_university_line_2"),
    university_default_option: t("dict3:questionnaire_q2corpus_university_default_option"),

    go_back_button: t("dict3:questionnaire_q2corpus_go_back_button"),
    show_result_button: t("dict3:questionnaire_q2corpus_show_result_button"),

    input_validation_message: t(("dict3:questionnaire_q2corpus_input_validation_message"))
  }

  return (
    <>
      <Head>
        <title>{"MyRentalCompass | " + t("dict3:questionnaire_tab_title")}</title>
        <meta name="description" content="Customize your liveability index." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navbar activePage="Where to live" className="z-10" />
      <main
        className="font-inter flex flex-col min-h-screen justify-center font-istok text-black"
        style={{
          backgroundImage: 'url("/liveable-cities.jpeg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center ">
            {currentQuestion === "q1" && (
              <QuestionOne
                handleNext={handleNext}
                selectedChoices={selectedChoices}
                handleChoice={handleChoice}
                q1Corpus={q1Contents}
              />
            )}
            {currentQuestion === "q2" && (
              <QuestionTwo
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                selectedChoices={selectedChoices}
                handleChoice={handleChoice}
                handleUniChoice={handleUniChoice}
                sendInput={sendInput}
                q2Corpus={q2Contents}
              />
            )}
          </div>
        </div>
        {
          <div
            className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-99 overflow-auto"
            style={{
              transition:
                "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, max-height 0.3s ease-in-out",
              opacity: showCard ? "1" : "0",
              visibility: showCard ? "visible" : "hidden",
            }}
          >
            <div className="flex flex-col justify-center items-center p-8 mb-4 text-center bg-PopupPurple rounded-xl">
              <Image
                src="/secure-shield.png"
                alt="shield"
                width={120}
                height={120}
                className="mb-2"
              />
              <div className="flex flex-col justify-center items-center">
                <h2 className=" font-bold text-3xl">{t("dict3:questionnaire_privacy_heading")}</h2>
                <br></br>
                <p className=" text-lg">
                  {t("dict3:questionnaire_privacy_description_line_1")}
                  <br></br>{t("dict3:questionnaire_privacy_description_line_2")}
                  <br></br>{t("dict3:questionnaire_privacy_description_line_3")}
                </p>
              </div>
              <br></br>
              <button className="text-2xl font-bold call-action-button mb-2" onClick={toggleCard}>
                {t("dict3:questionnaire_privacy_okay_button")}
              </button>
              <Link href="/privacy">
                <button>
                  <p className="underline hover:text-ButtonHoverYellow">{t("dict3:questionnaire_more_button")}</p>
                </button>
              </Link>
            </div>
          </div>
        }
      </main>
      <Footer />
    </>
  );
}

export default Questionnaire;