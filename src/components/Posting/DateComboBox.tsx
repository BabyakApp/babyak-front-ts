import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function DateComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={date}
      sx={{
        width: 300,
        borderRadius: 10,
      }}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
}

const date = [
  { label: "12월 15일 목요일" },
  { label: "12월 16일 금요일" },
  { label: "12월 17일 토요일" },
  { label: "12월 18일 일요일" },
  { label: "12월 19일 월요일" },
  { label: "12월 20일 화요일" },
  { label: "12월 21일 수요일" },
];
