import React, {useState} from "react";
import Post from "./postBox";
import {inspect, log} from "util";
import styles from "../style/StyleSetting.module.css";
import axios from "axios";
import {postListTest} from "../data/testdata";


export interface PostForm{
    chatroomid: number,
    date: string,
    chatTitle: string,
    time: string,
    people: number,
    food: string,
    location: string,
    content: string
    writerNickname: string,
    writerMajor: string
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
        let response = await axios.get("http://localhost:8080/AllList")
            .then((res) => {
                return res.data;
            })
            .catch(err => console.log(err))
        return response;
    } catch (e) {
        console.log("api error")
    }
}

export function PostList(postList:ListProps){
    const [result, setResult] = useState(null);
    // let res = GetPostListData().then((response)=>{
    //         setResult(response)
    //         return response
    //     }
    // );
    // if(result){
    //     let posts:ListProps = jsontoForm(result);
    //     postList = posts;
    // }
    // postList = postListTest;

    return<div className={styles.PostList}>
        {postList.posts&&postList.posts.map((post, key = post.chatroomid) => (
            <Post post={post} key={key} />
        ))}
    </div>

}

export default PostList;