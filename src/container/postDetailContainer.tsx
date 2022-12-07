import * as React from "react";
import {Component} from "react";
import PostDetail from "../pages/postDetail";
import {postListTest} from "../data/testdata";
import {connect} from "react-redux";

export class PostDetailContainer extends Component{

    render(){
        return(<PostDetail post={postListTest.posts[1]} key={1} />);
    }
}
export default connect(
    null,
    dispatch => ({})
)(PostDetailContainer);