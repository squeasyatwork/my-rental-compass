import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./helperpages/navbar.js";
import QuestionOne from "../components/questionone.js";
import QuestionTwo from "../components/questiontwo.js";
import Footer from "./helperpages/footer.js";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";

function Questionnaire() {
  const router = Router.useRouter();

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
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleCard = () => {
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
    } else if (currentQuestion === "q3") {
      setCurrentQuestion("q2");
    }
  };

  function sendInput() {
    // Constructing query based on the format you provided
    const formattedQuery = {
      rent: selectedChoices.someQuestionOne,
      transport: selectedChoices.publicTransport,
      park: selectedChoices.openSpace,
      crime: selectedChoices.lowCrimeRate,
      road: selectedChoices.safeRoads,
      university: university,
    };

    // Push to the recommendations page with formatted query
    router.push({
      pathname: "/recommendations",
      query: formattedQuery,
    });
  }

  return (
    <>
      <Head>
        <title>MyRentalCompass | Questionnaire</title>
        <meta name="description" content="Customize your liveability index." />
      </Head>

      <Navbar activePage="Where to live" className="z-10"/>
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
              />
            )}
          </div>
        </div>
        {(
          <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-99 overflow-auto"
          style={{
            transition: "opacity 0.5s ease-in-out, visibility 0.4s ease-in-out, max-height 0.5s ease-in-out",
            opacity: showCard ? "1" : "0",
            visibility: showCard ? "visible" : "hidden"
          }}>
            <div className="flex flex-col justify-center items-center p-8 mb-4 text-center bg-PopupPurple rounded-xl">
              <Image
                src= "/secure-shield.png"
                alt="shield"
                width={120}
                height={120}
                className="mb-2"
              />
              <div className="flex flex-col justify-center items-center">
                <h2 className=" font-bold text-3xl">We value your privacy</h2>
                <br></br>
                <p className=" text-lg">
                  At My Rental Compass, we respect your privacy.<br></br> 
                  We do not collect or store your responses on our website,<br></br>
                  nor do we track your activities.
                </p>
              </div>
              <br></br>
              <button className="text-2xl font-bold call-action-button mb-2" onClick={toggleCard}>
                Okay, got it!
              </button>
              <Link href="/privacy"> 
                <button>
                  <p className="underline hover:text-ButtonHoverYellow">Learn more</p>
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Questionnaire;
