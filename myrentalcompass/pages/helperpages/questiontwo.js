import React, { useState } from "react";

import Link from "next/link";
import LikertScale from "./likertscale";
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
      className="flex flex-col items-center justify-between bg-BackgroundWhite rounded-xl p-8 h-full w-full"
      // style={{ zIndex: 2}}
    >
      <div className="flex flex-grow">
        <div className="flex flex-col items-center font-Inter font-bold text-3xl mr-6">
          <h2> How much do you value these</h2>
          <h2>liveability aspects?</h2>
          <h2>(Please rate 1 to 5)</h2>
          <br></br>
          <br></br>
          <br></br>
          <Image
            src="/forest-nature-park.svg"
            alt="Park"
            width={250}
            height={250}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col font-Inter font-normal text-3xl ml-6">
          <div className="flex flex-col font-bold">
            <div className=" flex text-lg font-normal space-x-2">
              <Image
                src="/information-icon.svg"
                alt="Hint"
                width={22}
                height={22}
                className="rounded-xl"
              />
              <h2>1-Not at all</h2>
              <h2>2-Low importance</h2>
              <h2>3-Neutral</h2>
              <h2>4-Important</h2>
              <h2>5-Very important</h2>
            </div>
            <div className="text-xl mt-4">
              <h2>Affordable housing</h2>
            </div>
            <LikertScale
              name="affordableHousing"
              selectedChoice={selectedChoices.affordableHousing}
              handleChoice={(e) =>
                handleChoice("affordableHousing", e.target.value)
              }
            />
            <div className="text-xl">
              <h2>Easy access to public transport</h2>
            </div>
            <LikertScale
              name="publicTransport"
              selectedChoice={selectedChoices.publicTransport}
              handleChoice={(e) =>
                handleChoice("publicTransport", e.target.value)
              }
            />
            <div className="text-xl">
              <h2>Abundance of public open space e.g. gradens, parks</h2>
            </div>
            <LikertScale
              name="openSpace"
              selectedChoice={selectedChoices.openSpace}
              handleChoice={(e) => handleChoice("openSpace", e.target.value)}
            />
            <div className="text-xl">
              <h2>Low crime rate</h2>
            </div>
            <LikertScale
              name="lowCrimeRate"
              selectedChoice={selectedChoices.lowCrimeRate}
              handleChoice={(e) => handleChoice("lowCrimeRate", e.target.value)}
            />
            <div className="text-xl">
              <h2>Safe roads</h2>
            </div>
            <LikertScale
              name="safeRoads"
              selectedChoice={selectedChoices.safeRoads}
              handleChoice={(e) => handleChoice("safeRoads", e.target.value)}
            />
          </div>
          <br></br>
        </div>
      </div>
      <div className="flex justify-center w-full mb-8 relative">
        {" "}
        <button
          className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8 mx-4"
          onClick={handlePrevious}
        >
          Go back
        </button>
        <button
          className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8 mx-4 relative" /* Added 'relative' here */
          onClick={handleClickNext}
        >
          Final question
        </button>
        {
          error && (
            <div className={`speech-bubble ${error ? "show" : ""}`}>
              {error}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default QuestionTwo;