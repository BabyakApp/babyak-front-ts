import * as React from "react";
import styled from 'styled-components';
import logo from "../../logo.svg";
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from '../../style/StyleSetting.module.css'
import GlobalStyles from "../../style/GlobalStyles";
import {PostForm} from "./postList";
import {postListTest} from "../../data/testdata";
import {dayOfWeek} from "../PostDetail/detailInfo";


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
    const year = data.post.meetingDate.substring(0,4)
    const month = data.post.meetingDate.substring(5,7)
    const day = data.post.meetingDate.substring(8,10)
    const dof = new Date(`${year}-${month}-${day}`).getDay()
    const date = month+"."+day+"."+dayOfWeek[dof];
    const key = data.key;
    return(
        <Link to="/postdetail" state={{post:data.post, key:data.key}} >
            <button className={styles.PostBox} onClick={onClick}>
            <div>
                <div>
                    <div className={styles.PostTitleBar}>
                        <div className={styles.PostTime}>{date} <img src= "img/listtimeicon.svg"/> {data.post.meetingTime}</div>
                        <div className={styles.PostTitle}>{stringCut(data.post.title, strType.title)}</div>
                    </div>
                    <div className={styles.PostContent}>{stringCut(data.post.detail, strType.content)}</div>
                </div>
                <div className={styles.PostBottom}>
                    <div className={styles.PostUser}>
                        <img style={{float:"left"}} src= "img/profile.svg"/>
                        <div className={styles.PostWriter}>{data.post.nickname}</div>
                        <div className={styles.PostMajor}>|{data.post.major}</div>
                    </div>
                    <div className={styles.PostOption}>
                        <span className={styles.PostPeople}><img src= "img/listpeopleicon.svg"/>{data.post.currentPeople}/{data.post.maxPeople}</span>
                        <span className={styles.PostPeople}><img src= "img/listlocationicon.svg"/>{data.post.meetingSite}</span>
                        <span className={styles.PostLocation}><img src= "img/listfoodicon.svg"/>{data.post.preferredFood}</span>
                    </div>
                </div>
            </div>
            </button>
        </Link>
        )
}

export default Post;
