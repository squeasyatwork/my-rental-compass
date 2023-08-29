import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Image from "next/image.js";
import Link from "next/link";
import { useState } from "react";

import Footer from "./helperpages/footer.js";
import LikertScale from "./helperpages/likertscale.js";

const questions = ["q1", "q2", "q3"];

function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const previousQuestionId = currentQuestionIndex > 0 ? questions[currentQuestionIndex - 1] : null;

  /*const likertLabels = document.querySelectorAll(".likert-label");

  likertLabels.forEach(label =>{
    label.addEventListener("click", () => {
      likertLabels.forEach(otherlabel => 
        otherlabel.classList.remove("selected"));
    });
    label.classList.add("selected");
  })*/

  return (
    <>
      <Head>
        <title>MyRentalCompass | Questionnaire</title>
        <meta
          name="description"
          content="Questionnaire to find best suburbs."
        />
      </Head>

      <main className="font-inter flex flex-col h-screen">
        <div style={{ position: "fixed", width: "100%", zIndex: 100 }}>
          <Navbar activePage="Home" />
        </div>

        <section className="flex-grow w-full flex items-center justify-center text-NavTextGray" 
        style={{
          backgroundImage: "url('/liveable-cities.jpeg')",
          backgroundSize: "cover",
        }}>
          <div id="q1" className={`flex flex-col items-center justify-center bg-BackgroundWhite rounded-xl p-8 ${
            currentQuestion === "q1" ? "" : "hidden"}`} 
            style={{width: "80rem", height: "60vh", zIndex: 2}}>
            <div className="flex">
              <div className="flex flex-col items-center font-Inter font-bold text-4xl mr-6">
                <h2> We are here to help you!</h2>
                <br></br>
                <Image
                  src="/questionnaire_person.svg"
                  alt="Staff"
                  width={250}
                  height={250}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col font-Inter font-normal text-3xl ml-6">
                <div className=" max-w-2xl">
                  <h2>
                    Finding a liveable home at an affordable rent in Melbourne can
                    be difficult, but we know it is not impossible.{" "}
                  </h2>
                  <br></br>
                  <h2>
                    Using our own AI tool backed by huge data on Melbourne rental
                    market, we want to customise our recommendation for the place
                    to live.
                  </h2>
                  <br></br>
                  <h2 className="font-bold">
                    To start, enter your budget for maximum rent per week
                  </h2>
                </div>
                <br></br>
                
              </div>
            </div>
            <div className="flex">
              <div className="mr-52">
                <Link href="/">
                  <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8">
                    {" "}
                    Go back{" "}
                  </button>
                </Link>
              </div>
              <div className="mr-6">
                <input
                  type="text"
                  className="border-4 border-MainButtonYellow rounded-lg w-60 h-16 text-2xl text-NavTextGray font-bold text-center"
                  placeholder="$400"
                />
              </div> 
              <div className="ml-6">  
                <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                  onClick={handleNext}>
                  Start
                </button>
              </div>
            </div>
          </div>
          <div id="q2" className={`flex flex-col items-center justify-center bg-BackgroundWhite rounded-xl mt-12 p-8 ${
            currentQuestion === "q2" ? "" : "hidden"}`} 
            style={{width: "80rem", height: "75vh", zIndex: 2}}>
            <div className="flex">
              <div className="flex flex-col items-center font-Inter font-bold text-3xl mr-6">
                <h2> How much do you value these</h2>
                <h2>liveability aspects?</h2>
                <h2>(Please rate 1 to 5)</h2>
                <br></br>
                <br></br>
                <br></br>
                <Image
                  src="/forest-nature-park.svg"
                  alt="Staff"
                  width={250}
                  height={250}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col font-Inter font-normal text-3xl ml-6">
                <div className="flex flex-col font-bold">
                  <div className=" flex text-lg space-x-2">
                    <h2>(1-Not at all</h2>
                    <h2>2-Low importance</h2>
                    <h2>3-Neutral</h2>
                    <h2>4-Important</h2>
                    <h2>5-Very important)</h2>
                  </div>
                  <div className="text-xl mt-4">
                    <h2>Affordable housing</h2>
                  </div>
                  <LikertScale />
                  <div className="text-xl">
                    <h2>Easy access to public transport</h2>
                  </div>
                  <LikertScale />
                  <div className="text-xl">
                    <h2>Abundance of public open space e.g. gradens, parks</h2>
                  </div>
                  <LikertScale />
                  <div className="text-xl">
                    <h2>Low crime rate</h2>
                  </div>
                  <LikertScale />
                  <div className="text-xl">
                    <h2>Safe roads</h2>
                  </div>
                  <LikertScale />
                </div>
                <br></br>
                
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mr-6">
                <Link href={`#${questions[previousQuestionId]}`}>
                  <button 
                    className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                    onClick={handlePrevious}>
                    Go back
                  </button>
                </Link>
              </div>
              <div className="ml-6">
                <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                  onClick={handleNext}>
                  Final question
                </button>
              </div>
            </div>
          </div>
          <div id="q3" className={`flex items-center justify-center bg-BackgroundWhite rounded-xl p-8 ${
            currentQuestion === "q3" ? "" : "hidden"}`} 
            style={{width: "80rem", height: "60vh", zIndex: 2}}>
            <div className="flex flex-col items-center font-Inter font-bold text-4xl mr-6">
              <h2>Do you have any</h2>
              <h2>preferred area(s) in</h2>
              <h2>Melbourne?</h2>
              <br></br>
              <Image
                src="/districts-melbourne.jpg"
                alt="disctricts"
                width={200}
                height={200}
                className="rounded-xl"
              />
              <br></br><br></br>
              <Link href={`#${questions[previousQuestionId]}`}>
                <button 
                  className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                  onClick={handlePrevious}>
                  Go back
                </button>
              </Link>
            </div>
            <div className="flex flex-col font-Inter font-normal text-3xl ml-6">
              <div className=" max-w-2xl">
                <h2>Finding a liveable home at an affordable rent in Melbourne can be difficult, but we know it is not impossible. </h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="likert-options flex flex-col justify-center text-3xl font-bold">
                  <label className="likert-label">
                    <input type="radio" name="likertScale" value="1" className="likert-radio" />
                    Strongly Disagree
                  </label>
                  <label className="likert-label">
                    <input type="radio" name="likertScale" value="2" className="likert-radio" />
                    Disagree
                  </label>
                  <label className="likert-label">
                    <input type="radio" name="likertScale" value="3" className="likert-radio" />
                    Neutral
                  </label>
                  <label className="likert-label">
                    <input type="radio" name="likertScale" value="4" className="likert-radio" />
                    Agree
                  </label>
                  <label className="likert-label">
                    <input type="radio" name="likertScale" value="5" className="likert-radio" />
                    Strongly Agree
                  </label>
                </div>
                <br></br>
                <Link href="/map">
                  <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8 ml-6">
                    {" "}
                    Show result{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Questionnaire;