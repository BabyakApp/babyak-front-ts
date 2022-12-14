import * as React from "react";
import {Component, useState} from "react";
import {connect} from "react-redux";
import PostList, {ListProps, PostForm} from "../components/PostList/postList";

import {postListTest} from "../data/testdata";
import PostFilterBar from "../components/PostList/postFilterBar";
import FilteringPost from "../data/filteringPost";

// let postListEx:ListProps;
// let postEx:PostForm;
// postEx={
//     chatroomid:12,
//     chatTitle:"굿바이 슈가베어에서 비건할 사람!", time:"3", people:4, food:"한식", location:"정문", date:"월",
//     content:"벗들 굿바이 슈가베어에서 같이 점심 먹어요! 제 베스트 메뉴는 병아리콩 들어간 시머링 왈츠예요. 혹시 시간되시면 점심 먹은 후에 가볍게 카페가서 커피 마셔도 좋을것같아요 :-)",
//     writerNickname:"컴터도리", writerMajor:"컴공19"
// }
// postListEx= {
//     userid:1,
//     major:"컴공",
//     posts: [postEx]
// }




export class PostListContainer extends Component{
    render() {
        return <div>
            <PostList posts={postListTest.posts} userid={1} major={"컴공"} />
        </div>
    }
}

export default connect(
    null,
    dispatch => ({})
)(PostListContainer);