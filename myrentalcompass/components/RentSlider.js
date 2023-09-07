import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'A$400',
  },
  {
    value: 25,
    label: 'A$500',
  },
  {
    value: 50,
    label: 'A$600',
  },
  {
    value: 75,
    label: 'A$700',
  },
  {
    value: 100,
    label: 'A$800',
  },

];

function valuetext(value) {
  return `A$${value}`;
}

export default function RentSlider({ handleChoice }) {
  return (
    <div className="ml-6">
      <Box>
        <Slider
          aria-label="Rental amount"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={12.25}
          valueLabelDisplay="off"
          marks={marks}
          sx={{
            '& .MuiSlider-thumb': {
              backgroundColor: '#FFCD29',
              height: 24, // Increase if you want a bigger thumb
              width: 24, // Increase if you want a bigger thumb
            },
            '& .MuiSlider-track': {
              backgroundColor: '#FFCD29',
              height: 6, // Increase if you want a thicker track
            },
            '& .MuiSlider-rail': {
              backgroundColor: 'grey',
              height: 8, // Make sure this is the same as the track height to keep them aligned
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '0%',
                width: '5px', // Width of the line at the start
                height: '8px', // Height of the line at the start
                backgroundColor: '#FFCD29'
              },
            },
          }}
          onChange={handleChoice}
        />
      </Box>
    </div>
  );
}