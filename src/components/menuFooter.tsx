import * as React from "react";
import {useState} from "react";
import styles from '../style/StyleSetting.module.css'
import {Link} from "react-router-dom";

export enum menutype{
    Babyak, Chat, Mypage
}
export interface MenuProps{
    type:menutype;
}

export function MenuFooter(props:MenuProps){
    let tab=['default','default','default'];
    tab[props.type] = 'filled';
    let babyak: string = `img/${tab[0]}babyak.svg`;
    let chat: string = `img/${tab[1]}chat.svg`;
    let mypage: string = `img/${tab[2]}mypage.svg`;

    return(
        <div className={styles.MenuFooter}>
            <Link to="/post">
                <button className={styles.MenuButton}><img src={babyak}/></button>
            </Link>
            <Link to="/chatting">
                <button className={styles.MenuButton}><img src={chat}/></button>
            </Link>
            <Link to="/mypage">
                <button className={styles.MenuButton}><img src={mypage}/></button>
            </Link>
        </div>
    )
}

export default MenuFooter;