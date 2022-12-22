import * as React from "react";
import MenuFooter from "../components/menuFooter";
import styles from '../style/StyleSetting.module.css'
import {postListTest} from "../data/testdata";
import WishList from "../components/MyPage/wishList";


export function WishListPage(){
    return(<div>
        <div className={styles.MypageHeader}>찜한 목록</div>
        <WishList major={postListTest.major} posts={postListTest.posts} userid={postListTest.userid} />
        <MenuFooter type={2}/>
    </div>)
}

export default WishListPage;