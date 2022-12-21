import * as React from "react";
import styles from "../../style/StyleSetting.module.css";

export function NoshowSubmit(){
    return(<div>
        <button className={styles.NoshowSubmit}>
            <span className={styles.NoshowSubmitText}>밥약 노쇼 리포트가 제출되었습니다.
            제출해주셔서 감사합니다.</span>
        </button>
    </div>);
}

export default NoshowSubmit