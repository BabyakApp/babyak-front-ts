import * as React from "react";
import {Link} from "react-router-dom";
import styles from "../../style/StyleSetting.module.css";
import {useState} from "react";
import {connect} from "react-redux";

export function WishButton(){
    const [tab, setTab] = useState(false);

    return <button className={styles.WishButton} onClick={() => setTab(!tab)}>
            <div><img src= {tab?'img/filledheart.svg':'img/defaultheart.svg'}/></div>
            <div>찜하기</div>
        </button>
}

export default WishButton;