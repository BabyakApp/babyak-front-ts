import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function LocationComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={location}
      sx={{
        width: 300,
      }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}

const location = [
  { label: "정문" },
  { label: "후문" },
  { label: "기숙사" },
  { label: "기타" },
];
