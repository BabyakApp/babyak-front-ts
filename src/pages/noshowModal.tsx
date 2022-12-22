import * as React from "react";
import AllPostList from "./allPostList";
import {NoshowReportContainer} from "../container/noshowReportContainer";
import {PostDetailContainer} from "../container/postDetailContainer";
import {MypageContainer} from "../container/mypageContainer";
import NoshowSubmit from "../components/Noshow/noshowSubmit";
import {useEffect, useState} from "react";
import EndTime from "../data/endTime";


export function NoshowModal(){
    const [end, setEnd] = useState(true)
    useEffect(()=>{
        const date = localStorage.getItem("date")
        const time = localStorage.getItem("time")
        if(date!=null && time != null)
            if(EndTime(date,time))
                setEnd(true)
    },[])
    return(
        <div>
            {end&&<NoshowReportContainer />}
            <AllPostList />
        </div>)
}

export default NoshowModal;