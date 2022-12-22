import React, {useState} from "react";
import axios, {AxiosInstance, AxiosResponse} from "axios";
import {ListProps, PostForm} from "../components/PostList/postList";

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

export function jsontoForm(jsonfile:Array<any>){
    let posts:PostForm[] = JSON.parse(JSON.stringify(jsonfile));
    let dataList:ListProps = {
        userid:9,
        major: "융콘",
        posts: posts
    }
    console.log(posts)
    return dataList;
}

export async function GetPostListData(){
    try {
        let response = await axios.get("http://3.36.207.252:8080/post/all")
            .then((res) => {
                return res.data;
            })
            .catch(err => console.log(err))
        return response;
    } catch (e) {
        console.log("api error")
    }
}



