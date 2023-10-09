import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const QuestionOne = ({ handleNext, selectedChoices, handleChoice }) => {
  const [showWarning, setShowWarning] = useState(false);

  const validateInput = () => {
    const parsedValue = parseInt(selectedChoices.someQuestionOne, 10);
    if (isNaN(parsedValue) || parsedValue < 370 || parsedValue > 2000) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      handleNext();
    }
  };

  return (
    <div
      id="q1"
      className="flex flex-col items-center justify-between bg-ResourceButtonYellow rounded-xl p-8 font-istok"
    >
      <div className="flex justify-center items-start mb-6">
        <div className="flex flex-col justify-between items-center mr-4">
          <h2 className="font-bold text-3xl mb-2">We are here to help you! </h2>
          <Image
            src="/staff.svg"
            alt="Staff"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl">Finding a liveable home at an affordable rent in<br></br>
          Melbourne can be difficult, but we know it is not<br></br>
          impossible.<br></br>
          Using our own AI tool backed by data on Melbourne<br></br>
          rental market, we want to customise your preferences to<br></br>
          find the best place for you to live.</p>
          <br></br>
          <p className="font-bold text-2xl">To start, enter your budget for maximum rent per week</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <Link href="/map">
            <button className="text-sm sm:text-sm md:text-md lg:text-xl font-bold call-action-button">
              Go back
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center" style={{marginRight:"3rem", marginLeft:"3rem"}}>
          <input
            type="text"
            className="text-xl font-bold p-4 rounded-xl text-center"
            placeholder="$500"
            value={selectedChoices.someQuestionOne || ""}
            onChange={(e) => handleChoice("someQuestionOne", e.target.value)}
          />
        </div>
        <div>
          <button
            className="text-sm sm:text-sm md:text-md lg:text-xl font-bold call-action-button"
            onClick={validateInput}
          >
            Start
          </button>
        </div>
      </div>
      {showWarning && (
        <p className=" mt-2" style={{color: "red"}}>Please enter a value between 370-2000.</p>
      )}
    </div>
  );
};

export default QuestionOne;
