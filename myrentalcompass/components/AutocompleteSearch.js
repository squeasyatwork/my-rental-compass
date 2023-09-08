import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteSearch({
  optionsList,
  university,
  handleUniChoice,
  defaultArg,
}) {
  // function handleChoice(value) {
  //     handleUniChoice(value.label);
  //     console.log("AutocompleteSearch --> value: " + value.label);
  // }

  // const defaultProps = {
  //     options: { optionsList },
  //     getOptionLabel: (option) => option.label,
  // };
  return (
    <Autocomplete
      disablePortal
      // defaultValue={defaultArg}
      value={university}
      id="autocomplete-search"
      options={optionsList}
      renderInput={(params) => (
        <TextField {...params} label="Select a university" />
      )}
      onChange={(e, value) =>
        value === null ? handleUniChoice("") : handleUniChoice(value.label)
      }
    />
  );
}
