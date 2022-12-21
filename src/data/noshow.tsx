import * as React from "react";
import {getPost, posting} from "./api";
import {Component, useEffect, useState} from "react";
import axios from "axios";
import {PostForm} from "../components/PostList/postList";


export interface user{
    id:number,
    email:string,
    nickname:string
    isBlocked:boolean
}

export function Noshow(){
    let userEx:user = {
        email: "abc1234@ewhain.net", id: 4, isBlocked: false, nickname: "붐바음악"

    }
    const [noshow, setNoshow] =useState("initial value");
    const test = () => setNoshow(JSON.stringify("noshow report submit"));
    useEffect(()=>{
        const noshowapi = async() => {
            console.log("useEffect");
            try{
                const response = await axios.put("http://localhost:8080/user/noshow", userEx.email);
                console.log(response)
            } catch (e) {
                console.log("api connect error")
            }
        }
        noshowapi();
    }, [noshow]);
    return <div>
        <div>결과 출력</div>
        <button onClick={test}>제출 버튼</button>
        <div>{noshow}</div>
    </div>;

}

export default Noshow;