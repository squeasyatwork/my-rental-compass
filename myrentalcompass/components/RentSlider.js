import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 10,
    label: 'A$100',
  },
  {
    value: 20,
    label: '',
  },
  {
    value: 30,
    label: '200',
  },
  {
    value: 40,
    label: '',
  },
  {
    value: 50,
    label: '300',
  },
  {
    value: 60,
    label: '',
  },
  {
    value: 70,
    label: '400',
  },
  {
    value: 80,
    label: '',
  },
  {
    value: 90,
    label: '500',
  },
  {
    value: 100,
    label: '',
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
          step={10}
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