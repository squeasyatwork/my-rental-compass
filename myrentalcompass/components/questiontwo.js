import React, { useState } from "react";
// import Link from "next/link";
import LikertScale from "../components/likertscale";
import Image from "next/image";
import UniversityDropdown from "../components/Dropdown";

const QuestionTwo = ({
  handleNext,
  handlePrevious,
  selectedChoices,
  handleChoice,
  handleUniChoice,
  sendInput,
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

  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };
  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };
  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };
  const toggleDetails4 = () => {
    setShowDetails4(!showDetails4);
  };

  return (
    <div
      id="q2"
      className="flex flex-col items-center justify-between bg-ResourceButtonYellow p-8 font-istok rounded-xl text-sm sm:text-md md:text-lg lg:text-xl"
    >
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <p className="font-bold text-lg">Question 1 / 2</p>
        </div>
        <div className="flex items-start justify-center mb-6">
          <div
            className="flex flex-col items-center justify-center mr-12"
          >
            <h2 className="font-bold text-3xl text-center"> How much do you value<br></br>these liveability aspects?</h2>
            <div className="flex">
              <h2 className=" font-semibold mr-2">( Please rate 1 to 5 )</h2>
              <button onClick={toggleDetails1}>
                <Image
                  src= "/query.gif"
                  alt="query"
                  width={25}
                  height={25}
                />
              </button>
              <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50 overflow-auto"
                style={{
                  transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                  opacity: showDetails1 ? "1" : "0",
                  visibility: showDetails1 ? "visible" : "hidden"
                }}>
                <div className="p-6 mb-4 text-left bg-FooterButtonYellow rounded-xl w-fit h-fit">
                  <div className="flex flex-col justify-center items-center font-bold text-3xl text-HeadingTextGray border-b-2 border-MainButtonYellow">
                    <h2>Feel Confused?</h2>
                  </div>
                  <div className=" flex flex-col justify-center items-center text-lg font-medium mt-4">
                    <p className=" max-w-2xl mb-4 text-xl">
                      1- Not at all<br></br>
                      2- Low importance<br></br>
                      3- Neutral<br></br>
                      4- Important<br></br>
                      5- Very important
                    </p>
                  </div>
                </div>
                <button onClick={toggleDetails1}>
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={80}
                    height={80}
                    className=" hover:opacity-70 transition duration-1000 ease-in-out"
                  />
                </button>
              </div>
            </div>
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
              <div className="flex flex-col justify-center bg-MainButtonYellow/10 rounded-xl p-2">
                <div className="text-xl flex flex-col p-1">
                  <div className="flex justify-start">
                    <h2 className="mr-2">Easy access to public transport</h2>
                    <button onClick={toggleDetails2}>
                      <Image
                        src= "/information-icon.svg"
                        alt="information"
                        width={25}
                        height={25}
                      />
                    </button>
                    <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl w-fit h-fit">
                        <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                          <Image
                              src="/subway-map.png"
                              alt="subway"
                              width={200}
                              height={200}
                          />
                          <h2>Good transport</h2>
                          <h2>connectivity</h2>
                          </div>
                          <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                          <h2 className=" text-justify">
                              In measuring how well connected a suburb is to the public transportation system,
                              we use the open data by Public Transport Victoria (PTV)
                              to count the number of public transport stops that exist in every suburb.
                          </h2>
                          <h2 className=" text-justify mb-2">Source: </h2>
                          <a href="https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2"
                              className=" flex justify-center hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://discover.data.vic.gov.au/dataset/public-transport-a-collection-of-ptv-datasets2</a>
                          </div>
                          <div className="flex justify-between items-center mt-8 px-6">
                          <Image
                              src="/train.png"
                              alt="train"
                              width={100}
                              height={100}
                          />
                          <Image
                              src="/bus.png"
                              alt="bus"
                              width={100}
                              height={100}

                          />
                          <Image
                              src="/tram.png"
                              alt="tram"
                              width={100}
                              height={100}
                          />
                        </div>
                    </div>
                  </div>
                  <LikertScale
                    name="publicTransport"
                    selectedChoice={selectedChoices.publicTransport}
                    handleChoice={(e) =>
                      handleChoice("publicTransport", e.target.value)
                    }
                  />
                </div>
                <div className="text-xl flex flex-col p-1">
                  <div className="flex justify-start">
                    <h2 className="mr-2">Abundance of public open space e.g. gardens, parks</h2>
                    <button>
                      <Image
                        src= "/information-icon.svg"
                        alt="information"
                        width={25}
                        height={25}
                      />
                    </button>
                  </div>  
                  <LikertScale
                    name="openSpace"
                    selectedChoice={selectedChoices.openSpace}
                    handleChoice={(e) => handleChoice("openSpace", e.target.value)}
                  />
                </div>
                <div className="text-xl flex flex-col p-1">
                  <div className="flex justify-start">
                    <h2 className="mr-2">Low crime rate</h2>
                    <button>
                      <Image
                        src= "/information-icon.svg"
                        alt="information"
                        width={25}
                        height={25}
                      />
                    </button>
                  </div>
                  <LikertScale
                    name="lowCrimeRate"
                    selectedChoice={selectedChoices.lowCrimeRate}
                    handleChoice={(e) => handleChoice("lowCrimeRate", e.target.value)}
                  />
                </div>
                <div className="text-xl flex flex-col p-1">
                  <div className="flex justify-start">
                    <h2 className="mr-2">Safe roads</h2>
                    <button>
                      <Image
                        src= "/information-icon.svg"
                        alt="information"
                        width={25}
                        height={25}
                      />
                    </button>
                  </div>
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
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex items-center mb-2">
          <p className="font-bold text-lg">Question 2 / 2</p>
        </div>
        <div className="flex items-start justify-center mb-6">
          <div
            className="flex flex-col items-center justify-center mr-12"
          >
            <h2 className="font-bold text-3xl text-center">
              Do you prefer to live near<br></br>your place of study?
            </h2>
            <Image
              src="/school.svg"
              alt="school"
              width={150}
              height={150}
            />
          </div>
          <div
            className="flex flex-col justify-center font-istok font-normal"
          >
            <div className="flex flex-col justify-center bg-white rounded-xl p-6">
              <h2 className="justify-center items-center text-center text-xl mb-2">
                If you want to live near your university,<br></br>
                please select your university from the list below.
              </h2>
              <select
                className="mt-4 p-2 bg-ResourceButtonYellow border-4"
                onChange={(e) => handleUniChoice(e.target.value)}
              >
                <option value="">No, I do not mind living far</option>
                <option value="Monash University, Clayton">
                  Monash University, Clayton
                </option>
                <option value="Monash University, Caulfield">
                  Monash University, Caulfield
                </option>
                <option value="Monash University, Parkville">
                  Monash University, Parkville
                </option>
                <option value="University of Melbourne, Parkville">
                  University of Melbourne, Parkville
                </option>
                <option value="RMIT University, CBD">RMIT University, CBD</option>
                <option value="RMIT University, Brunswick">
                  RMIT University, Brunswick
                </option>
                <option value="RMIT University, Bundoora">
                  RMIT University, Bundoora
                </option>
                <option value="Deakin University, Burwood">
                  Deakin University, Burwood
                </option>
                <option value="Swinburne University of Technology, Hawthorn">
                  Swinburne University of Technology, Hawthorn
                </option>
                <option value="Swinburne University of Technology, Croydon">
                  Swinburne University of Technology, Croydon
                </option>
                <option value="Swinburne University of Technology, Wantirna">
                  Swinburne University of Technology, Wantirna
                </option>
                <option value="La Trobe University, CBD">
                  La Trobe University, CBD
                </option>
                <option value="La Trobe University, Bundoora">
                  La Trobe University, Bundoora
                </option>
                <option value="Victoria University, CBD">
                  Victoria University, CBD
                </option>
                <option value="Victoria University, Footscray">
                  Victoria University, Footscray
                </option>
                <option value="Victoria University, St Albans">
                  Victoria University, St Albans
                </option>
                <option value="Victoria University, Sunshine">
                  Victoria University, Sunshine
                </option>
                <option value="Victoria University, Werribee">
                  Victoria University, Werribee
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full sm:w-full md:w-4/5 lg:w-full items-center justify-between">
        <div>
          <button
            className="text-xl font-bold call-action-button"
            onClick={handlePrevious}
          >
            Go back
          </button>
        </div>
        <div>
          <button
            className="text-xl font-bold call-action-button"
            onClick={sendInput}
          >
            Show Result
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