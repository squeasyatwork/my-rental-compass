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
      className="flex flex-col items-center justify-center bg-white rounded-xl"
      style={{ width: '70%', padding: '2rem'}}
    >
      <div className="flex flex-grow">
        <div className="flex flex-col items-center justify-center text-4xl font-bold mb-4 md:mb-0 md:mr-6" style={{ width: '40%', padding:'1rem'}}>
          <h2 style={{fontSize:"1.8rem"}}> How much do you value </h2>
          <h2 style={{fontSize:"1.8rem"}}> these liveability aspects? </h2>
          <h2 style={{fontSize:"1.4rem"}}>( Please rate 1 to 5 )</h2>
          <div className=" justify-center">
            <Image
              src="/forest-nature-park.svg"
              alt="Park"
              width={250}
              height={250}
              className="rounded-xl "
            />
          </div>
        </div>
        <div className="flex flex-col font-Inter font-normal text-3xl ml-6" style={{width: "60%", padding: "1rem"}}>
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
        </div>
      </div>
      <div className="flex justify-center w-full mb-8 relative" style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '1rem'
        }}>
        <button
          className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center p-8 mx-4"
          style={{ width: '20%'}}
          onClick={handlePrevious}
        >
          Go back
        </button>
        <button
          className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center p-8 mx-4 relative" /* Added 'relative' here */
          style={{ width: '30%'}}
          onClick={handleClickNext}
        >
          Final question
        </button>
      </div>
      {
        error && (
          <div className={`speech-bubble ${error ? "show" : ""}`} style={{color: "red"}}>
            {error}
          </div>
        )
      }
    </div>
  );
};

export default QuestionTwo;