import * as React from "react";
import MenuFooter from "../components/menuFooter";
import styles from '../style/StyleSetting.module.css'

export interface mypageProps{
    nickname:string,
    major:string,
    babyak:number,
    noshow:number
}

export function MyPage(user:mypageProps){
    return(<div>
        <div className={styles.MypageHeader}>마이페이지</div>
        <div className={styles.MypageProfile}>
            <div className={styles.MypagePic}><img src= "img/mypageprofile.svg"/></div>
            <div>
                <span className={styles.MypageNick}>{user.nickname}</span>
                <span className={styles.MypageMajor}>|{user.major}</span>
            </div>
        </div>
        <button className={styles.MypageBox}>
            <img className={styles.MypageIcon} src= "img/mypagebabyak.svg"/>
            <span className={styles.MypageInfo}>나의 밥약 횟수</span>
            <span className={styles.MypageContent}>{user.babyak}</span></button>
        <button className={styles.MypageBox}>
            <img className={styles.MypageIcon} src= "img/mypagenoshow.svg"/>
            <span className={styles.MypageInfo}>밥약 노쇼 횟수</span>
            <span className={styles.MypageContent}>{user.noshow}</span></button>
        <button className={styles.MypageBox}>
            <img className={styles.MypageIcon} src= "img/mypageheart.svg"/>
            <span className={styles.MypageInfo}>내가 찜한 게시글</span>
        </button>
        <button className={styles.MypageBox} style={{ marginBottom:90 }}>
            <img className={styles.MypageIcon} src= "img/mypagetimetable.svg"/>
            <span className={styles.MypageInfo}>나의 시간표</span>
            <div><img className={styles.MypageTimetable} src= "img/timetable.svg"/></div>
        </button>
        <MenuFooter type={2}/>
    </div>)
}

export default MyPage;