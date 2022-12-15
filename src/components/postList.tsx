import React, {useState} from "react";
import Post from "./postBox";
import styles from "../style/StyleSetting.module.css";
import axios from "axios";
import {postListTest} from "../data/testdata";


export interface PostForm{
    chatroomid: number,
    meetingDate: string,
    title: string,
    meetingTime: string,
    maxPeople: number,
    preferredFood: string,
    meetingSite: string,
    currentPeople:number,
    detail: string
    nickname: string,
    major: string
}
interface UserProps{
    userid: number,
    major: string
}
export interface ListProps extends UserProps{
    posts: PostForm[];
}

export function jsontoForm(jsonfile:Array<any>){
    let posts:PostForm[] = JSON.parse(JSON.stringify(jsonfile));
    let dataList:ListProps = {
        userid:9,
        major: "융콘",
        posts: posts
    }
    return dataList;
}

export async function GetPostListData(){
    try {
        let response = await axios.get("http://3.36.207.252:8080/post/all")
            .then((res) => {
                console.log(res.data)
                return res.data;
            })
            .catch(err => console.log(err))
        return response;
    } catch (e) {
        console.log("api error")
    }
}

export function PostList(postList:ListProps){
    //postList = postListTest;

    return<div className={styles.PostList}>
        {postList.posts&&postList.posts.map((post, key = post.chatroomid) => (
            <Post post={post} key={key} />
        ))}
    </div>

}

export default PostList;