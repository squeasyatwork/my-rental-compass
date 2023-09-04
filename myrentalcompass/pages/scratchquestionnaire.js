"use client";

import Head from "next/head";
import Navbar from "./helperpages/navbar.js";
import Image from "next/image.js";
import Link from "next/link";
import React, { useState } from "react";

import Footer from "./helperpages/footer.js";
import ScratchLikertScale from "./helperpages/scratchlikertscale.js";
import ImageLoader from "~/components/ImageLoader.js";

import Router from "next/router";
import { useRouter } from "next/router";

const questions = ["q1", "q2", "q3"];

export default function ScratchQuestionnaire() {

    // Defining variables for slider
    const [rentChoice, setRentChoice] = useState(null);
    const [affordabilityChoice, setAffordabilityChoice] = useState(null);
    const [transportChoice, setTransportChoice] = useState(null);
    const [parkChoice, setParkChoice] = useState(null);
    const [crimeChoice, setCrimeChoice] = useState(null);
    const [roadChoice, setRoadChoice] = useState(null);
    const [uniChoice, setUniChoice] = useState(null);

    const router = Router.useRouter();

    // const handleChoice = (event) => {
    //     if current
    //         const choiceValue = event.target.value;
    //         eval('set' + questionTitle + 'Choice(choiceValue);');
    // };

    // function sendInput() {

    // }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    const handleNext = (event) => {

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else    // MEANING USER CLICKED ON "SHOW RESULT"
        {
            // setRentChoice(document.getElementById("rent-input"));
            router.push({
                pathname: "/scratchrecommendations",
                query: {
                    rentChoice,
                    affordabilityChoice,
                    transportChoice,
                    parkChoice,
                    crimeChoice,
                    roadChoice,
                    uniChoice
                },
            });
        }

    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    const previousQuestionId = currentQuestionIndex > 0 ? questions[currentQuestionIndex - 1] : null;

    const handleChoice = (event) => {
        const choiceValue = event.target.value;
        setSelectedChoice(choiceValue);
    };

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
                    <div id="q1" className={`flex flex-col items-center justify-center bg-BackgroundWhite rounded-xl p-8 ${currentQuestion === "q1" ? "" : "hidden"}`}
                        style={{ width: "80%", height: "60%", zIndex: 2 }}>
                        <div className="flex">
                            <div className="flex flex-col items-center font-Inter font-bold text-4xl mr-6">
                                <h2> We are here to help you!</h2>
                                <br></br>
                                <Image
                                    loader={ImageLoader}
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
                                    id="rent-input"
                                    type="number"
                                    className="border-4 border-MainButtonYellow rounded-lg w-60 h-16 text-2xl text-NavTextGray font-bold text-center"
                                    placeholder="$400"
                                    onChange={(e) => setRentChoice(e.target.value)}
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
                    <div id="q2" className={`flex flex-col items-center justify-center bg-BackgroundWhite rounded-xl mt-12 p-8 ${currentQuestion === "q2" ? "" : "hidden"}`}
                        style={{ width: "80%", height: "75%", zIndex: 2 }}>
                        <div className="flex">
                            <div className="flex flex-col items-center font-Inter font-bold text-3xl mr-6">
                                <h2> How much do you value these</h2>
                                <h2>liveability aspects?</h2>
                                <h2>(Please rate 1 to 5)</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Image
                                    loader={ImageLoader}
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
                                            loader={ImageLoader}
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
                                    <div className="likert-options flex justify-center text-lg font-normal pt-4 pb-4">
                                        <label className={`likert-label ${affordabilityChoice === '1' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="1" className="likert-radio" onClick={(e) => { setAffordabilityChoice(e.target.value) }} />
                                            1
                                        </label>
                                        <label className={`likert-label ${affordabilityChoice === '2' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="2" className="likert-radio" onClick={(e) => { setAffordabilityChoice(e.target.value) }} />
                                            2
                                        </label>
                                        <label className={`likert-label ${affordabilityChoice === '3' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="3" className="likert-radio" onClick={(e) => { setAffordabilityChoice(e.target.value) }} />
                                            3
                                        </label>
                                        <label className={`likert-label ${affordabilityChoice === '4' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="4" className="likert-radio" onClick={(e) => { setAffordabilityChoice(e.target.value) }} />
                                            4
                                        </label>
                                        <label className={`likert-label ${affordabilityChoice === '5' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="5" className="likert-radio" onClick={(e) => { setAffordabilityChoice(e.target.value) }} />
                                            5
                                        </label>
                                    </div>

                                    <div className="text-xl">
                                        <h2>Easy access to public transport</h2>
                                    </div>
                                    <div className="likert-options flex justify-center text-lg font-normal pt-4 pb-4">
                                        <label className={`likert-label ${transportChoice === '1' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="1" className="likert-radio" onClick={(e) => { setTransportChoice(e.target.value) }} />
                                            1
                                        </label>
                                        <label className={`likert-label ${transportChoice === '2' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="2" className="likert-radio" onClick={(e) => { setTransportChoice(e.target.value) }} />
                                            2
                                        </label>
                                        <label className={`likert-label ${transportChoice === '3' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="3" className="likert-radio" onClick={(e) => { setTransportChoice(e.target.value) }} />
                                            3
                                        </label>
                                        <label className={`likert-label ${transportChoice === '4' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="4" className="likert-radio" onClick={(e) => { setTransportChoice(e.target.value) }} />
                                            4
                                        </label>
                                        <label className={`likert-label ${transportChoice === '5' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="5" className="likert-radio" onClick={(e) => { setTransportChoice(e.target.value) }} />
                                            5
                                        </label>
                                    </div>


                                    <div className="text-xl">
                                        <h2>Abundance of public open space e.g. gardens, parks</h2>
                                    </div>
                                    <div className="likert-options flex justify-center text-lg font-normal pt-4 pb-4">
                                        <label className={`likert-label ${parkChoice === '1' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="1" className="likert-radio" onClick={(e) => { setParkChoice(e.target.value) }} />
                                            1
                                        </label>
                                        <label className={`likert-label ${parkChoice === '2' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="2" className="likert-radio" onClick={(e) => { setParkChoice(e.target.value) }} />
                                            2
                                        </label>
                                        <label className={`likert-label ${parkChoice === '3' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="3" className="likert-radio" onClick={(e) => { setParkChoice(e.target.value) }} />
                                            3
                                        </label>
                                        <label className={`likert-label ${parkChoice === '4' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="4" className="likert-radio" onClick={(e) => { setParkChoice(e.target.value) }} />
                                            4
                                        </label>
                                        <label className={`likert-label ${parkChoice === '5' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="5" className="likert-radio" onClick={(e) => { setParkChoice(e.target.value) }} />
                                            5
                                        </label>
                                    </div>


                                    <div className="text-xl">
                                        <h2>Low crime rate</h2>
                                    </div>
                                    <div className="likert-options flex justify-center text-lg font-normal pt-4 pb-4">
                                        <label className={`likert-label ${crimeChoice === '1' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="1" className="likert-radio" onClick={(e) => { setCrimeChoice(e.target.value) }} />
                                            1
                                        </label>
                                        <label className={`likert-label ${crimeChoice === '2' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="2" className="likert-radio" onClick={(e) => { setCrimeChoice(e.target.value) }} />
                                            2
                                        </label>
                                        <label className={`likert-label ${crimeChoice === '3' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="3" className="likert-radio" onClick={(e) => { setCrimeChoice(e.target.value) }} />
                                            3
                                        </label>
                                        <label className={`likert-label ${crimeChoice === '4' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="4" className="likert-radio" onClick={(e) => { setCrimeChoice(e.target.value) }} />
                                            4
                                        </label>
                                        <label className={`likert-label ${crimeChoice === '5' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="5" className="likert-radio" onClick={(e) => { setCrimeChoice(e.target.value) }} />
                                            5
                                        </label>
                                    </div>


                                    <div className="text-xl">
                                        <h2>Safe roads</h2>
                                    </div>
                                    <div className="likert-options flex justify-center text-lg font-normal pt-4 pb-4">
                                        <label className={`likert-label ${roadChoice === '1' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="1" className="likert-radio" onClick={(e) => { setRoadChoice(e.target.value) }} />
                                            1
                                        </label>
                                        <label className={`likert-label ${roadChoice === '2' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="2" className="likert-radio" onClick={(e) => { setRoadChoice(e.target.value) }} />
                                            2
                                        </label>
                                        <label className={`likert-label ${roadChoice === '3' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="3" className="likert-radio" onClick={(e) => { setRoadChoice(e.target.value) }} />
                                            3
                                        </label>
                                        <label className={`likert-label ${roadChoice === '4' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="4" className="likert-radio" onClick={(e) => { setRoadChoice(e.target.value) }} />
                                            4
                                        </label>
                                        <label className={`likert-label ${roadChoice === '5' ? 'selected' : ''}`}>
                                            <input type="radio" name="likertScale" value="5" className="likert-radio" onClick={(e) => { setRoadChoice(e.target.value) }} />
                                            5
                                        </label>
                                    </div>


                                </div>
                                <br></br>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="mr-60">
                                <Link href={`#${questions[previousQuestionId]}`}>
                                    <button
                                        className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                                        onClick={handlePrevious}>
                                        Go back
                                    </button>
                                </Link>
                            </div>
                            <div className="ml-60">
                                <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                                    onClick={handleNext}>
                                    Final question
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="q3" className={`flex flex-col items-center justify-center bg-BackgroundWhite rounded-xl mt-12 p-8 ${currentQuestion === "q3" ? "" : "hidden"}`}
                        style={{ width: "80%", height: "60%", zIndex: 2 }}>
                        <div className="flex">
                            <div className="flex flex-col items-center font-Inter font-bold text-3xl mr-6">
                                <h2 className="text-xl">(OPTIONAL)</h2>
                                <h2> Do you prefer to live near </h2>
                                <h2>your place of study?</h2>
                                <br></br>
                                <Image
                                    src="/school-svgrepo-com.svg"
                                    alt="School"
                                    width={200}
                                    height={200}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col font-Inter bg-white border-ResourceButtonYellow border-4 font-normal text-3xl p-8 ml-6">
                                <div className="flex flex-col items-center text-2xl font-bold">
                                    <h2>If you want to live near your university,</h2>
                                    <h2>please select your university from the list below.</h2>
                                </div>
                                <div className="flex flex-col items-center text-xl pt-4">
                                    <select className="mt-4 p-2 rounded justify-center items-center bg-ResourceButtonYellow border-ResourceButtonYellow border-4" onChange={(e) => setUniChoice(e.target.value)}>
                                        <option value="no-preferences">No, I do not mind living far</option>
                                        <option value="Monash University, Clayton">Monash University, Clayton</option>
                                        <option value="Monash University, Caulfield">Monash University, Caulfield</option>
                                        <option value="Monash University, Parkville">Monash University, Parkville</option>
                                        <option value="RMIT University, CBD">RMIT University, CBD</option>
                                        <option value="RMIT University, Brunswick">RMIT University, Brunswick</option>
                                        <option value="RMIT University, Bundoora">RMIT University, Bundoora</option>
                                        <option value="Deakin University, Burwood">Deakin University, Burwood</option>
                                        <option value="Swinburne University of Technology, Hawthorn">Swinburne University of Technology, Hawthorn</option>
                                        <option value="Swinburne University of Technology, Croydon">Swinburne University of Technology, Croydon</option>
                                        <option value="Swinburne University of Technology, Wantirna">Swinburne University of Technology, Wantirna</option>
                                        <option value="La Trobe University, CBD">La Trobe University, CBD</option>
                                        <option value="La Trobe University, Bundoora">La Trobe University, Bundoora</option>
                                        <option value="Victoria University, CBD">Victoria University, CBD</option>
                                        <option value="Victoria University, Footscray">Victoria University, Footscray</option>
                                        <option value="Victoria University, St Albans">Victoria University, St Albans</option>
                                        <option value="Victoria University, Sunshine">Victoria University, Sunshine</option>
                                        <option value="Victoria University, Werribee">Victoria University, Werribee</option>
                                    </select>
                                </div>
                                <br></br><br></br><br></br>
                                <div className="p-4">
                                    <h2 className="text-2xl font-bold pt-4">Else, you may skip and click to show result below</h2>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="flex">
                            <div className="flex mr-60">
                                <Link href={`#${questions[previousQuestionId]}`}>
                                    <button
                                        className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8"
                                        onClick={handlePrevious}>
                                        Go back
                                    </button>
                                </Link>
                            </div>
                            <div className="ml-60">
                                <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8" onClick={handleNext}>
                                    {" "}
                                    Show result{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}