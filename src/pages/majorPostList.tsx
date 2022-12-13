import React, {useCallback, useEffect, useState} from "react";
import styled from 'styled-components';
import Post from "../components/postBox";
import {PostProps} from "../components/postBox";
import MenuFooter from "../components/menuFooter";
import PostListHeader from "../components/postListHeader";
import PostingButton, {PostingButtonContainer} from "../container/postingButtonContainer";
import {postListTest} from "../data/testdata";
import PostList, {ListProps} from "../components/postList";
import PostListContainer from "../components/postList";
import MajorPost from "../data/majorPost";
import PostFilterBar, {filterValue} from "../components/postFilterBar";
import FilteringPost from "../data/filteringPost";


export function MajorPostList() {
    let postList:ListProps = {major:"컴공", posts:postListTest.posts, userid:1}
    const newpostList = MajorPost(postList);
    let [mjfilteredList, setMjfilteredList] = useState(newpostList)
    function filterTest(value:filterValue,checked:any,postList:ListProps){
        setMjfilteredList(FilteringPost(value,checked,mjfilteredList))
    }
    return(
        <div>
            <PostListHeader major={postList.major} type={true} />
            <PostFilterBar propFunction={filterTest} postlist={newpostList} />
            <PostListContainer major={"컴공"} posts={mjfilteredList.posts} userid={1} />
            <PostingButtonContainer />
            <MenuFooter type={0}/>
        </div>
    )
}



export default MajorPostList;
