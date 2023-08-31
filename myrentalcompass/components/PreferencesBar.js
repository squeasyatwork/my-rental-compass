import * as React from 'react';
import Link from "next/link";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import RentSlider from '~/components/RentSlider';
import LiveabilitySlider from '~/components/LiveabilitySlider';
import AutocompleteSearch from './AutocompleteSearch';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function PreferencesBar() {
    let optionsList = [{ label: "Monash University" }]
    return (
        <Box flexDirection="column" justifyContent="center" alignItems="center">

            <center>
                <div className='text-3xl font-medium text-center'>Explore your options</div>
            </center>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <div className='text-2xl font-medium text-center'>Weekly Rent</div>
            </center>
            <div><RentSlider></RentSlider></div>
            <br></br>
            <br></br>
            <center>
                <div className='text-2xl font-medium text-center'>Liveability Factors</div>
            </center>
            <br></br>
            <div><LiveabilitySlider criterion={"Affordable housing"}></LiveabilitySlider></div>
            <div><LiveabilitySlider criterion={"Public transport access"}></LiveabilitySlider></div>
            <div><LiveabilitySlider criterion={"Parks and greenery"}></LiveabilitySlider></div>
            <div><LiveabilitySlider criterion={"Crime safety"}></LiveabilitySlider></div>
            <div><LiveabilitySlider criterion={"Road safety"}></LiveabilitySlider></div>
            <br></br>
            <br></br>
            <center>
                <div className='text-2xl font-medium text-center mb-6'>I want to live near this university </div>
            </center>
            <div className="ml-6 mb-6">
                <AutocompleteSearch optionsList={optionsList}></AutocompleteSearch>
            </div>
            <br></br>
            <div className="mt-auto flex items-center justify-center pb-4">
                <Link href={'#'}>
                    <button className="call-action-button rounded-full">
                        Update results
                    </button>
                </Link>
            </div>
        </Box >
    );
}