import React, {Component, useCallback, useEffect, useState} from "react";
import styled from 'styled-components';
import Post from "../components/postBox";
import {PostProps} from "../components/postBox";
import MenuFooter from "../components/menuFooter";
import PostListHeader from "../components/postListHeader";
import PostingButton, {PostingButtonContainer} from "../container/postingButtonContainer";
import PostList, {GetPostListData, jsontoForm, ListProps, PostForm} from "../components/postList";
import {postListTest} from "../data/testdata";
import PostListContainer from "../components/postList";
import {connect} from "react-redux";
import GetPost from "../data/getPost";
import NoshowReportContainer from "../container/noshowReportContainer";
import PostFilterBar, {filterValue} from "../components/postFilterBar";
import FilteringPost from "../data/filteringPost";

// let postdata = GetPost().postData;
// let postList:ListProps = {
//     userid: postdata.userid,
//     major: postdata.major,
//     posts:postdata.posts
// };
export function AllPostList(){
    const [filteredList, setFilteredList] = useState(postListTest)
    const [result, setResult] = useState(null);
    // let res = GetPostListData().then((response)=>{
    //         setResult(response)
    //         return response
    //     }
    // );
    // if(result){
    //     let posts:ListProps = jsontoForm(result);
    //     setFilteredList(posts)
    // }
    function filterTest(value:filterValue,checked:any,postList:ListProps){
        postList = FilteringPost(value,checked,filteredList)
        console.log(postList)
        setFilteredList(postList)
    }

    return(
        <div>
            <PostListHeader major={filteredList.major} type={false} />
            <PostFilterBar propFunction={filterTest} postlist={postListTest.posts} />
            <PostListContainer major={filteredList.major} posts={filteredList.posts} userid={postListTest.userid} />
            <PostingButtonContainer />
            <MenuFooter type={0}/>
        </div>
    )

}

export default AllPostList;
