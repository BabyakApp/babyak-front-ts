import * as React from "react";
import styles from "../style/StyleSetting.module.css";

export function Info(){
    return<div>
        <div className={styles.InfoTitle}>
            <img src= "img/infomation.svg"/>
            <span className={styles.InfoTitle}>이용안내</span>
        </div>
        <div className={styles.Info}>
            <div>밥약에 참여를 원하시면 하단에 있는 참여하기 버튼을 눌러 참여해주세요.</div>

            <p>노쇼 및 중복 예약 등을 방지하기 위해 동시에 여러 채팅방에 속해있을 수<br />
                없으며 하나의 채팅방에만 속해 있을 수 있습니다.</p>

            <p>밥약 확정은 약속 시간 20분 전이며 지정된 인원수 미달시에도 마감됩니다.</p>
        </div>
    </div>
};

export default Info;
