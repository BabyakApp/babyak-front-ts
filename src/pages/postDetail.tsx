import * as React from "react";
import {useState} from "react";
import Post, {PostProps} from "../components/PostList/postBox";
import PostDetailHeader from "../components/PostDetail/postDetailHeader";
import styled from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import styles from '../style/StyleSetting.module.css'
import MenuFooter from "../components/menuFooter";
import {Link} from "react-router-dom";
import WishButton from "../components/PostDetail/wishButton";
import Info from "../components/PostDetail/info";
import DetailInfo from "../components/PostDetail/detailInfo";


export function PostDetail({post, key}: PostProps){
    return<div>
        <PostDetailHeader post={post} key={key} />
        <div className={styles.DetailProfile}>
            <img style={{ float:"left"}} src= "img/detailprofile.svg"/>
            <div className={styles.DetailProfileNickname}>{post.nickname}</div>
            <div className={styles.DetailProfileMajor}>|{post.major}</div>
        </div>
        <div className={styles.DetailContent}>{post.detail}</div>
        <DetailInfo post={post} key={key} />
        <div>
            <Info />
            <div>
                <Link to="/chatting"><button className={styles.ParticipationButton}>참여하기</button></Link>
                <WishButton />
            </div>
        </div>
        <MenuFooter type={0}/>
    </div>
}

export default PostDetail;