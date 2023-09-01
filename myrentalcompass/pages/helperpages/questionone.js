import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const QuestionOne = ({ handleNext, selectedChoices, handleChoice }) => {
  const [showWarning, setShowWarning] = useState(false);

  const validateInput = () => {
    const parsedValue = parseInt(selectedChoices.someQuestionOne, 10);
    if (isNaN(parsedValue) || parsedValue < 0 || parsedValue > 2000) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      handleNext();
    }
  };

  return (
    <div
      id="q1"
      className="flex flex-col items-center justify-center bg-white rounded-xl px-24 w-full h-full"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex flex-col items-center text-4xl font-bold mb-4 md:mb-0 md:mr-6">
          <h2>We are here to help you!</h2>
          <div className="w-[250px] h-[250px] relative">
            <Image
              src="/questionnaire_person.svg"
              alt="Staff"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col text-3xl ml-6 w-full md:max-w-2xl">
          <h2>
            Finding a liveable home at an affordable rent in Melbourne can be
            difficult, but we know it is not impossible.
          </h2>
          <h2>
            Using our own AI tool backed by huge data on Melbourne rental
            market, we want to customise our recommendation for the place to
            live.
          </h2>
          <h2 className="font-bold">
            To start, enter your budget for maximum rent per week
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-24">
        <div className="mx-4">
          <Link href="/">
            <button className="text-2xl font-bold call-action-button">
              Go back
            </button>
          </Link>
        </div>
        <div className="mx-4 px-12 relative"> 
          <input
            type="text"
            className="text-2xl font-bold p-4 rounded border-4 border-yellow-500 w-60 text-center"
            placeholder="$400"
            value={selectedChoices.someQuestionOne || ""}
            onChange={(e) => handleChoice("someQuestionOne", e.target.value)}
          />
          {showWarning && (
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-red-600 text-white p-2 rounded">
              Please enter a value between 0-2000.
            </p>
          )}
        </div>
        <div className="mx-4">
          <button
            className="text-2xl font-bold call-action-button"
            onClick={validateInput}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;
