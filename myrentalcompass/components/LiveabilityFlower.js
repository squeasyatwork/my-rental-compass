import Image from "next/image";
import { useState } from "react";

function LiveabilityFlower() {
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
    <div className="flex flex-col justify-center items-center px-6 py-2 w-full">
        <div className="relative flex flex-col justify-center items-center" style={{ top: "12vh" }}>
            <button onClick={toggleDetails1}>
            <Image
                src="/1-transport.svg"
                alt="transport"
                width={300}
                height={300}
                className=" hover:scale-110 transition duration-1000 ease-in-out"
            />
            </button>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
            style={{
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                opacity: showDetails1 ? "1" : "0",
                visibility: showDetails1 ? "visible" : "hidden"
            }}>
            <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                style={{ width: "36%" }}>
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
        <div className="flex justify-center items-center">
            <div className="relative justify-center items-center" style={{ left: "12vh" }}>
            <button onClick={toggleDetails2}>
                <Image
                src="/4-crime.svg"
                alt="crime"
                width={300}
                height={300}
                className=" hover:scale-110 transition duration-1000 ease-in-out"
                />
            </button>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                style={{
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                opacity: showDetails2 ? "1" : "0",
                visibility: showDetails2 ? "visible" : "hidden"
                }}>
                <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                style={{ width: "36%" }}>
                <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                    <Image
                    src="/secure-shield.png"
                    alt="secure"
                    width={200}
                    height={200}
                    />
                    <h2>Low crime rate</h2>
                </div>
                <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                    <h2 className=" text-justify">
                    We measure liveability based on the crime rate recorded in a particular suburb.
                    We used crime statistics data that has been recorded in the year 2019.
                    </h2>
                    <h2 className=" justify-start text-justify mb-2">Source: </h2>
                    <a href="https://www.crimestatistics.vic.gov.au/crime-statistics/latest-victorian-crime-data/download-data"
                    className=" mb-2 hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://www.crimestatistics.vic.gov.au/crime-statistics/latest-victorian-crime-data/download-data</a>
                    <a href="https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023"
                    className=" hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 2. https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2023</a>
                </div>
                <div className="flex justify-around items-center mt-8 px-6">
                    <Image
                    src="/police-station.png"
                    alt="police"
                    width={100}
                    height={100}
                    />
                    <Image
                    src="/couple.png"
                    alt="couple"
                    width={100}
                    height={100}
                    />
                </div>
                </div>
                <button onClick={toggleDetails2}>
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
            <div className=" z-10">
            <Image
                src="/centre-liveability.svg"
                alt="centre-liveability"
                width={350}
                height={350}
            />
            </div>
            <div className="relative flex flex-col justify-center items-center" style={{ right: "12vh" }}>
            <button onClick={toggleDetails3}>
                <Image
                src="/2-roads.svg"
                alt="roads"
                width={300}
                height={300}
                className=" hover:scale-110 transition duration-1000 ease-in-out"
                />
            </button>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                style={{
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                opacity: showDetails3 ? "1" : "0",
                visibility: showDetails3 ? "visible" : "hidden"
                }}>
                <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                style={{ width: "36%" }}>
                <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                    <Image
                    src="/t-kreuzung.png"
                    alt="t-kreuzung"
                    width={200}
                    height={200}
                    />
                    <h2>Safe roads</h2>
                </div>
                <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                    <h2 className=" text-justify">
                    We count the number of road crashes and traffic incidents that have been recorded in each suburbs in the year 2022 and 2023.
                    </h2>
                    <h2 className=" justify-start text-justify mb-2">Source: </h2>
                    <a href="https://discover.data.vic.gov.au/dataset/crash-stats-data-extract"
                    className=" hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://discover.data.vic.gov.au/dataset/crash-stats-data-extract</a>
                </div>
                <div className="flex justify-between items-center mt-8 px-6">
                    <Image
                    src="/speed-limit.png"
                    alt="speed"
                    width={100}
                    height={100}
                    />
                    <Image
                    src="/guard.png"
                    alt="guard"
                    width={100}
                    height={100}
                    />
                    <Image
                    src="/car.png"
                    alt="car"
                    width={100}
                    height={100}
                    />
                </div>
                </div>
                <button onClick={toggleDetails3}>
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
        </div>
        <div className="flex justify-center items-center">
            <div className="relative flex flex-col justify-center items-center" style={{ top: "-12vh" }}>
            <button onClick={toggleDetails4}>
                <Image
                src="/3-openspace.svg"
                alt="openspace"
                width={300}
                height={300}
                className=" hover:scale-110 transition duration-1000 ease-in-out"
                />
            </button>
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-opacity-50 bg-LongContentGray backdrop-blur-lg z-50"
                style={{
                transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, max-height 0.2s ease-in-out",
                opacity: showDetails4 ? "1" : "0",
                visibility: showDetails4 ? "visible" : "hidden"
                }}>
                <div className="p-4 mb-4 text-left bg-FooterButtonYellow rounded-xl"
                style={{ width: "36%" }}>
                <div className="flex flex-col justify-center items-center font-bold text-3xl px-6">
                    <Image
                    src="/nature.png"
                    alt="nature"
                    width={200}
                    height={200}
                    />
                    <h2>Abundance of</h2>
                    <h2>open spaces</h2>
                </div>
                <div className=" flex flex-col justify-center px-6 text-lg font-medium mt-4">
                    <h2 className=" text-justify">
                    We count the number of parks and gardens that exists within the geographical boundary of each suburb in 2023.
                    </h2>
                    <h2 className=" justify-start text-justify mb-2">Source: </h2>
                    <a href="https://discover.data.vic.gov.au/dataset/open-space"
                    className=" mb-2 hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 1. https://discover.data.vic.gov.au/dataset/open-space</a>
                    <a href="https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundarie"
                    className=" hover:underline hover:text-ButtonHoverYellow text-xs sm:text-sm md:text-normal lg:text-lg"> 2. https://data.gov.au/data/dataset/vic-suburb-locality-boundaries-geoscape-administrative-boundarie</a>
                </div>
                <div className="flex justify-between items-center mt-8 px-6">
                    <Image
                    src="/playground.png"
                    alt="playground"
                    width={100}
                    height={100}
                    />
                    <Image
                    src="/running.png"
                    alt="running"
                    width={100}
                    height={100}
                    />
                    <Image
                    src="/park.png"
                    alt="park"
                    width={100}
                    height={100}
                    />
                </div>
                </div>
                <button onClick={toggleDetails4}>
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
        </div>
    </div>
    )
}
export default LiveabilityFlower;