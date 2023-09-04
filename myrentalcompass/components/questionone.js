import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Padding } from "@mui/icons-material";

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
      className="flex flex-col items-center justify-center bg-white rounded-xl "
      style={{ width: '70%', padding: '2rem'}}
    >
      <div className="flex md:flex-row items-center justify-center mb-6" >
        <div className="flex flex-col items-center text-4xl font-bold mb-4 md:mb-0 md:mr-6" style={{ width: '40%'}} >
          <h2 style={{fontSize:"1.8rem", marginBottom:"1rem"}}>We are here to help you!</h2>
          <div>
            <Image
              src="/questionnaire_person.svg"
              alt="Staff"
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-3xl ml-6 w-full md:max-w-2xl" style={{ width: '60%'}}>
          <h2>
            Finding a liveable home at an affordable rent in Melbourne can be
            difficult, but we know it is not impossible.
          </h2>
          <h2>
            Using our own AI tool backed by huge data on Melbourne rental
            market, we want to customise our recommendation for the place to
            live.
          </h2>
          <br></br><br></br>
          <h2 className="font-bold">
            To start, enter your budget for maximum rent per week
          </h2>
        </div>
      </div>
      <div className="flex w-4/5 mt-24 h-1/5" style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '1rem'
      }}
      >
        <div className="mx-8 w-2/4">
          <Link href="/">
            <button className="text-2xl font-bold call-action-button">
              Go back
            </button>
          </Link>
        </div>
        <div className="mx-8 w-2/4"> 
          <input
            type="text"
            className="text-2xl font-bold p-4 rounded text-center"
            placeholder="$400"
            value={selectedChoices.someQuestionOne || ""}
            onChange={(e) => handleChoice("someQuestionOne", e.target.value)}
            style={{width: '8rem', border: '2px solid #FFCD29'}}
          />
        </div>
        <div className="mx-8">
          <button
            className="text-2xl font-bold call-action-button"
            onClick={validateInput}
          >
            Start
          </button>
        </div>
      </div>
      {showWarning && (
          <p style={{color: "red"}}>
            Please enter a value between 0-2000.
          </p>
        )}
    </div>
  );
};

export default QuestionOne;