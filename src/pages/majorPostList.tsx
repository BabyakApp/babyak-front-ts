import React, {useCallback, useEffect, useState} from "react";
import styled from 'styled-components';
import Post from "../components/PostList/postBox";
import {PostProps} from "../components/PostList/postBox";
import MenuFooter from "../components/menuFooter";
import PostListHeader from "../components/PostList/postListHeader";
import PostingButton, {PostingButtonContainer} from "../container/postingButtonContainer";
import {postListTest} from "../data/testdata";
import PostList, {ListProps} from "../components/PostList/postList";
import PostListContainer from "../components/PostList/postList";
import MajorPost from "../data/majorPost";
import PostFilterBar, {filterValue} from "../components/PostList/postFilterBar";
import FilteringPost from "../data/filteringPost";
import {GetPostListData, jsontoForm} from "../data/api";


export function MajorPostList() {
    let postList:ListProps = {major:"융콘", posts:postListTest.posts, userid:1}
    let newpostList = MajorPost(postList);
    const [mjfilteredList, setMjfilteredList] = useState(newpostList)
    const [sv, setSv] = useState(newpostList)
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    let response = useEffect(()=>{
        GetPostListData().then((response)=>{
            setResult(response)
            setLoading(false)
            return response
        })
        if(result){
            let posts:ListProps = MajorPost(jsontoForm(result));
            setMjfilteredList(posts)
            setSv(posts)
        }
    },[loading]);

    function filterTest(value:filterValue,checked:any,postList:ListProps){
        setMjfilteredList(FilteringPost(value,checked,sv))
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
