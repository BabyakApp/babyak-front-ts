import * as React from "react";
import {Component} from "react";
import PostDetail from "../pages/postDetail";
import {postListTest} from "../data/testdata";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

export function PostDetailContainer(){
    const location = useLocation();
    const detailPost = location.state?.post;
    return(<PostDetail post={detailPost} key={1} />);

}