import * as React from "react";
import {useState} from "react";
import Post, {PostProps} from "../components/postBox";
import PostDetailHeader from "../components/postDetailHeader";
import styled from "styled-components";
import GlobalStyles from "../style/GlobalStyles";
import styles from '../style/StyleSetting.module.css'
import MenuFooter from "../components/menuFooter";
import {Link} from "react-router-dom";
import WishButton from "../components/wishButton";
import Info from "../components/info";
import DetailInfo from "../components/detailInfo";
import {NoshowReportContainer} from "../container/noshowReportContainer";


export function PostDetail({post, key}: PostProps){
    return<div>
        <PostDetailHeader post={post} key={key} />
        <div className={styles.DetailProfile}>
            <img src= "img/detailprofile.svg"/>
            <span className={styles.DetailProfileNickname}>{post.writerNickname}</span>
            <span className={styles.DetailProfileMajor}> |{post.writerMajor}</span>
        </div>
        <div className={styles.DetailContent}>{post.content}</div>
        <DetailInfo post={post} key={key} />
        <div>
            <Info />
            <div>
                <Link to="/chatting"><button className={styles.ParticipationButton}>참여하기</button></Link>
                <WishButton />
            </div>
        </div>
        <MenuFooter  type={0}/>
    </div>
}

export default PostDetail;