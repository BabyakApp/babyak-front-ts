import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import {filterValue} from "../components/postFilterBar";
import {ListProps, PostForm} from "../components/postList";
import {postListTest} from "./testdata";


export function FilteringPost(value:filterValue,checked:any,postList:ListProps){

    let filteredpost = [];
    let flag = true;
    postList = postListTest;
    for(let post of postList.posts){
        if(checked.length==0){
            filteredpost = postList.posts
            break;
        }
        for(let ch of checked){
            if(post[ch as keyof typeof post] != value[ch as keyof typeof value]){
                flag = false;
            }
        }
        if(flag==true)
            filteredpost.push(post);
        flag = true;
    }
    console.log("filtered:",filteredpost)
    let result:ListProps = {
        major: postList.major, posts: filteredpost, userid: postList.userid

    }


    return result;
}
export default FilteringPost;