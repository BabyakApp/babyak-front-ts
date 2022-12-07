import * as React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import styles from '../style/StyleSetting.module.css'
import Post, {PostProps} from "./postBox";

export function PostDetailHeader({post, key}:PostProps){
    return(
        <div>
            <button className={styles.BackButton}>
                <Link to="/allpostlist"><img src= "img/backbutton.png"/></Link>
            </button>
            <span className={styles.DetailTitle}>{post.chatTitle}</span>
        </div>
    )
}



export default PostDetailHeader;