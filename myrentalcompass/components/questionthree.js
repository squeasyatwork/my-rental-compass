import Link from "next/link";
import Image from "next/image";
import Questionstyle from "./Questionstyleresponsive";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const QuestionThree = ({ handlePrevious }) => {
  return (
    <div
      id="q3"
      className="flex flex-col items-center justify-center h-full w-full bg-white rounded-xl px-4 md:px-12"
    >
      <div className="text-4xl md:text-5xl font-bold pt-4 md:pt-8 px-4">
        <h2>Do you prefer to live near your place of study?</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full pb-10 pt-12 md:pt-24">
        <div className="flex items-center mb-4 md:mb-0 md:mr-6">
          <Image
            src="/school.svg"
            alt="School"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col text-xl md:text-3xl w-full md:max-w-2xl bg-white border-4 border-MainButtonYellow p-4 md:p-8">
          <div className="flex flex-col items-center text-lg md:text-2xl font-bold">
            <h2>If you want to live near your university,</h2>
            <h2>please select your university from the list below.</h2>
          </div>
          <Autocomplete
            className="mt-4 md:mt-8"
            options={[
              "Monash University, Clayton",
              "Monash University, Caulfield",
              "Monash University, Parkville",
              "University of Melbourne",
              "University of Melbourne, Parkville",
              "RMIT University, CBD",
              "RMIT University, Brunswick",
              "RMIT University, Bundoora",
              "Deakin University, Burwood",
              "Swinburne University of Technology, Hawthorn",
              "Swinburne University of Technology, Croydon",
              "Swinburne University of Technology, Wantirna",
              "La Trobe University, CBD",
              "La Trobe University, Bundoora",
              "Victoria University, CBD",
              "Victoria University, Footscray",
              "Victoria University, St Albans",
              "Victoria University, Sunshine",
              "Victoria University, Werribee",
            ]}
            renderInput={(params) => <TextField {...params} label="Select University" variant="outlined" />}
          />
        </div>
      </div>
      <div className="flex justify-center w-full pt-8 md:pt-12">
        <button
          className="call-action-button text-NavTextGray text-xl md:text-2xl font-bold flex items-center justify-center w-44 md:w-56 p-4 md:p-8 mx-2 md:mx-4"
          onClick={handlePrevious}
        >
          Go back
        </button>
        <Link href="/map">
          <button className="call-action-button text-NavTextGray text-xl md:text-2xl font-bold flex items-center justify-center w-44 md:w-56 p-4 md:p-8 mx-2 md:mx-4">
            Show result
          </button>
        </Link>
      </div>
      <Questionstyle />
    </div>
  );
};

export default QuestionThree;