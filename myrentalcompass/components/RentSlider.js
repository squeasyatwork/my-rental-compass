import React from 'react';
import Slider from '@mui/material/Slider';

const marks = [
  { value: 0, label: 'A$400' },
  { value: 25, label: 'A$500' },
  { value: 50, label: 'A$600' },
  { value: 75, label: 'A$700' },
  { value: 100, label: 'A$800' },
];

function valuetext(value) {
  return `A$${value}`;
}

export default function RentSlider({ handleChoice, defaultArg = 0 }) {
  const defaultValue = defaultArg === 0 ? 50 : 12.25 * (defaultArg - 400) / 50;
  
  return (
    <div className="ml-6">
      <Slider
        aria-label="Rental amount"
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        step={12.25}
        valueLabelDisplay="off"
        marks={marks}
        sx={{
          '& .MuiSlider-thumb, & .MuiSlider-track': {
            backgroundColor: '#FFCD29',
          },
          '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
          },
          '& .MuiSlider-track': {
            height: 6,
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'grey',
            height: 8,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '0%',
              width: '5px',
              height: '8px',
              backgroundColor: '#FFCD29',
            },
          },
        }}
        onChange={handleChoice}
      />
    </div>
  );
}
