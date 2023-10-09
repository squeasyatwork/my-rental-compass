import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "./helperpages/navbar.js";
import QuestionOne from "../components/questionone.js";
import QuestionTwo from "../components/questiontwo.js";
import Footer from "./helperpages/footer.js";
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
    }, 1000);
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
        className="font-inter flex flex-col min-h-screen justify-center"
        style={{
          backgroundImage: 'url("/liveable-cities.jpeg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center text-black">
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
        {showCard && (
          <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-99 overflow-auto"
          style={{
            transition: "opacity 2s ease-in-out, visibility 0.4s ease-in-out, max-height 2s ease-in-out",
          }}>
            <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl px-6">
              <div className="flex flex-col justify-center items-center font-bold text-4xl text-HeadingTextGray">
                <h2>Something doesn&apos;t feel quite right?</h2>
              </div>
              <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                <h2 className=" max-w-2xl mb-4 text-base">
                  If you think that your landlord or rental provider (like a real estate agency)
                  is not fulfilling their requirements, or is violating your rights, there are several places you can contact for help:
                </h2>
                <h2 className="font-bold">
                  Consumer Affairs Victoria
                </h2>
                <h2 className=" max-w-2xl mb-4 text-base">
                  If you have questions about renting agreements, bonds, rent increases or repairs, if you are being evicted<br></br>
                  <span className=" font-semibold underline">1300 55 81 81 </span><br></br>
                  <span className=" font-semibold underline">
                    <a href="https://www.consumer.vic.gov.au/" class=" underline">consumer.vic.gov.au</a>
                  </span>
                </h2>
                <h2 className="font-bold">
                  Victorian Civil and Tribunal Authority (VCAT)
                </h2>
                <h2 className=" max-w-2xl mb-4 text-base">
                  To apply for a hearing about a renting dispute (e.g not providing repairs, excessive rental increases)<br></br>
                  <span className=" font-semibold underline">1300 55 81 81 </span><br></br>
                  <span className=" font-semibold underline">
                    <a href="https://www.vcat.vic.gov.au/case-types/residential-tenancies" class=" underline">vcat.vic.giv.au/renting</a>
                  </span>
                </h2>
                <h2 className="font-bold">
                  Residential Tenancies Bond Authority (RTBA)
                </h2>
                <h2 className=" max-w-2xl mb-4 text-base">
                  To look up your bond, transfer a bond or arrange a bond refund<br></br>
                  <span className=" font-semibold underline">1300 137 164 </span><br></br>
                  <span className=" font-semibold underline">
                    <a href="https://rentalbonds.vic.gov.au/" class=" underline">rentalbonds.vic.giv.au</a>
                  </span>
                </h2>
              </div>
            </div>
            <button onClick={toggleCard}>
              <Image
                src="/close.svg"
                alt="close"
                width={80}
                height={80}
                className=" hover:opacity-70 transition duration-1000 ease-in-out"
              />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Questionnaire;
