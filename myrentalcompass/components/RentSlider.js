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

export default function RentSlider() {
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
                />
            </Box>
        </div>
    );
}