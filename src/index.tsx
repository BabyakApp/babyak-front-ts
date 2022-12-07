import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllPostList from "./pages/allPostList";
import PostDetail from "./pages/postDetail";
import {postListTest, noShowEx} from "data/testdata"
import Chatting from "./pages/chatting";
import MyPage from "./pages/myPage";
import MajorPostList from "./pages/majorPostList";
import Posting from "./pages/posting";
import NoshowReportContainer from "./container/noshowReportContainer";
import NoshowReport from "./components/noshowReport";
import GetPost from "./data/getPost";
import Post from "./data/posting";
import PostList from "./components/postList";
import PostFilter from "./data/postFilter";
import PostFilterBar from "./components/postFilterBar";
import {PostDetailContainer} from "./container/postDetailContainer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="postlist" element={<PostList posts={postListTest.posts} userid={4} major={"컴공"} />} />
            <Route path="allpostlist" element={<AllPostList />} />
            <Route path="majorpostlist" element={<MajorPostList major={"컴공"} posts={postListTest.posts} userid={1} />} />
            <Route path="postdetail/:key" element={<PostDetailContainer />} />
            <Route path="chatting" element={<Chatting />} />
            <Route path="mypage" element={<MyPage  babyak={11} major={"음악과 20"} nickname={"붐바음악"} noshow={1}/>} />
            <Route path="posting" element={<Posting />} />
            <Route path="noshow" element={<NoshowReport  users={noShowEx.users}/>} />
            <Route path="filterbar" element={<PostFilterBar />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
