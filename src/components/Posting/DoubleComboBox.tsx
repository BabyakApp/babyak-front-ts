import * as React from "react";
import { ArrowLeft, User, LogOut } from "react-feather";
import { type } from "os";
import { MenuItem, Select } from "@mui/material";

export interface IChatMessage {
  type: "recv" | "send";
  name: string;
  text: string;
  time: string;
}

export function DoubleComboBox() {
  const [departValue, setDepartValue] = React.useState<string>("a");

  const departs = ["a", "b", "c"];
  const majors: { [key: string]: string[] } = {
    a: ["a1", "a2", "a3"],
    b: ["b1", "b2", "b3"],
    c: ["c1", "c2", "c3"],
  };

  return (
    <div>
      <Select
        onChange={(val) => {
          setDepartValue(val.target.value as string);
        }}
      >
        {departs.map((depart) => (
          <MenuItem value={depart}>{depart}</MenuItem>
        ))}
      </Select>

      <Select>
        {majors[departValue].map((depart) => (
          <MenuItem value={depart}>{depart}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
