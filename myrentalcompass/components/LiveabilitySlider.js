import React from "react";
import Slider from "@mui/material/Slider";

const marks = [
  { value: 0, label: "1" },
  { value: 25, label: "2" },
  { value: 50, label: "3" },
  { value: 75, label: "4" },
  { value: 100, label: "5" },
];

function valuetext(value) {
  return `A$${value}`;
}

function InternalLiveabilitySlider({
  criterion,
  handleChoice,
  defaultArg = 0,
}) {
  return (
    <div className="mb-4 ml-6">
      <Slider
        aria-label={criterion}
        defaultValue={defaultArg === 0 ? 50 : (defaultArg - 1) * 25}
        getAriaValueText={valuetext}
        step={25}
        valueLabelDisplay="off"
        marks={marks}
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
          "& .MuiSlider-markLabe": {
            fontSize: "0.5rem",
          },
        }}
        onChange={handleChoice}
      />
    </div>
  );
}

export default function LiveabilitySlider({
  defaultArg,
  criterion,
  handleChoice,
}) {
  return (
    <center>
      <div className="text-sm font-semibold text-left">{criterion}</div>
      <InternalLiveabilitySlider
        defaultArg={defaultArg}
        criterion={criterion}
        handleChoice={handleChoice}
      />
    </center>
  );
}
