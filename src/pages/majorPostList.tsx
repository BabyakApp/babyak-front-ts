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


export function MajorPostList(postList:ListProps) {
    const options = {
        root: document.querySelector('.container'),
        rootMargin: '10px',
        threshold: [0, 0.5, 1]
    }

    return(
        <div>
            <PostListHeader major={postList.major} type={true} />
            <PostListContainer major={"컴공"} posts={postListTest.posts} userid={1} />
            <div><PostingButtonContainer /></div>
            <div>
                <MenuFooter  type={0}/>
            </div>
        </div>
    )
}



export default MajorPostList;
