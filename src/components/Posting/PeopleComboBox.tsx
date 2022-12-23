import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PeopleComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={people}
      sx={{
        width: 300,
      }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}

const people = [
  { label: "총 2명" },
  { label: "총 3명" },
  { label: "총 4명" },
  { label: "총 5명" },
  { label: "총 6명" },
];
