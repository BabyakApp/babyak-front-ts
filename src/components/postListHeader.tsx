import * as React from "react";
import {useState} from "react";
import Post from "./postBox";
import {Link} from "react-router-dom";
import styled from "styled-components";
import styles from '../style/StyleSetting.module.css'
import PostFilterBar from "./postFilterBar";

export interface headerProps{
    type:boolean,
    major:string
}

export function PostListHeader({type, major}:headerProps) {

    return(<div className={styles.Header}>
        <div className={styles.HeaderTitle}>밥약</div>
        <div>
            <Link to="/post"><button className={type?styles.HeaderButtonDefault:styles.HeaderButtonSelected}>모두의 밥약</button></Link>
            <Link to="/majorpost"><button className={type?styles.HeaderButtonSelected:styles.HeaderButtonDefault}>{major}의 밥약</button></Link>
        </div>

    </div>)
}

export default PostListHeader;