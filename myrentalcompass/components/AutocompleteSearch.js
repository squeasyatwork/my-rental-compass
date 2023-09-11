import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteSearch({
  optionsList,
  handleChoice,
  defaultArg
}) {
  return (
    <Autocomplete
      disablePortal
      defaultValue={defaultArg}
      id="autocomplete-search"
      options={optionsList}
      renderInput={(params) => (
        <TextField {...params} label="Select a university" />
      )}
      onChange={(e, value) =>
        value === null ? handleChoice("university", "") : handleChoice("university", value.label)
      }
    />
  );
}
