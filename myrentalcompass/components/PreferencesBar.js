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
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function PreferencesBar({ selectedChoices, handleChoice, handleUniChoice, sendInput }) {
    let optionsList = [{ label: "Monash University" }]
    return (
        <Box flexDirection="column" justifyContent="left" alignItems="left">

            <center>
                <div className='text-2xl font-bold text-left pt-2'>Update Selections</div>
            </center>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <div className='text-md font-bold text-left'>Maximum Rent Per Week</div>
            </center>
            <div><RentSlider handleChoice={(e) =>
                handleChoice("someQuestionOne", e.target.value)
            }></RentSlider></div>
            <br></br>
            <br></br>
            <center>
                <div className='text-md font-bold text-left'>Liveability Factors Ranking</div>
            </center>
            <br></br>
            <div><LiveabilitySlider criterion={"Affordable housing"} selectedChoice={selectedChoices.affordableHousing}
                handleChoice={(e) =>
                    handleChoice("affordableHousing", e.target.value)}></LiveabilitySlider></div>

            <div><LiveabilitySlider criterion={"Public transport access"} selectedChoice={selectedChoices.publicTransport}
                handleChoice={(e) =>
                    handleChoice("publicTransport", e.target.value)}></LiveabilitySlider></div>

            <div><LiveabilitySlider criterion={"Parks and greenery"} selectedChoice={selectedChoices.openSpace}
                handleChoice={(e) => handleChoice("openSpace", e.target.value)}></LiveabilitySlider></div>

            <div><LiveabilitySlider criterion={"Crime rate"} selectedChoice={selectedChoices.lowCrimeRate}
                handleChoice={(e) => handleChoice("lowCrimeRate", e.target.value)}></LiveabilitySlider></div>

            <div><LiveabilitySlider criterion={"Road safety"} selectedChoice={selectedChoices.safeRoads}
                handleChoice={(e) => handleChoice("safeRoads", e.target.value)}></LiveabilitySlider></div>
            <br></br>
            <br></br>
            <center>
                <div className='text-md font-bold text-left mb-6'>University Preference</div>
            </center>
            <div className="ml-6 mb-6">
                <AutocompleteSearch optionsList={optionsList} handleUniChoice={handleUniChoice}></AutocompleteSearch>
            </div>
            <br></br>
            <div className="mt-auto flex items-center justify-center pb-4">
                <button className="call-action-button rounded-full" onClick={sendInput}>
                    Update results
                </button>
            </div>
        </Box >
    );
}