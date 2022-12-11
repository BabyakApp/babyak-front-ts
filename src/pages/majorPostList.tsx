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


export function MajorPostList(postList:ListProps) {
    const newpostList = MajorPost(postList);

    return(
        <div>
            <PostListHeader major={postList.major} type={true} />
            <PostListContainer major={"컴공"} posts={newpostList.posts} userid={1} />
            <div><PostingButtonContainer /></div>
            <div>
                <MenuFooter type={0}/>
            </div>
        </div>
    )
}



export default MajorPostList;
