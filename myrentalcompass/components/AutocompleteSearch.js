import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutocompleteSearch({ optionsList }) {
    return (
        <Autocomplete
            disablePortal
            id="autocomplete-search"
            options={optionsList}
            renderInput={(params) => <TextField {...params} label="Select a university" />}
        />
    );
}