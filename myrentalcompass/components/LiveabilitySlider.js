import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Least",
  },
  {
    value: 25,
    label: "",
  },
  {
    value: 50,
    label: "",
  },
  {
    value: 75,
    label: "",
  },
  {
    value: 100,
    label: "Most",
  },
];

function valuetext(value) {
  return `A$${value}`;
}

function InternalLiveabilitySlider({ criterion, selectedChoice, handleChoice }) {
  c
  return (
    <div className="mb-4 ml-6">
      <Box>
        <Slider
          aria-label={criterion}
          defaultValue={50}
          getAriaValueText={valuetext}
          step={25}
          valueLabelDisplay="off"
          marks={marks}
          sx={{
            "& .MuiSlider-thumb": {
              backgroundColor: "#FFCD29",
              height: 24, // Increase if you want a bigger thumb
              width: 24, // Increase if you want a bigger thumb
            },
            "& .MuiSlider-track": {
              backgroundColor: "#FFCD29",
              height: 6, // Increase if you want a thicker track
            },
            "& .MuiSlider-rail": {
              backgroundColor: "grey",
              height: 8, // Make sure this is the same as the track height to keep them aligned
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "0%",
                width: "5px", // Width of the line at the start
                height: "8px", // Height of the line at the start
                backgroundColor: "#FFCD29",
              },
            },
            "& .MuiSlider-markLabe": {
              fontSize: '0.5rem',
            },
          }}
          onChange={handleChoice}
        />
      </Box>
    </div>
  );
}

export default function LiveabilitySlider({ criterion, selectedChoice, handleChoice }) {
  return (
    <>
      <center>
        <div className="text-sm font-semibold text-left">{criterion}</div>
      </center>
      <div>
        <InternalLiveabilitySlider criterion={criterion} selectedChoice={selectedChoice} handleChoice={handleChoice}></InternalLiveabilitySlider>
      </div>
    </>
  );
}
