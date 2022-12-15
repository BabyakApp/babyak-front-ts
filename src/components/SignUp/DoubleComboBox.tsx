import * as React from "react";
import { MenuItem, Select } from "@mui/material";

export interface IChatMessage {
  type: "recv" | "send";
  name: string;
  text: string;
  time: string;
}

export function DoubleComboBox() {
  const [departValue, setDepartValue] = React.useState<string>("인문과학대학");

  const departs = [
    "인문과학대학",
    "사회과학대학",
    "자연과학대학",
    "엘텍공과대학",
    "음악대학",
    "조형예술대학",
    "사범대학",
    "경영대학",
    "신산업융합대학",
    "의과대학",
    "간호대학",
    "약학대학",
    "스크랜튼대학",
    "AI융합학부",
    "호크마교양대학",
  ];
  const majors: { [key: string]: string[] } = {
    인문과학대학: ["a1", "a2", "a3"],
    사회과학대학: ["b1", "b2", "b3"],
    자연과학대학: [
      "수학과",
      "통계학과",
      "물리학과",
      "화학생명분자과학부",
      "화학나노과학전공",
      "생명과학전공",
    ],
  };
  const combo = {
    width: 167,
    height: 45,
    m: 0.3,
    margin: 1,
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: 1,
    fontWeight: "medium",
    textAlign: "center",
    fontsize: 1,
  };

  return (
    <div>
      <Select
        sx={combo}
        onChange={(val) => {
          setDepartValue(val.target.value as string);
        }}
      >
        {departs.map((depart) => (
          <MenuItem value={depart}>{depart}</MenuItem>
        ))}
      </Select>

      <Select sx={combo}>
        {majors[departValue].map((depart) => (
          <MenuItem value={depart}>{depart}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
