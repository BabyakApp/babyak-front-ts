import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import {filterValue} from "../components/PostList/postFilterBar";
import {ListProps, PostForm} from "../components/PostList/postList";


export function FilteringPost(value:filterValue,checked:any,postList:ListProps){

    let filteredpost = [];
    let postCheck = true;
    for(let post of postList.posts){
        if(checked.length==0){
            filteredpost = postList.posts
            break;
        }
        for(let ch of checked){
            if(post[ch as keyof typeof post] != value[ch as keyof typeof value]){
                postCheck = false;
            }
        }
        if(postCheck==true){
            filteredpost.push(post);
        }
        postCheck = true;
    }
    let result:ListProps = {
        major: postList.major, posts: filteredpost, userid: postList.userid

    }
    return result;
}
export default FilteringPost;