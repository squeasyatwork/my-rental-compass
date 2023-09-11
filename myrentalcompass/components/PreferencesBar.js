import * as React from "react";
import RentSlider from "~/components/RentSlider";
import LiveabilitySlider from "~/components/LiveabilitySlider";
import AutocompleteSearch from "./AutocompleteSearch";
import Box from "@mui/material/Box";

export default function PreferencesBar({
  handleChoice,
  sendInput,
  defaultSliderValues,
}) {
  let optionsList = [
    { label: "University of Melbourne, Parkville" },
    { label: "Monash University, Clayton" },
    { label: "Monash University, Caulfield" },
    { label: "Monash University, Parkville" },
    { label: "RMIT University, CBD" },
    { label: "RMIT University, Brunswick" },
    { label: "RMIT University, Bundoora" },
    { label: "Deakin University, Burwood" },
    { label: "Swinburne University of Technology, Hawthorn" },
    { label: "Swinburne University of Technology, Croydon" },
    { label: "Swinburne University of Technology, Wantirna" },
    { label: "La Trobe University, CBD" },
    { label: "La Trobe University, Bundoora" },
    { label: "Victoria University, CBD" },
    { label: "Victoria University, Footscray" },
    { label: "Victoria University, St Albans" },
    { label: "Victoria University, Sunshine" },
    { label: "Victoria University, Werribee" },
  ];

  const hasDefaults = Object.keys(defaultSliderValues).length > 0;

  return (
    <Box flexDirection="column" justifyContent="left" alignItems="left">
      <center>
        <div className="text-2xl font-bold text-left pt-2">
          Update Selections
        </div>
      </center>
      <Box mt={4}>
        <center>
          <div className="text-md font-bold text-left">
            Maximum Rent Per Week
          </div>
        </center>
        <RentSlider
          handleChoice={(e) =>
            handleChoice(
              "someQuestionOne",
              400 + 50 * parseInt(e.target.value / 12.25)
            )
          }
          defaultArg={hasDefaults ? defaultSliderValues.rent : undefined}
        />
        <center className="mt-4">
          <div className="text-md font-bold text-left">
            Liveability Factors Ranking
          </div>
        </center>
      </Box>

      {/* You can map through an array to generate the sliders and avoid repetitive code */}
      {[
        {
          criterion: "Affordable housing",
          key: "affordability",
          questionKey: "affordableHousing",
        },
        {
          criterion: "Public transport access",
          key: "transport",
          questionKey: "publicTransport",
        },
        {
          criterion: "Parks and greenery",
          key: "park",
          questionKey: "openSpace",
        },
        { criterion: "Crime rate", key: "crime", questionKey: "lowCrimeRate" },
        { criterion: "Road safety", key: "road", questionKey: "safeRoads" },
      ].map(({ criterion, key, questionKey }) => (
        <LiveabilitySlider
          key={key}
          criterion={criterion}
          handleChoice={(e) =>
            handleChoice(questionKey, parseInt(e.target.value / 25) + 1)
          }
          defaultArg={hasDefaults ? defaultSliderValues[key] : undefined}
        />
      ))}

      <center className="mt-4">
        <div className="text-md font-bold text-left mb-6">
          University Preference
        </div>
      </center>
      <Box className="ml-6 mb-6">
        <AutocompleteSearch
          optionsList={optionsList}
          handleChoice={handleChoice}
          defaultArg={hasDefaults ? defaultSliderValues.university : undefined}
        />
      </Box>
      <Box className="mt-auto flex items-center justify-center pb-4">
        <button className="call-action-button rounded-full" onClick={sendInput}>
          Update results
        </button>
      </Box>
    </Box>
  );
}
