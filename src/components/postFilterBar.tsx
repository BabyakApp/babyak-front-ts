import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { postListTest } from "data/testdata";
import FilteringPost from "../data/filteringPost";
import { ListProps } from "./postList";

export let filteredPost: ListProps;
export interface filterValue {
  date: string;
  time: string;
  location: string;
  people: string;
  food: string;
}

export function PostFilterBar() {
  const [filterState, setFilterState] = useState({
    filterType: {
      date: false,
      time: false,
      location: false,
      people: false,
      food: false,
    },
  });
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [people, setPeople] = React.useState("");
  const [food, setFood] = React.useState("");

  const handleDateChange = (event: SelectChangeEvent) => {
    if (event.target.value == "") {
      setFilterState({
        filterType: { ...filterState.filterType, date: false },
      });
    } else {
      setFilterState({ filterType: { ...filterState.filterType, date: true } });
    }
    setDate(event.target.value);
  };
  const handleTimeChange = (event: SelectChangeEvent) => {
    if (event.target.value == "") {
      setFilterState({
        filterType: { ...filterState.filterType, time: false },
      });
    } else {
      setFilterState({ filterType: { ...filterState.filterType, time: true } });
    }
    setTime(event.target.value);
  };
  const handleLocationChange = (event: SelectChangeEvent) => {
    if (event.target.value == "") {
      setFilterState({
        filterType: { ...filterState.filterType, location: false },
      });
    } else {
      setFilterState({
        filterType: { ...filterState.filterType, location: true },
      });
    }
    setLocation(event.target.value);
  };
  const handlePeopleChange = (event: SelectChangeEvent) => {
    if (event.target.value == "") {
      setFilterState({
        filterType: { ...filterState.filterType, people: false },
      });
    } else {
      setFilterState({
        filterType: { ...filterState.filterType, people: true },
      });
    }
    setPeople(event.target.value);
  };
  const handleFoodChange = (event: SelectChangeEvent) => {
    if (event.target.value == "") {
      setFilterState({
        filterType: { ...filterState.filterType, food: false },
      });
    } else {
      setFilterState({ filterType: { ...filterState.filterType, food: true } });
    }
    setFood(event.target.value);
  };

  const filteredCollect = useCallback(() => {
    const selected = [];
    const now = filterState.filterType;
    for (let type in now) {
      if (now[type as keyof typeof now] == true) {
        selected.push(type);
      }
    }
    return selected;
  }, [filterState.filterType]);

  let FilterEx: filterValue = {
    date: date,
    time: time,
    location: location,
    people: people,
    food: food,
  };
  const filterButton = {
    width: 97,
    height: 45,
    m: 0.3,
    backgroundColor: "white",
    borderRadius: 4,
    boxShadow: 1,
    fontWeight: "medium",
    textAlign: "center",
    fontsize: 1,
  };
  const filterText = {
    fontWeight: "medium",
    textAlign: "center",
  };
  const foodEx: filterValue = {
    date: "월",
    time: "4",
    location: "정문",
    people: "4",
    food: "한식",
  };
  filteredPost = FilteringPost(FilterEx, filteredCollect(), postListTest);

  return (
    <div className={styles.PostFilterBar}>
      <FormControl>
        <FormHelperText>
          <img src="img/filterdate.svg" />
        </FormHelperText>
        <Select
          value={date}
          onChange={handleDateChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={filterButton}
        >
          <MenuItem value="" sx={filterText}>
            <em>-</em>
          </MenuItem>
          <MenuItem value={"월요일"} sx={filterText}>
            월요일
          </MenuItem>
          <MenuItem value={"화요일"} sx={filterText}>
            화요일
          </MenuItem>
          <MenuItem value={"수요일"} sx={filterText}>
            수요일
          </MenuItem>
          <MenuItem value={"목요일"} sx={filterText}>
            목요일
          </MenuItem>
          <MenuItem value={"금요일"} sx={filterText}>
            금요일
          </MenuItem>
          <MenuItem value={"토요일"} sx={filterText}>
            토요일
          </MenuItem>
          <MenuItem value={"일요일"} sx={filterText}>
            일요일
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <FormHelperText>
          <img src="img/filtertime.svg" />
        </FormHelperText>
        <Select
          value={time}
          onChange={handleTimeChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={filterButton}
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={"1"} sx={filterText}>
            1교시
          </MenuItem>
          <MenuItem value={"2"} sx={filterText}>
            2교시
          </MenuItem>
          <MenuItem value={"3"} sx={filterText}>
            3교시
          </MenuItem>
          <MenuItem value={"4"} sx={filterText}>
            4교시
          </MenuItem>
          <MenuItem value={"5"} sx={filterText}>
            5교시
          </MenuItem>
          <MenuItem value={"6"} sx={filterText}>
            6교시
          </MenuItem>
          <MenuItem value={"7"} sx={filterText}>
            7교시
          </MenuItem>
          <MenuItem value={"8"} sx={filterText}>
            8교시
          </MenuItem>
          <MenuItem value={"9"} sx={filterText}>
            9교시
          </MenuItem>
          <MenuItem value={"10"} sx={filterText}>
            10교시
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <FormHelperText>
          <img src="img/filterlocation.svg" />
        </FormHelperText>
        <Select
          value={location}
          onChange={handleLocationChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={filterButton}
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={"정문"} sx={filterText}>
            정문
          </MenuItem>
          <MenuItem value={"후문"} sx={filterText}>
            후문
          </MenuItem>
          <MenuItem value={"기숙사"} sx={filterText}>
            기숙사
          </MenuItem>
          <MenuItem value={"기타"} sx={filterText}>
            기타
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <FormHelperText>
          <img src="img/filterpeople.svg" />
        </FormHelperText>
        <Select
          value={people}
          onChange={handlePeopleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={filterButton}
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={"2"} sx={filterText}>
            총2명
          </MenuItem>
          <MenuItem value={"3"} sx={filterText}>
            총3명
          </MenuItem>
          <MenuItem value={"4"} sx={filterText}>
            총4명
          </MenuItem>
          <MenuItem value={"5"} sx={filterText}>
            총5명
          </MenuItem>
          <MenuItem value={"6"} sx={filterText}>
            총6명
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <FormHelperText>
          <img src="img/filterfood.svg" />
        </FormHelperText>
        <Select
          value={food}
          onChange={handleFoodChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={filterButton}
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={"한식"} sx={filterText}>
            한식
          </MenuItem>
          <MenuItem value={"중식"} sx={filterText}>
            중식
          </MenuItem>
          <MenuItem value={"일식"} sx={filterText}>
            일식
          </MenuItem>
          <MenuItem value={"양식"} sx={filterText}>
            양식
          </MenuItem>
          <MenuItem value={"비건"} sx={filterText}>
            비건
          </MenuItem>
          <MenuItem value={"기타"} sx={filterText}>
            기타
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default PostFilterBar;
