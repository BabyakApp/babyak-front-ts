
import AllPostList from "../pages/allPostList";
import PostDetail from "../pages/postDetail";
import {ListProps, PostForm} from "../components/postList";
import {noshowcheck} from "../components/noshowReport";
import {noshowProps} from "../components/noshowReport";

export let postListTest:ListProps;
let postEx1:PostForm;
let postEx2:PostForm;
let postEx3:PostForm;
let postEx4:PostForm;
let postEx5:PostForm;
let postEx6:PostForm;
let postEx7:PostForm;
let postEx8:PostForm;
let postEx9:PostForm;
let postEx10:PostForm;
let postEx11:PostForm;

postEx1={
    chatroomid:1,
    chatTitle:"테스트를 위한 글 제목", date:"12.12 월", time:"3", people:4, food:"한식", location:"정문", content:"테스트를 위한 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postEx2={
    chatroomid:2,
    chatTitle:"테스트를 위한 조금 더 긴 글 제목", date:"12.12 월", time:"3", people:3, food:"한식", location:"후문", content:"테스트를 위해서 조금 더 길어진 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공18"
}
postEx3={
    chatroomid:3,
    chatTitle:"테스트를 위해서 엄청나게 길어지는 글 제목", date:"12.12 월", time:"4", people:4, food:"양식", location:"정문", content:"테스트를 위해서 엄청나게 길어지는 글 내용",
    writerNickname:"컴터도리", writerMajor:"융콘20"
}
postEx4={
    chatroomid:4,
    chatTitle:"테스트를 위해서 엄청나게 길어져서 감당하기 힘든 글 제목", date:"12.14 수", time:"3", people:4, food:"한식", location:"기타", content:"테스트를 위해서 엄청나게 길어진 나머지 감당하기 힘들어진 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postEx5={
    chatroomid:5,
    chatTitle:"테스트를 위한 글 제목", date:"12.12 월", time:"3", people:2, food:"중식", location:"정문", content:"테스트를 위한 글 내용",
    writerNickname:"헤헤", writerMajor:"국문20"
}
postEx6={
    chatroomid:6,
    chatTitle:"테스트를 위한 글 제목", date:"12.12 월", time:"3", people:4, food:"한식", location:"후문", content:"테스트를 위한 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postEx7={
    chatroomid:7,
    chatTitle:"테스트를 위한 글 제목", date:"12.12 월", time:"4", people:6, food:"한식", location:"기숙사", content:"테스트를 위한 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postEx8={
    chatroomid:8,
    chatTitle:"테스트를 위한 글 제목", date:"12.13 화", time:"3", people:2, food:"한식", location:"기타", content:"테스트를 위한 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postEx9={
    chatroomid:9,
    chatTitle:"테스트를 위한 글 제목", date:"12.12 월", time:"3", people:4, food:"일식", location:"정문", content:"테스트를 위한 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postEx10={
    chatroomid:10,
    chatTitle:"테스트를 위한 글 제목", date:"12.14 수", time:"4", people:4, food:"한식", location:"정문", content:"테스트를 위한 글 내용",
    writerNickname:"컴터도리", writerMajor:"컴공19"
}
postListTest= {
    userid:1,
    major:"컴공",
    posts: [postEx1, postEx2, postEx3, postEx4, postEx5, postEx6, postEx7, postEx8,postEx9,postEx10]
}

let noshowEx1:noshowcheck = {
    nick:"사과도리",
    id:4,
    noshow:false,
    email:"ex1@ewhain.net"
}
let noshowEx2:noshowcheck  = {
    nick:"둠디음악",
    id:5,
    noshow:false,
    email:"ex2@ewhain.net"
}
let noshowEx3:noshowcheck  = {
    nick:"붐바음악",
    id:6,
    noshow:false,
    email:"ex3@ewhain.net"
}
export let noShowEx:noshowProps = {
    users:[noshowEx1,noshowEx2,noshowEx3]
}