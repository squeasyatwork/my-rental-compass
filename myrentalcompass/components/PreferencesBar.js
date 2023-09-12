import * as React from "react";
import RentSlider from "~/components/RentSlider";
import LiveabilitySlider from "~/components/LiveabilitySlider";
import AutocompleteSearch from "./AutocompleteSearch";
import Box from "@mui/material/Box";

const PreferencesBar = ({ handleChoice, sendInput }) => {

    const universities = [
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
    { label: "Victoria University, Werribee" },
];

return (
    <div>
        {/* Rent Slider */}
        <RentSlider handleChoice={(e, value) => handleChoice("rent", value)} defaultArg={600} />

        {/* Liveability Sliders */}
        <LiveabilitySlider 
            criterion="Affordable housing"
            handleChoice={(e, value) => handleChoice("affordableHousing", value)}
            defaultArg={3}
        />
        <LiveabilitySlider 
            criterion="Public transport access"
            handleChoice={(e, value) => handleChoice("publicTransport", value)}
            defaultArg={3}
        />
        <LiveabilitySlider 
            criterion="Crime rate"
            handleChoice={(e, value) => handleChoice("crimeRate", value)}
            defaultArg={3}
        />
        <LiveabilitySlider 
            criterion="Road safety"
            handleChoice={(e, value) => handleChoice("roadSafety", value)}
            defaultArg={3}
        />
        <LiveabilitySlider 
            criterion="Parks and greenery"
            handleChoice={(e, value) => handleChoice("parksGreenery", value)}
            defaultArg={3}
        />

        {/* University Autocomplete */}
        <AutocompleteSearch 
            optionsList={universities}
            handleChoice={(key, value) => handleChoice("university", value)}
        />

        <Button variant="contained" onClick={sendInput}>Search</Button>
    </div>
);
};

export default PreferencesBar;
