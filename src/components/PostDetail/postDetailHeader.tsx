import * as React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import styles from '../../style/StyleSetting.module.css'
import Post, {PostProps} from "../PostList/postBox";

export function PostDetailHeader({post, key}:PostProps){
    return(
        <div>
            <button className={styles.BackButton}>
                <Link to="/post"><img src= "img/backbutton.svg"/></Link>
            </button>
            <span className={styles.DetailTitle}>{post.title}</span>
        </div>
    )
}



export default PostDetailHeader;