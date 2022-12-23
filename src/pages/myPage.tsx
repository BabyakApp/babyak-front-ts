import * as React from "react";
import MenuFooter from "../components/menuFooter";
import styles from '../style/StyleSetting.module.css'
import ImageUpload from "../components/MyPage/imageUpload";
import {Link} from "react-router-dom";

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
            <div className={styles.MypageInfo}>나의 밥약 횟수</div>
            <div className={styles.MypageContent}>{user.babyak}</div></button>
        <button className={styles.MypageBox}>
            <img className={styles.MypageIcon} src= "img/mypagenoshow.svg"/>
            <div className={styles.MypageInfo}>밥약 노쇼 횟수</div>
            <div className={styles.MypageContent}>{user.noshow}</div></button>
        <button className={styles.MypageBox}>
            <img className={styles.MypageIcon} src= "img/mypageheart.svg"/>
            <span className={styles.MypageInfo}>내가 찜한 게시글</span>
            <Link to="/wishlist"><img style={{marginLeft:"53%"}} src= "img/wishlist.svg"/></Link>
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