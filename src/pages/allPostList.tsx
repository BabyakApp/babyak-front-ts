import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../components/postBox";
import { PostProps } from "../components/postBox";
import MenuFooter from "../components/menuFooter";
import PostListHeader from "../components/postListHeader";
import PostingButton, {
  PostingButtonContainer,
} from "../container/postingButtonContainer";
import PostList, { ListProps, PostForm } from "../components/postList";
import { postListTest } from "../data/testdata";
import PostListContainer from "../components/postList";
import { connect } from "react-redux";
import GetPost from "../data/getPost";
import NoshowReportContainer from "../container/noshowReportContainer";
import axios from "axios";

let major: string = "컴공";
// let postdata = GetPost().postData;
// let postList:ListProps = {
//     userid: postdata.userid,
//     major: postdata.major,
//     posts:postdata.posts
// };
export default function Component() {
  const [postList, setPostList] = useState<any>([]);

  useEffect(() => {
    axios.get("http://3.36.207.252:8080/post/all").then((res) => {
      setPostList(res.data);
    });
  }, []);
  return (
    <div>
      <PostListHeader major={major} type={false} />
      <PostListContainer
        major={major}
        posts={postList}
        userid={postListTest.userid}
      />
      <PostingButtonContainer />
      <MenuFooter type={0} />
    </div>
  );
}
