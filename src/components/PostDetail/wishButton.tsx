import * as React from "react";
import {Link} from "react-router-dom";
import styles from "../../style/StyleSetting.module.css";
import {useState} from "react";
import {connect} from "react-redux";
import {PostProps} from "../PostList/postBox";

export function WishButton({post,key}:PostProps){
    const [tab, setTab] = useState(false);
    const wish = () => {
        setTab(!tab)
        localStorage.setItem("email","babyak@ewhain.net")
        console.log(localStorage.getItem("email"))
        console.log(post.postid)
    }

    return <button className={styles.WishButton} onClick={wish}>
            <div><img src= {tab?'img/filledheart.svg':'img/defaultheart.svg'}/></div>
            <div>찜하기</div>
        </button>
}

export default WishButton;