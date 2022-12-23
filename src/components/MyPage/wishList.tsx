import * as React from "react";
import styles from "../../style/StyleSetting.module.css";
import Post from "../PostList/postBox";
import postList, {ListProps} from "../PostList/postList";

export function wishList(postList:ListProps){
    return<div className={styles.WishList}>
        {postList.posts&&postList.posts.map((post, key = post.postid) => (
            <Post post={post} key={key} />
        ))}
    </div>
}

export default wishList;