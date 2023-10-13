import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const QuestionOne = ({ handleNext, selectedChoices, handleChoice, q1Corpus }) => {
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
        <div className="flex flex-col justify-between items-center ">
          <h2 className="font-bold text-3xl mb-2"> {q1Corpus.heading} </h2>
          <Image
            src="/staff.svg"
            alt="Staff"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl"> {q1Corpus.line_1} <br></br>
            {q1Corpus.line_2}<br></br>
            {q1Corpus.line_3}<br></br>
            {q1Corpus.line_4}<br></br>
            {q1Corpus.line_5}<br></br>
            {q1Corpus.line_6}</p>
          <br></br>
          <p className="font-bold text-2xl">{q1Corpus.line_7}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <Link href="/map">
            <button className="text-sm sm:text-sm md:text-md lg:text-xl font-bold call-action-button">
              {q1Corpus.go_back_button}
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center" style={{ marginRight: "3rem", marginLeft: "3rem" }}>
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
            className="text-sm sm:text-sm md:text-md lg:text-xl font-bold call-action-button "
            onClick={validateInput}
          >
            {q1Corpus.start_button}
          </button>
        </div>
      </div>
      {showWarning && (
        <p className=" mt-2" style={{ color: "red" }}>{q1Corpus.input_validation_message}</p>
      )}
    </div>
  );
};

export default QuestionOne;