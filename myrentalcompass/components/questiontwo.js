import React, { useState } from "react";
// import Link from "next/link";
import LikertScale from "../components/likertscale";
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
      className="flex flex-col items-center justify-between bg-ResourceButtonYellow p-8 font-istok rounded-xl text-sm sm:text-md md:text-lg lg:text-xl"
    >
      <div className="flex items-start justify-center mb-6">
        <div
          className="flex flex-col items-center justify-center mr-12"
        >
          <h2 className="font-bold text-3xl text-center"> How much do you value<br></br>these liveability aspects?</h2>
          <h2 className=" font-semibold">( Please rate 1 to 5 )</h2>
          <Image
            src="/forest-nature-park.svg"
            alt="Park"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
        <div
          className="flex flex-col justify-center font-istok font-normal text-2xl"
        >
          <div className="flex flex-col">
            <div className=" flex font-normal text-base sm:text-base md:text-base lg:text-xl">
              <Image
                src="/information-icon.svg"
                alt="Hint"
                width={22}
                height={22}
                className="rounded-xl"
              />
              <div className="flex justify-between">
                <h2>1-Not at all</h2>
                <h2>2-Low importance</h2>
                <h2>3-Neutral</h2>
                <h2>4-Important</h2>
                <h2>5-Very important</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-xl flex flex-col p-1">
                <h2>Easy access to public transport</h2>
                <LikertScale
                  name="publicTransport"
                  selectedChoice={selectedChoices.publicTransport}
                  handleChoice={(e) =>
                    handleChoice("publicTransport", e.target.value)
                  }
                />
              </div>
              
              <div className="text-xl flex flex-col p-1">
                <h2>Abundance of public open space e.g. gradens, parks</h2>
                <LikertScale
                  name="openSpace"
                  selectedChoice={selectedChoices.openSpace}
                  handleChoice={(e) => handleChoice("openSpace", e.target.value)}
                />
              </div>
              <div className="text-xl flex flex-col p-1">
                <h2>Low crime rate</h2>
                <LikertScale
                  name="lowCrimeRate"
                  selectedChoice={selectedChoices.lowCrimeRate}
                  handleChoice={(e) => handleChoice("lowCrimeRate", e.target.value)}
                />
              </div>
              <div className="text-xl flex flex-col p-1">
                <h2>Safe roads</h2>
                <LikertScale
                  name="safeRoads"
                  selectedChoice={selectedChoices.safeRoads}
                  handleChoice={(e) => handleChoice("safeRoads", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full sm:w-full md:w-4/5 lg:w-full items-center justify-between">
        <div>
          <button
            className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button"
            onClick={handlePrevious}
          >
            Go back
          </button>
        </div>
        <div>
          <button
            className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button"
            onClick={handleClickNext}
          >
            Final question
          </button>
        </div>
      </div>
      {error && (
        <div
          className={`speech-bubble ${error ? "show" : ""}`}
          style={{ color: "red" }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default QuestionTwo;