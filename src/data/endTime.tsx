import * as React from "react";

export function EndTime(meetingDate:string, meetingTime:string){
    const now = new Date();

    meetingDate = meetingDate.replaceAll(".","-")
    const meetingTimeIndex = Number(meetingTime.substring(0,1))
    const timetable = ["09:15", "10:45", "12:15", "13:45", "15:15", "16:45", "18:15","19:45","21:15","22:45"]
    const endTime = timetable[meetingTimeIndex]
    const end = new Date(meetingDate+endTime)
    console.log(end)
    if(end<now){
        return true;
    }else{
        return false;
    }
}

export default EndTime;


