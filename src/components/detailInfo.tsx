import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import {PostProps} from "./postBox";

export function DetailInfo({post, key}: PostProps){
    return<button className={styles.DetailInfo}>
        <div>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detailpeopleicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>참여 인원</span><br />
                <span className={styles.DetailInfoOption}>1/{post.people}</span>
            </button>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detaillocationicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>만남 장소</span><br />
                <span className={styles.DetailInfoOption}>{post.location}</span>
            </button>
        </div>
        <div>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detaildateicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>만남 날짜</span><br />
                <span className={styles.DetailInfoOption}>11월 24일 목요일</span>
            </button>
            <button className={styles.DetailInfoBox}>
                <span><img src= "img/detailtimeicon.svg"/></span><br />
                <span className={styles.DetailInfoPart}>약속 시간</span><br />
                <span className={styles.DetailInfoOption}>{post.time}교시<br />
                (11:00 ~ 12:15)
                </span>
            </button>
        </div>
        <button className={styles.DetailInfoBox}>
            <span><img src= "img/detailfoodicon.svg"/></span><br />
            <span className={styles.DetailInfoPart}>음식</span><br />
            <span className={styles.DetailInfoOption}>{post.food}</span>
        </button>
    </button>
};

export default DetailInfo;