import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function TimeComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={time}
      sx={{
        width: 300,
      }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}

const time = [
  { label: "1교시" },
  { label: "2교시" },
  { label: "3교시" },
  { label: "4교시" },
  { label: "5교시" },
  { label: "6교시" },
  { label: "7교시" },
  { label: "8교시" },
  { label: "9교시" },
  { label: "10교시" },
];
