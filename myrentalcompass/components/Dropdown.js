// Dropdown.js
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const universityOptions = [
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

const UniversityDropdown = ({ labelText, value, onChange }) => {
  return (
    <Autocomplete
      options={universityOptions}
      getOptionLabel={(option) => option.label}
      defaultValue={value}
      onChange={onChange}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      renderInput={(params) => (
        <TextField {...params} label={labelText} variant="outlined" fullWidth />
      )}
    />
  );
};

export default UniversityDropdown;