import Link from "next/link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const QuestionThree = ({ handlePrevious, handleUniChoice, sendInput }) => {
  return (
    <div
      id="q3"
      className="flex flex-col items-center justify-center bg-white rounded-xl p-8"
      style={{ width: "auto", height: "auto", padding: '2rem' }}
    >
      <div
        className="flex md:flex-row items-center justify-center w-full pt-24"
        style={{ marginBottom: "2rem" }}
      >
        <div
          className="flex flex-col font-bold justify-center items-center"
          style={{ width: "100%" }}
        >
          <div className="text-4xl px-16 text-center pt-4">
            <h2 style={{ fontSize: "1.8rem" }}>Do you prefer to live</h2>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              near your place of study?
            </h2>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-6 px-4">
            <Image
              src="/school.svg"
              alt="School"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col text-xl items-center ml-6 w-full md:max-w-2xl px-4 bg-white border-4 border-MainButtonYellow p-8">
          <div className="flex flex-col text-lg sm:text-lg md:text-xl lg:text-2xl">
            <h2>If you want to live near your university,</h2>
            <h2>please select your university from the list below.</h2>
          </div>
          <br></br>
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
            {/* SKIPPING UNIMELB BECAUSE DATABASE DOESN'T HAVE ITS DATA. */}
            {/* <option value="University of Melbourne">
              University of Melbourne
            </option> */}
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
          <br></br>
          <div className="flex flex-col items-center text-xl sm:text-xl md:text-xl lg:text-2xl font-bold">
            <h2>Else, you may skip and click show result below</h2>
          </div>
        </div>
      </div>
      <div className="flex w-4/5 sm:w-full md:4/5 items-center justify-between" >
        <button
          className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button"
          onClick={handlePrevious}
        >
          Go back
        </button>
        <button
          className="text-xl md:text-2xl lg:text-2xl font-bold call-action-button"
          onClick={sendInput}
        >
          Show result
        </button>
      </div>
    </div>
  );
};

export default QuestionThree;