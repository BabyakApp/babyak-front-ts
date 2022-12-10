import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

export interface noshowcheck{
    nick:string,
    id:number,
    noshow:boolean
}
export interface noshowProps{
    users:noshowcheck[]
}

export function NoshowReport(member:noshowProps){
    const [noshow, setNoshow] = useState(false);
    const [tab, setTab] =useState("initial value");
    const test = () => setTab(JSON.stringify("posting finish"));
    const [check, setCheck] = useState([false,false,false]);

    useEffect(()=>{
        const noshowapi = async() => {
            console.log("useEffect 실행");
            try{
                const response = await axios.post("http://localhost:8080/posting", member);
                console.log(response.data)
            } catch (e) {
                console.log("api connect error")
            }
        }
        noshowapi();
    },[tab]);

    return<div className={styles.NoshowreportBackground}>
        <div className={styles.NoshowreportBox}>
            <div className={styles.NoshowreportTitle}>밥약 노쇼 리포트</div>
            <div className={styles.NoshowreportContent}>* 서로간의 신뢰 형성과 만약의 노쇼방지를 위해<br />
                밥약 후 노쇼 리포트를 작성을 필수로 해주셔야 합니다.</div>
            <div>
                {member.users.map((user,key) => (
                    <div className={styles.NoshowreportUserItem}>
                        <span className={styles.NoshowreportNickname}>{user.nick}</span>
                        <img onClick={()=>{
                            check[key] = !check[key]
                            setCheck(check)
                            console.log(check)
                        }} src={ check[key]?'img/checkedNoshow.svg':'img/defaultNoshow.svg'} />
                    </div>
                    ))}
            </div>
            <button className={styles.NoshowreportSubmitButton} onClick={test}>
                <span className={styles.NoshowreportButtonText}>제출하기</span>
            </button>
        </div>
    </div>
};

export default NoshowReport;