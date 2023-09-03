import Head from "next/head";
import { useState } from "react";

import Navbar from "./helperpages/navbar.js";
import QuestionOne from "./helperpages/questionone.js";
import QuestionTwo from "./helperpages/questiontwo.js";
import QuestionThree from "./helperpages/questionthree.js";
import Footer from "./helperpages/footer.js";

function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState("q1");
  
  const [selectedChoices, setSelectedChoices] = useState({
    // For QuestionOne
    someQuestionOne: null,
    // For QuestionTwo
    affordableHousing: null,
    publicTransport: null,
    openSpace: null,
    lowCrimeRate: null,
    safeRoads: null,
  });

  const handleChoice = (question, choice) => {
    setSelectedChoices({
      ...selectedChoices,
      [question]: choice,
    });
  };

  const handleNext = () => {
    if (currentQuestion === "q1") {
      setCurrentQuestion("q2");
    } else if (currentQuestion === "q2") {
      setCurrentQuestion("q3");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === "q2") {
      setCurrentQuestion("q1");
    } else if (currentQuestion === "q3") {
      setCurrentQuestion("q2");
    }
  };

  return (
    <>
      <Head>
        <title>MyRentalCompass | Questionnaire</title>
        <meta name="description" content="Customize your liveability index." />
      </Head>

      <main className="font-inter flex flex-col m-1 h-screen bg-yellow-100">
        <Navbar activePage="Where to live" />

        <div className="flex-grow flex items-center justify-center w-[80%] max-h-[60vh] mx-auto my-auto">
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
            />
          )}
          {currentQuestion === "q3" && <QuestionThree handlePrevious={handlePrevious} />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Questionnaire;