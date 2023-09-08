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

export default function PreferencesBar({ handleChoice, university, handleUniChoice, sendInput, defaultSliderValues }) {
    let optionsList = [{ label: "Monash University" },
    { label: "University of Melbourne, Parkville" },
    { label: "Monash University, Clayton" },
    { label: "Monash University, Caulfield" },
    { label: "Monash University, Parkville" },
    { label: "RMIT University, CBD" },
    { label: "RMIT University, Brunswick" },
    { label: "RMIT University, Bundoora" },
    { label: "Deakin University, Burwood" },
    { label: "Swinburne University of Technology, Hawthorn" },
    { label: "Swinburne University of Technology, Croydon" },
    { label: "Swinburne University of Technology, Wantirna" },
    { label: "La Trobe University, CBD" },
    { label: "La Trobe University, Bundoora" },
    { label: "Victoria University, CBD" },
    { label: "Victoria University, Footscray" },
    { label: "Victoria University, St Albans" },
    { label: "Victoria University, Sunshine" },
    { label: "Victoria University, Werribee" }]
    if (Object.keys(defaultSliderValues).length > 0) {
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
                    handleChoice("someQuestionOne", 400 + (50 * parseInt(e.target.value / 12.25)))
                } defaultArg={defaultSliderValues.rent}></RentSlider></div>
                <br></br>
                <br></br>
                <center>
                    <div className='text-md font-bold text-left'>Liveability Factors Ranking</div>
                </center>
                <br></br>
                <div><LiveabilitySlider criterion={"Affordable housing"}
                    handleChoice={(e) =>
                        handleChoice("affordableHousing", parseInt(e.target.value / 25) + 1)} defaultArg={defaultSliderValues.affordability}></LiveabilitySlider></div>

                <div><LiveabilitySlider criterion={"Public transport access"}
                    handleChoice={(e) =>
                        handleChoice("publicTransport", parseInt(e.target.value / 25) + 1)} defaultArg={defaultSliderValues.transport}></LiveabilitySlider></div >

                <div><LiveabilitySlider criterion={"Parks and greenery"}
                    handleChoice={(e) => handleChoice("openSpace", parseInt(e.target.value / 25) + 1)} defaultArg={defaultSliderValues.park}></LiveabilitySlider></div >

                <div><LiveabilitySlider criterion={"Crime rate"}
                    handleChoice={(e) => handleChoice("lowCrimeRate", parseInt(e.target.value / 25) + 1)} defaultArg={defaultSliderValues.crime}></LiveabilitySlider></div >


                <div><LiveabilitySlider criterion={"Road safety"} se
                    handleChoice={(e) => handleChoice("safeRoads", parseInt(e.target.value / 25) + 1)} defaultArg={defaultSliderValues.road}></LiveabilitySlider></div>
                <br></br>
                <br></br>
                <center>
                    <div className='text-md font-bold text-left mb-6'>University Preference</div>
                </center>
                <div className="ml-6 mb-6">
                    <AutocompleteSearch optionsList={optionsList} university={university} handleUniChoice={handleUniChoice} defaultArg={defaultSliderValues.university}></AutocompleteSearch>
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
    else {
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
                    handleChoice("someQuestionOne", 400 + (50 * parseInt(e.target.value / 12.25)))
                }></RentSlider></div>
                <br></br>
                <br></br>
                <center>
                    <div className='text-md font-bold text-left'>Liveability Factors Ranking</div>
                </center>
                <br></br>
                <div><LiveabilitySlider criterion={"Affordable housing"}
                    handleChoice={(e) =>
                        handleChoice("affordableHousing", parseInt(e.target.value / 25) + 1)}></LiveabilitySlider></div>

                <div><LiveabilitySlider criterion={"Public transport access"}
                    handleChoice={(e) =>
                        handleChoice("publicTransport", parseInt(e.target.value / 25) + 1)}></LiveabilitySlider></div >

                <div><LiveabilitySlider criterion={"Parks and greenery"}
                    handleChoice={(e) => handleChoice("openSpace", parseInt(e.target.value / 25) + 1)}></LiveabilitySlider></div >

                <div><LiveabilitySlider criterion={"Crime rate"}
                    handleChoice={(e) => handleChoice("lowCrimeRate", parseInt(e.target.value / 25) + 1)}></LiveabilitySlider></div >

                <div><LiveabilitySlider criterion={"Road safety"} se
                    handleChoice={(e) => handleChoice("safeRoads", parseInt(e.target.value / 25) + 1)}></LiveabilitySlider></div>
                <br></br>
                <br></br>
                <center>
                    <div className='text-md font-bold text-left mb-6'>University Preference</div>
                </center>
                <div className="ml-6 mb-6">
                    <AutocompleteSearch optionsList={optionsList} university={university} handleUniChoice={handleUniChoice}></AutocompleteSearch>
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
}