import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import {PostProps} from "./postBox";

const timetable = ["08:00 ~ 09:15", "09:30 ~ 10:45", "11:00 ~ 12:15", "12:30 ~ 13:45", "14:00 ~ 15:15", "15:30 ~ 16:45", "17:00 ~ 18:15","18:30 ~ 19:45","20:00 ~ 21:15","21:30 ~ 22:45"]
const date = ["월","화","수","목","금","토","일"]

export function DetailInfo({post, key}: PostProps){
    const date = post.meetingDate.substring(0,2)+"월 "+post.meetingDate.substring(3,5)+"일 "+post.meetingDate.substring(6,7)+"요일";
    //const date = post.meetingDate.substring(5,7)+"월 "+post.meetingDate.substring(7,9)+"일 "+"화요일";
    return<button className={styles.DetailInfo}>
        <div>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detailpeopleicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>참여 인원</span><br />
                <span className={styles.DetailInfoOption}>{post.currentPeople}/{post.maxPeople}</span>
            </button>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detaillocationicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>만남 장소</span><br />
                <span className={styles.DetailInfoOption}>{post.meetingSite}</span>
            </button>
        </div>
        <div>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detaildateicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>만남 날짜</span><br />
                <span className={styles.DetailInfoOption}>{date}</span>
            </button>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detailtimeicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>약속 시간</span><br />
                <span className={styles.DetailInfoOption}>{post.meetingTime}<br />
                    ({timetable[parseInt(post.meetingTime.substring(0,1))-1]})
                </span>
            </button>
        </div>
        <button className={styles.DetailInfoBox}>
            <span><img src= "img/detailfoodicon.svg"/></span><br />
            <span className={styles.DetailInfoPart}>음식</span><br />
            <span className={styles.DetailInfoOption}>{post.preferredFood}</span>
        </button>
    </button>
};

export default DetailInfo;