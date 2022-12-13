import * as React from "react";
import {ListProps, PostForm} from "../components/postList";


export function MajorPost(postList:ListProps){
    let majorList:ListProps = postList;
    let majorposts:PostForm[] = [];

    for(let post of majorList.posts){
        if(post["writerMajor" as keyof typeof post].toString().includes(majorList.major)){
            majorposts.push(post);
        }
    }
    const result:ListProps = {
        major:majorList.major,
        userid:majorList.userid,
        posts:majorposts
    }

    return(result);
}

export default MajorPost;