import * as React from "react";
import styles from "../../style/StyleSetting.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import NoshowSubmit from "./noshowSubmit";

export interface noshowcheck{
    nick:string,
    id:number,
    noshow:boolean,
    email:string
}
export interface noshowProps{
    users:noshowcheck[]
}

export function NoshowReport(member:noshowProps){
    const [noshow, setNoshow] = useState(false);
    const [tab, setTab] = useState("initial value");
    const [noshowCheck, setNoshowCheck] = useState([false,false,false]);
    const [list, setList] = useState(['']);
    const [submit, setSubmit] = useState(false);
    const test = () => {
        setTab(JSON.stringify("posting finish"));
        setSubmit(true)
    }

    useEffect(()=>{
        const noshowapi = async() => {
            console.log("useEffect 실행");
            try{
                const response = await axios.post("http://localhost:8080/posting", list);
                console.log(response.data)
            } catch (e) {
                console.log("api connect error")
            }
        }
        noshowapi();
    },[tab]);
    const n = member.users.length;

    return<div className={styles.NoshowreportBackground}>
        {!submit&&<div>
            <div className = {styles.NoshowreportTopBox}>
                <div className={styles.NoshowreportTitle}>밥약 노쇼 리포트</div>
                <div className={styles.NoshowreportContent}>* 서로간의 신뢰 형성과 만약의 노쇼방지를 위해<br />
                    밥약 후 노쇼 리포트를 작성을 필수로 해주셔야 합니다.</div>
            </div>
            <div className = {styles.NoshowreportMiddleBox}>
                {member.users.map((user,key) => (
                    <div className={styles.NoshowreportUserItem}>
                        <div className={styles.NoshowreportNickname}>{user.nick}</div>
                        <img onClick={()=>{
                            let newCheck = [...noshowCheck];
                            newCheck[key] = !newCheck[key];
                            setNoshowCheck(newCheck)
                            let newList = [...list];
                            if(newCheck[key]==true){ newList.push(user.email)}
                            else{ newList = newList.filter((data)=>{ return data!=user.email}) }
                            setList(newList)
                        }} src={ noshowCheck[key]?'img/checkedNoshow.svg':'img/defaultNoshow.svg'} />
                    </div>
                ))}
            </div>
            <div className = {styles.NoshowreportBottomBox}>
                <button className={styles.NoshowreportSubmitButton} onClick={test}>
                    <span className={styles.NoshowreportButtonText}>제출하기</span>
                </button>
            </div>

        </div>}
        {submit&&<NoshowSubmit />}
        </div>
};

export default NoshowReport;