import * as React from "react";
import styled from 'styled-components';
import logo from "../logo.svg";
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from '../style/StyleSetting.module.css'
import GlobalStyles from "../style/GlobalStyles";
import {PostForm} from "./postList";


export interface PostProps {
    post: PostForm,
    key: number
}
enum strType { title, content}
function stringCut(str:string, type:strType){
    let result:string = ""
    if(type == strType.title){
        if(str.length>17)
            result = str.substring(0,17)+"...";
        else
            result = str;
    }else if(type == strType.content){
        if(str.length>25)
            result = str.substring(0,25)+"...";
        else
            result=str;
    }
    return result;
}

export function Post(data:PostProps){
    const [tab, setTab] = useState<string>('view');
    const onClick = () => setTab('click');
    const key = data.key;
    return(<div>
        <Link to={{pathname:`/postdetail`}}>
        <button className={styles.PostBox} onClick={onClick}>
        <div>
            <div>
                <div className={styles.PostTitleBar}>
                    <div className={styles.PostTime}>{data.post.date}  <img src= "img/listtimeicon.svg"/> {data.post.time}교시</div>
                    <div className={styles.PostTitle}>{stringCut(data.post.chatTitle, strType.title)}</div>
                </div>
                <div className={styles.PostContent}>{stringCut(data.post.content, strType.content)}</div>
            </div>
            <div className={styles.PostBottom}>
                <div className={styles.PostUser}>
                    <img src= "img/profile.svg"/>
                    <span className={styles.PostWriter}>{data.post.writerNickname}</span>
                    <span className={styles.PostMajor}>|{data.post.writerMajor}</span>
                </div>
                <div className={styles.PostOption}>
                    <span className={styles.PostPeople}><img src= "img/listpeopleicon.svg"/>1/{data.post.people}</span>
                    <span className={styles.PostPeople}><img src= "img/listlocationicon.svg"/>{data.post.location}</span>
                    <span className={styles.PostLocation}><img src= "img/listfoodicon.svg"/>{data.post.food}</span>
                </div>

            </div>
        </div>
        </button>
        </Link>
        </div>)
}

export default Post;
