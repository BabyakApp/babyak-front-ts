import React, {useState} from "react";
import Post from "./postBox";
import styles from "../../style/StyleSetting.module.css";
import axios from "axios";
import {postListTest} from "../../data/testdata";


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


export function PostList(postList:ListProps){

    return<div className={styles.PostList}>
        {postList.posts&&postList.posts.map((post, key = post.chatroomid) => (
            <Post post={post} key={key} />
        ))}
    </div>

}

export default PostList;