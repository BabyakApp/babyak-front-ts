import * as React from "react";
import {getPost, posting} from "./api";
import {Component, useEffect, useState} from "react";
import axios from "axios";
import {PostForm} from "../components/postList";


export function Post(){
    let postData:PostForm = {
        chatTitle:"api 테스트 게시글",
        date:"월",
        food:"양식",
        time: "5",
        people:3,
        location:"정문",
        content:"api 테스트 내용",
        writerMajor:"컴공",
        writerNickname:"테스트닉네임"
    }
    const [posting, setPosting] =useState("initial value");
    const test = () => setPosting(JSON.stringify("posting finish"));

    useEffect(()=>{
        const postingapi = async() => {
            console.log("useEffect 실행");
            try{
                const response = await axios.post("http://localhost:8080/posting", postData);
            } catch (e) {
                console.log("api connect error")
            }
        }
        postingapi();
    },[posting]);


    return <div>
        <div>결과 출력</div>
        <button onClick={test}>호출 버튼</button>
        <div>{posting}</div>
    </div>;

}

export default Post;