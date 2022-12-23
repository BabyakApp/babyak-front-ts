import React, {Component, useCallback, useEffect, useState} from "react";
import styled from 'styled-components';
import Post from "../components/PostList/postBox";
import {PostProps} from "../components/PostList/postBox";
import MenuFooter from "../components/menuFooter";
import PostListHeader from "../components/PostList/postListHeader";
import PostingButton, {PostingButtonContainer} from "../container/postingButtonContainer";
import PostList, {ListProps, PostForm} from "../components/PostList/postList";
import {postListTest} from "../data/testdata";
import PostListContainer from "../components/PostList/postList";
import {connect} from "react-redux";
import GetPost from "../data/getPost";
import NoshowReportContainer from "../container/noshowReportContainer";
import PostFilterBar, {filterValue} from "../components/PostList/postFilterBar";
import FilteringPost from "../data/filteringPost";
import {GetPostListData, jsontoForm} from "../data/api";
import EndTime from "../data/endTime";
import axios from "axios";

// let postdata = GetPost().postData;
// let postList:ListProps = {
//     userid: postdata.userid,
//     major: postdata.major,
//     posts:postdata.posts
// };
export function AllPostList(){
    const [filteredList, setFilteredList] = useState(postListTest)
    const [res, setRes] = useState(null);
    const [sv, setSv] = useState(postListTest)
    const [loading, setLoading] = useState(true);

    let resonse = useEffect(() => {
        GetPostListData().then((response)=>{
            setRes(response)
            setLoading(false)
            return response
        })
        if(res){
            let posts:ListProps = jsontoForm(res);
            setFilteredList(posts)
            setSv(posts)
        }
        console.log("filtered",filteredList)
        },[loading]);


    function filterTest(value:filterValue,checked:any,postList:ListProps){
            let newpostList = FilteringPost(value,checked,sv)
            setFilteredList(newpostList)
    }

    return(
        <div>
            <PostListHeader major={filteredList.major} type={false} />
            <PostFilterBar propFunction={filterTest} postlist={filteredList.posts} />
            <PostListContainer major={filteredList.major} posts={filteredList.posts} userid={postListTest.userid} />
            <PostingButtonContainer />
            <MenuFooter type={0}/>
        </div>
    )

}

export default AllPostList;

