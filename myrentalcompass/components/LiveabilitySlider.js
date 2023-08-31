import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: '1',
    },
    {
        value: 25,
        label: '2',
    },
    {
        value: 50,
        label: '3',
    },
    {
        value: 75,
        label: '4',
    },
    {
        value: 100,
        label: '5',
    }
];

function valuetext(value) {
    return `A$${value}`;
}

function InternalLiveabilitySlider({ criterion }) {
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
                />
            </Box>
        </div>
    );
}

export default function LiveabilitySlider({ criterion }) {
    return (
        <>
            <center>
                <div className='text-xl font-normal text-center'>{criterion}</div>
            </center>
            <div><InternalLiveabilitySlider></InternalLiveabilitySlider></div>
        </>

    )
}