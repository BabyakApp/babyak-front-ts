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
import NoshowReport from "./components/Noshow/noshowReport";
import GetPost from "./data/getPost";
import Post from "./data/posting";
import PostList from "./components/PostList/postList";
import PostFilterBar from "./components/PostList/postFilterBar";
import {PostDetailContainer} from "./container/postDetailContainer";
import {MypageContainer} from "./container/mypageContainer";
import NoshowModal from "./pages/noshowModal";
import NoshowSubmit from "./components/Noshow/noshowSubmit";
import {PostListContainer} from "./container/postListContainer";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="post" element={<AllPostList />} />
            <Route path="postdetail" element={<PostDetailContainer />} />
            <Route path="majorpost" element={<MajorPostList />} />
            <Route path="chatting" element={<Chatting />} />
            <Route path="mypage" element={<MypageContainer />} />
            <Route path="posting" element={<Posting />} />
            <Route path="noshow" element={<NoshowReport users={noShowEx.users}/>} />
            <Route path="noshowmodal" element={<NoshowModal />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
