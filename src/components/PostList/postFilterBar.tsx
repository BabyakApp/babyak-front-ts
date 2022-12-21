import * as React from "react";
import styles from '../../style/StyleSetting.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import {ListItemText, styled} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Autocomplete, FormHelperText, TextField} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {postListTest} from "data/testdata"
import FilteringPost from "../../data/filteringPost";
import {ListProps} from "./postList";

export let filteredPost:ListProps;
export interface filterValue {
    meetingDate:string,
    meetingTime:string,
    meetingSite:string,
    maxPeople:string,
    preferredFood:string
}

export function PostFilterBar(props:any){
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [people, setPeople] = React.useState('');
    const [food, setFood] = React.useState('');
    const [filterState, setFilterState] = useState({
        filterType: {
            meetingDate: false,
            meetingTime: false,
            meetingSite: false,
            maxPeople: false,
            preferredFood: false
        }
    });
    const filteredCollect = useCallback(() => {
        const selected = [];
        const now = filterState.filterType;
        let flag = false;
        for(let type in now){
            if(now[type as keyof typeof now] == true){
                selected.push(type);
                flag = true;
            }
        }
        return selected;
    }, [filterState.filterType]);


    let FilterEx:filterValue = {
        meetingDate:date,
        meetingTime:time,
        meetingSite:location,
        maxPeople:people,
        preferredFood:food
    };
    const filteredPostList = useEffect(() => {
        props.propFunction(FilterEx,filteredCollect(),props.postlist)
    },[filteredCollect]);

    const handleDateChange = (event: SelectChangeEvent) => {
        if(event.target.value == ''){
            setFilterState({ filterType: {...filterState.filterType, meetingDate:false }})
        }else{
            setFilterState({ filterType: {...filterState.filterType, meetingDate:true }})}
        setDate(event.target.value);
    };
    const handleTimeChange = (event: SelectChangeEvent) => {
        if(event.target.value == ''){
            setFilterState({ filterType: {...filterState.filterType, meetingTime:false }})
        }else{
            setFilterState({ filterType: {...filterState.filterType, meetingTime:true }})}
        setTime(event.target.value);
    };
    const handleLocationChange = (event: SelectChangeEvent) => {
        if(event.target.value == ''){
            setFilterState({ filterType: {...filterState.filterType, meetingSite:false }})
        }else{
            setFilterState({ filterType: {...filterState.filterType, meetingSite:true }})}
        setLocation(event.target.value);
    };
    const handlePeopleChange = (event: SelectChangeEvent) => {
        if(event.target.value == ''){
            setFilterState({ filterType: {...filterState.filterType, maxPeople:false }})
        }else{
            setFilterState({ filterType: {...filterState.filterType, maxPeople:true }})}
        setPeople(event.target.value);
    };
    const handleFoodChange = (event: SelectChangeEvent) => {
        if(event.target.value == ''){
            setFilterState({ filterType: {...filterState.filterType, preferredFood:false }})
        }else{
            setFilterState({ filterType: {...filterState.filterType, preferredFood:true }})}
        setFood(event.target.value);
    };

    const filterSelect = {
        width:68,
        height:45,
        m:0.3,
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow:1,
        textAlign:'center',
        position:'sticky',
        borderColor: "#5b5b5b",
        ".MuiOutlinedInput-notchedOutline": {
            shadows:2,
            borderWidth:0.9,
            fontsize:11,
            fontFamily: "NotoSansKRMedium"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            shadows:3,
            borderWidth:0.9,
            borderColor: "#5b5b5b"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            shadows:3,
            borderWidth:0.9,
            borderColor: "#5b5b5b"
        },
        ".MuiSvgIcon-root ": {
            fill: "white !important"
        },
        '& .MuiSelect-select':{
            fontSize: 11,
            fontFamily: "NotoSansKRMedium"
        }
    }
    const filterSelectText = {

    }
    const filterMenuitem = {
        "&.MuiMenuItem-root":{
        },
        "&:hover":{
            backgroundColor:'rgba(0, 0, 0, 0.15)'
        },
        "&.Mui-selected":{
            backgroundColor: "rgba(255, 54, 106, 0.24)"
        }
    }
    const filterMenuitemText = {
        fontSize:11,
        fontFamily:"NotoSansKRMedium"
    }

    return(<div className={styles.PostFilterBar}>
        <FormControl>
            <FormHelperText><img src= "img/filterdate.svg"/></FormHelperText>
            <Select
                value={date}
                onChange={handleDateChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label'}}
                sx={filterSelect}
            >
                <MenuItem value="" sx={filterMenuitem} style={filterMenuitemText}>-</MenuItem>
                <MenuItem value={"월요일"} sx={filterMenuitem} style={filterMenuitemText}>월요일</MenuItem>
                <MenuItem value={"화요일"} sx={filterMenuitem} style={filterMenuitemText}>화요일</MenuItem>
                <MenuItem value={"수요일"} sx={filterMenuitem} style={filterMenuitemText}>수요일</MenuItem>
                <MenuItem value={"목요일"} sx={filterMenuitem} style={filterMenuitemText}>목요일</MenuItem>
                <MenuItem value={"금요일"} sx={filterMenuitem} style={filterMenuitemText}>금요일</MenuItem>
                <MenuItem value={"토요일"} sx={filterMenuitem} style={filterMenuitemText}>토요일</MenuItem>
                <MenuItem value={"일요일"} sx={filterMenuitem} style={filterMenuitemText}>일요일</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <FormHelperText><img src= "img/filtertime.svg"/></FormHelperText>
            <Select
                value={time}
                onChange={handleTimeChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={filterSelect}
            >
                <MenuItem value="" sx={filterMenuitem} style={filterMenuitemText}>
                    <em>-</em>
                </MenuItem>
                <MenuItem value={"1"} sx={filterMenuitem} style={filterMenuitemText}>1교시</MenuItem>
                <MenuItem value={"2"} sx={filterMenuitem} style={filterMenuitemText}>2교시</MenuItem>
                <MenuItem value={"3"} sx={filterMenuitem} style={filterMenuitemText}>3교시</MenuItem>
                <MenuItem value={"4"} sx={filterMenuitem} style={filterMenuitemText}>4교시</MenuItem>
                <MenuItem value={"5"} sx={filterMenuitem} style={filterMenuitemText}>5교시</MenuItem>
                <MenuItem value={"6"} sx={filterMenuitem} style={filterMenuitemText}>6교시</MenuItem>
                <MenuItem value={"7"} sx={filterMenuitem} style={filterMenuitemText}>7교시</MenuItem>
                <MenuItem value={"8"} sx={filterMenuitem} style={filterMenuitemText}>8교시</MenuItem>
                <MenuItem value={"9"} sx={filterMenuitem} style={filterMenuitemText}>9교시</MenuItem>
                <MenuItem value={"10"} sx={filterMenuitem} style={filterMenuitemText}>10교시</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <FormHelperText><img src= "img/filterlocation.svg"/></FormHelperText>
            <Select
                value={location}
                onChange={handleLocationChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={filterSelect}
            >
                <MenuItem value="" sx={filterMenuitem} style={filterMenuitemText}>
                    <em>-</em>
                </MenuItem>
                <MenuItem value={"정문"} sx={filterMenuitem} style={filterMenuitemText}>정문</MenuItem>
                <MenuItem value={"후문"} sx={filterMenuitem} style={filterMenuitemText}>후문</MenuItem>
                <MenuItem value={"기숙사"} sx={filterMenuitem} style={filterMenuitemText}>기숙사</MenuItem>
                <MenuItem value={"기타"} sx={filterMenuitem} style={filterMenuitemText}>기타</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <FormHelperText><img src= "img/filterpeople.svg"/></FormHelperText>
            <Select
                value={people}
                onChange={handlePeopleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={filterSelect}
            >
                <MenuItem value="" sx={filterMenuitem} style={filterMenuitemText}>
                    <em>-</em>
                </MenuItem>
                <MenuItem value={"2"} sx={filterMenuitem} style={filterMenuitemText}>총2명</MenuItem>
                <MenuItem value={"3"} sx={filterMenuitem} style={filterMenuitemText}>총3명</MenuItem>
                <MenuItem value={"4"} sx={filterMenuitem} style={filterMenuitemText}>총4명</MenuItem>
                <MenuItem value={"5"} sx={filterMenuitem} style={filterMenuitemText}>총5명</MenuItem>
                <MenuItem value={"6"} sx={filterMenuitem} style={filterMenuitemText}>총6명</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <FormHelperText><img src= "img/filterfood.svg"/></FormHelperText>
            <Select
                value={food}
                onChange={handleFoodChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={filterSelect}
            >
                <MenuItem value="" sx={filterMenuitem} style={filterMenuitemText}>
                    <em>-</em>
                </MenuItem>
                <MenuItem value={"한식"} sx={filterMenuitem} style={filterMenuitemText}>한식</MenuItem>
                <MenuItem value={"중식"} sx={filterMenuitem} style={filterMenuitemText}>중식</MenuItem>
                <MenuItem value={"일식"} sx={filterMenuitem} style={filterMenuitemText}>일식</MenuItem>
                <MenuItem value={"양식"} sx={filterMenuitem} style={filterMenuitemText}>양식</MenuItem>
                <MenuItem value={"비건"} sx={filterMenuitem} style={filterMenuitemText}>비건</MenuItem>
                <MenuItem value={"기타"} sx={filterMenuitem} style={filterMenuitemText}>기타</MenuItem>
            </Select>
        </FormControl>
    </div>)
}

export default PostFilterBar;