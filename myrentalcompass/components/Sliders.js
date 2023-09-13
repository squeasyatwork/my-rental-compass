import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

// Constants for the Rent Slider
const rentMarks = [
  { value: 0, label: "A$400" },
  { value: 25, label: "A$500" },
  { value: 50, label: "A$600" },
  { value: 75, label: "A$700" },
  { value: 100, label: "A$800" },
];

function rentValueText(value) {
  return `A$${value}`;
}

// Rent Slider
export const RentSlider = ({ handleChoice, defaultArg = 0 }) => {
  const defaultValue = ((defaultArg - 400) / 100) * 25; // Transform the actual rent value to slider value

  const handleRentChange = (event, value) => {
    const rentValue = 400 + value * 4; // Transform the slider value to actual rent value
    handleChoice(event, rentValue);
  };

  return (
    <div className="ml-6">
      <Typography gutterBottom>Rent</Typography>
      <Slider
        aria-label="Rental amount"
        defaultValue={defaultValue}
        getAriaValueText={rentValueText}
        step={12.25}
        valueLabelDisplay="auto"
        marks={rentMarks}
        sx={{
          "& .MuiSlider-thumb, & .MuiSlider-track": {
            backgroundColor: "#FFCD29",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
          },
          "& .MuiSlider-track": {
            height: 6,
          },
          "& .MuiSlider-markLabel": {
            fontSize: 12,
          },
          "& .MuiSlider-rail": {
            backgroundColor: "grey",
            height: 8,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "0%",
              width: "5px",
              height: "8px",
              backgroundColor: "#FFCD29",
            },
          },
        }}
        onChange={handleRentChange}
      />
    </div>
  );
};

// Liveability Sliders
const criteria = ["affordability", "transport", "park", "crime", "road"];

export const LiveabilitySliders = ({ handleSliderChange, inputValues }) => {
  return criteria.map((criterion) => (
    <SingleLiveabilitySlider
      key={criterion}
      criterion={criterion}
      handleChoice={handleSliderChange(criterion)}
      defaultArg={inputValues[criterion] || 50}
    />
  ));
};

const SingleLiveabilitySlider = ({ criterion, handleChoice, defaultArg }) => {
  const valueLabelFormat = (value) => {
    const labels = ["1", "2", "3", "4", "5"];
    return labels[value - 1];
  };

  const sliderMarks = {
    affordability: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
    transport: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
    park: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
    crime: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
    road: [
      { value: 1, label: "1" },
      { value: 2, label: "2" },
      { value: 3, label: "3" },
      { value: 4, label: "4" },
      { value: 5, label: "5" },
    ],
  };

  return (
    <div className="ml-6">
      <Typography gutterBottom>
        {criterion.charAt(0).toUpperCase() + criterion.slice(1)}
      </Typography>
      <Slider
        defaultValue={defaultArg}
        onChange={handleChoice}
        aria-labelledby={`${criterion}-slider`}
        aria-valuetext={valueLabelFormat(defaultArg)}
        step={1}
        marks={sliderMarks[criterion]}
        min={1}
        max={5}
        valueLabelDisplay="off"
        valueLabelFormat={valueLabelFormat}
        sx={{
          "& .MuiSlider-thumb, & .MuiSlider-track": {
            backgroundColor: "#FFCD29",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
          },
          "& .MuiSlider-markLabel": {
            fontSize: 14,
          },
          "& .MuiSlider-track": {
            height: 6,
          },
          "& .MuiSlider-rail": {
            backgroundColor: "grey",
            height: 8,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "0%",
              width: "5px",
              height: "8px",
              backgroundColor: "#FFCD29",
            },
          },
        }}
      />
    </div>
  );
};
