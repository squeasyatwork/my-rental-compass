import React, { useState } from "react";
import Link from "next/link";
import Questionstyle from "./Questionstyleresponsive";
import LikertScale from "../pages/helperpages/likertscale";
import Image from "next/image";

const QuestionTwo = ({
  handleNext,
  handlePrevious,
  selectedChoices,
  handleChoice,
}) => {
  const [error, setError] = useState("");

  const validateForm = () => {
    const allQuestionsAnswered = Object.values(selectedChoices).every(
      (choice) => choice !== null
    );
    if (!allQuestionsAnswered) {
      setError("All questions must have a selection made");
      return false;
    }
    return true;
  };

  const handleClickNext = () => {
    if (validateForm()) {
      handleNext();
    }
  };

  return (
    <div
      id="q2"
      className="flex flex-col items-center justify-between bg-BackgroundWhite rounded-xl p-4 md:p-8 h-full w-full"
    >
      <div className="text-3xl md:text-5xl font-bold pt-4 md:pt-8">
        <h2>How much do you value these liveability aspects?</h2>
        <h2>(Please rate 1 to 5)</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full pb-6 md:pb-10 pt-4 md:pt-12">
        <div className="flex items-center mb-4 md:mb-0 md:mr-6">
          <Image
            src="/forest-nature-park.svg"
            alt="Park"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col text-lg md:text-xl font-normal w-full md:max-w-2xl">
          <div className="flex flex-col font-bold">
            <div className="flex text-md md:text-lg font-normal space-x-2">
              <h2>1-Not at all</h2>
              <h2>2-Low importance</h2>
              <h2>3-Neutral</h2>
              <h2>4-Important</h2>
              <h2>5-Very important</h2>
            </div>
            <div className="text-md md:text-lg mt-4">
              <h2>Affordable housing</h2>
            </div>
            <LikertScale
              name="affordableHousing"
              selectedChoice={selectedChoices.affordableHousing}
              handleChoice={(e) =>
                handleChoice("affordableHousing", e.target.value)
              }
            />
            <div className="text-md md:text-lg">
              <h2>Easy access to public transport</h2>
            </div>
            <LikertScale
              name="publicTransport"
              selectedChoice={selectedChoices.publicTransport}
              handleChoice={(e) =>
                handleChoice("publicTransport", e.target.value)
              }
            />
            <div className="text-md md:text-lg">
              <h2>Abundance of public open space e.g. gardens, parks</h2>
            </div>
            <LikertScale
              name="openSpace"
              selectedChoice={selectedChoices.openSpace}
              handleChoice={(e) => handleChoice("openSpace", e.target.value)}
            />
            <div className="text-md md:text-lg">
              <h2>Low crime rate</h2>
            </div>
            <LikertScale
              name="lowCrimeRate"
              selectedChoice={selectedChoices.lowCrimeRate}
              handleChoice={(e) => handleChoice("lowCrimeRate", e.target.value)}
            />
            <div className="text-md md:text-lg">
              <h2>Safe roads</h2>
            </div>
            <LikertScale
              name="safeRoads"
              selectedChoice={selectedChoices.safeRoads}
              handleChoice={(e) => handleChoice("safeRoads", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full pt-4 md:pt-8">
        <button
          className="call-action-button text-NavTextGray text-xl md:text-2xl font-bold flex items-center justify-center w-40 md:w-56 p-4 md:p-8 mx-2 md:mx-4"
          onClick={handlePrevious}
        >
          Go back
        </button>
        <button
          className="call-action-button text-NavTextGray text-xl md:text-2xl font-bold flex items-center justify-center w-40 md:w-56 p-4 md:p-8 mx-2 md:mx-4 relative"
          onClick={handleClickNext}
        >
          Final question
        </button>
        {error && <div className={`speech-bubble ${error ? "show" : ""}`}>{error}</div>}
      </div>
      <Questionstyle />
    </div>
  );
};

export default QuestionTwo;
