import * as React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/StyleSetting.module.css";
import GlobalStyles from "../style/GlobalStyles";
import { PostForm } from "./postList";

export interface PostProps {
  post: PostForm;
  key: number;
}

const Button = styled.button`
  width: 341px;
  height: 120px;
  flex-grow: 0;
  margin: 0 6px 0 0;
  padding: 7px 10px 8px 10.7px;

  background-color: #fff;
`;

export function Post(data: any) {
  const [tab, setTab] = useState<string>("view");
  const onClick = () => setTab("click");
  const key = data.key;
  return (
    <div>
      <Link
        to={{
          pathname: `/postdetail`,
        }}
      >
        <button className={styles.PostBox} onClick={onClick}>
          <span>
            <p>
              <span className={styles.PostTitle}>{data.post.title}</span>
              <span className={styles.PostTime}>
                11.23.수 <img src="img/listtimeicon.svg" />{" "}
                {data.post.meetingTime}
              </span>
              <p className={styles.PostContent}>{data.post.detail}</p>
            </p>
            <p>
              <span>
                <img src="img/profile.svg" />
                <span className={styles.PostWriter}>{data.post.nickname}</span>
                <span className={styles.PostMajor}>|{data.post.major}</span>
              </span>
              <span className={styles.PostOption}>
                <img src="img/listpeopleicon.svg" />
                {data.post.currentPeople}/{data.post.maxPeople}
                <img src="img/listlocationicon.svg" />
                {data.post.meetingSite}
                <img src="img/listfoodicon.svg" />
                {data.post.preferredFood}
              </span>
            </p>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Post;
