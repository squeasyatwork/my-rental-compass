import Head from "next/head";
import { useState } from "react";
import Navbar from "./helperpages/navbar.js";
import QuestionOne from "../components/questionone.js";
import QuestionTwo from "../components/questiontwo.js";
import QuestionThree from "../components/questionthree.js";
import Footer from "./helperpages/footer.js";
import Router from "next/router";

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

      <main
        className="font-inter flex flex-col h-screen justify-center"
        style={{
          backgroundImage: 'url("/liveable-cities.jpeg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar activePage="Where to live" />
        <div className="flex flex-grow items-center justify-center text-black">
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
          {currentQuestion === "q3" && (
            <QuestionThree
              handlePrevious={handlePrevious}
              handleUniChoice={handleUniChoice}
              sendInput={sendInput}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Questionnaire;
