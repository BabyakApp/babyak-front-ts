import React, {useState} from "react";
import axios, {AxiosInstance, AxiosResponse} from "axios";

export interface Post{
    chatTitle:string,
    time:string,
    people:number,
    food:string,
    content:string,
    chatroomid?:number,
    user?:number,
    lastChat?:string
}

let expost:Post={
    chatTitle:"제목",
    time:"5",
    people:4,
    food:"한식",
    content:"내용"
}

const customAxios: AxiosInstance = axios.create({
    headers:{}
})

export async function getPost(){
    const response = await fetch("http://localhost:8080/AllList").then((response)=>{
        return response.json();
    });
}

export async function posting(){
    const response = await axios.post("http://localhost:8080/posting",{
        "chatTitle":"사케동 드실분!",
        "time":"3",
        "people":3,
        "food":"일식",
        "location":"정문",
        "content":"진돈부리에서 사케동 함께 드실분 구해요 프엔 테스트"
    });
    return response.data;
}




