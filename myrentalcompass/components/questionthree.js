import Link from "next/link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const QuestionThree = ({ handlePrevious }) => {
  return (
    <div
      id="q3"
      className="flex flex-col items-center justify-center h-full w-full bg-white rounded-xl px-12"
    >
      <div className="text-5xl font-bold px-16 pt-4">
        <h2>Do you prefer to live near your place of study?</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full pb-10 pt-24">
        <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-6 px-4">
          <Image
            src="/school.svg"
            alt="School"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col text-3xl ml-6 w-full md:max-w-2xl px-4 bg-white border-4 border-MainButtonYellow p-8">
          <div className="flex flex-col items-center text-2xl font-bold">
            <h2>If you want to live near your university,</h2>
            <h2>please select your university from the list below.</h2>
          </div>
          <select className="mt-4 p-2 rounded justify-center items-center bg-ResourceButtonYellow border-ResourceButtonYellow border-4">
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
            <option value="University of Melbourne">
              University of Melbourne
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
      <div className="flex justify-center w-full mb-6 pt-12 relative">
        <button
          className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8 mx-4"
          onClick={handlePrevious}
        >
          Go back
        </button>
        <Link href="/map">
          <button className="call-action-button text-NavTextGray text-2xl font-bold flex items-center justify-center w-56 p-8 mx-4">
            Show result
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuestionThree;