import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function FoodComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={food}
      sx={{
        width: 300,
      }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}

const food = [
  { label: "한식" },
  { label: "중식" },
  { label: "일식" },
  { label: "양식" },
  { label: "비건" },
  { label: "기타" },
];
