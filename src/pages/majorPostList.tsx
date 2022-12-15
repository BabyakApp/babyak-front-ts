import React, {useCallback, useEffect, useState} from "react";
import styled from 'styled-components';
import Post from "../components/postBox";
import {PostProps} from "../components/postBox";
import MenuFooter from "../components/menuFooter";
import PostListHeader from "../components/postListHeader";
import PostingButton, {PostingButtonContainer} from "../container/postingButtonContainer";
import {postListTest} from "../data/testdata";
import PostList, {GetPostListData, jsontoForm, ListProps} from "../components/postList";
import PostListContainer from "../components/postList";
import MajorPost from "../data/majorPost";
import PostFilterBar, {filterValue} from "../components/postFilterBar";
import FilteringPost from "../data/filteringPost";


export function MajorPostList() {
    let postList:ListProps = {major:"융콘", posts:postListTest.posts, userid:1}
    let newpostList = MajorPost(postList);
    let [mjfilteredList, setMjfilteredList] = useState(newpostList)
    // const [result, setResult] = useState(null);
    // let res = GetPostListData().then((response)=>{
    //         setResult(response)
    //         return response
    //     }
    // );
    // if(result){
    //     let posts:ListProps = jsontoForm(result);
    //     setMjfilteredList(posts)
    // }
    function filterTest(value:filterValue,checked:any,postList:ListProps){
        setMjfilteredList(FilteringPost(value,checked,mjfilteredList))
    }
    return(
        <div>
            <PostListHeader major={postList.major} type={true} />
            <PostFilterBar propFunction={filterTest} postlist={newpostList} />
            <PostListContainer major={mjfilteredList.major} posts={mjfilteredList.posts} userid={1} />
            <PostingButtonContainer />
            <MenuFooter type={0}/>
        </div>
    )
}



export default MajorPostList;
