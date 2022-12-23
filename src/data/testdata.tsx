
import AllPostList from "../pages/allPostList";
import PostDetail from "../pages/postDetail";
import {ListProps, PostForm} from "../components/PostList/postList";
import {noshowcheck} from "../components/Noshow/noshowReport";
import {noshowProps} from "../components/Noshow/noshowReport";

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
    postid:1,
    title:"정문에서 가볍게 밥드실분",currentPeople:3, meetingDate:"2022.12.12", meetingTime:"3교시", maxPeople:4, preferredFood:"한식", meetingSite:"정문", detail:"정문에서 만나서 밥집 같이 가실분 구해요",
    nickname:"가나다라", major:"융콘19"
}
postEx2={
    postid:2,
    title:"신룽푸 마라탕 먹을 사람",currentPeople:1, meetingDate:"2022.12.13", meetingTime:"3교시", maxPeople:3, preferredFood:"중식", meetingSite:"정문", detail:"정문 앞에 있는 신룽푸 마라탕에서 같이 마라탕 먹을 사람 구합니다! 혹시 이후에 시간되시면 점심 먹은 후에 가볍게 카페가서 커피 마셔도 좋을 것 같아요 :-)",
    nickname:"메추리알", major:"경영21"
}
postEx3={
    postid:3,
    title:"오늘 저녁에 곱창에 소주할 벗모여", currentPeople:2,meetingDate:"2022.12.12", meetingTime:"4교시", maxPeople:4, preferredFood:"기타", meetingSite:"후문", detail:"신촌 황소 곱창 갈건데 소주 맥주 상관없이 반주하장",
    nickname:"물고구마", major:"융콘20"
}
postEx4={
    postid:4,
    title:"야담에서 샐러드 먹을 사람", currentPeople:1,meetingDate:"2022.12.14", meetingTime:"3교시", maxPeople:3, preferredFood:"비건", meetingSite:"정문", detail:"박스퀘어 야담에서 샐러드 같이 먹을 사람 없나",
    nickname:"비타민씨", major:"컴공21"
}
postEx5={
    postid:5,
    title:"윈즈 오운에서 카공할사람",currentPeople:1, meetingDate:"2022.12.12", meetingTime:"3교시", maxPeople:2, preferredFood:"양식", meetingSite:"정문", detail:"녹강 듣는데 같이 공부할 사람 모여랑",
    nickname:"헤헤헤", major:"국문20"
}
postEx6={
    postid:6,
    title:"후문에 식탁에서 밥 같이 먹자",currentPeople:1, meetingDate:"2022.12.12", meetingTime:"3교시", maxPeople:4, preferredFood:"한식", meetingSite:"후문", detail:"식탁에서 가지덮밥이랑 파스타 같이 먹을 사람 들어와",
    nickname:"계란말이", major:"융콘22"
}
postEx7={
    postid:7,
    title:"기숙사에서 김치찜 같이 배달시킬 사람",currentPeople:1, meetingDate:"2022.12.12", meetingTime:"4교시", maxPeople:2, preferredFood:"한식", meetingSite:"기숙사", detail:"더 가득담은 김치찜 같이 시킬 사람 구해요~",
    nickname:"날다람쥐", major:"화신21"
}
postEx8={
    postid:8,
    title:"후문쪽에 존재의 이유 같이 갈사람", currentPeople:1,meetingDate:"2022.12.13", meetingTime:"3교시", maxPeople:2, preferredFood:"한식", meetingSite:"기타", detail:"존재의 이유에서 가볍게 점심 같이 먹을 사람 구합니당",
    nickname:"아이스티", major:"컴공19"
}
postEx9={
    postid:9,
    title:"진선미관 학식 먹자",currentPeople:1, meetingDate:"2022.12.12", meetingTime:"3교시", maxPeople:4, preferredFood:"일식", meetingSite:"정문", detail:"나 한번도 안가봐서 위치를 잘모르는데 알려주고 같이 먹을 사람",
    nickname:"동그라미", major:"컴공19"
}
postEx10={
    postid:10,
    title:"테스트를 위한 글 제목", currentPeople:2,meetingDate:"2022.12.14", meetingTime:"4교시", maxPeople:4, preferredFood:"한식", meetingSite:"정문", detail:"테스트를 위한 글 내용",
    nickname:"포스트잇", major:"컴공19"
}
postListTest= {
    userid:1,
    major:"융콘",
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
let noshowEx4:noshowcheck  = {
    nick:"붐바음악",
    id:6,
    noshow:false,
    email:"ex3@ewhain.net"
}
let noshowEx5:noshowcheck  = {
    nick:"붐바음악",
    id:6,
    noshow:false,
    email:"ex3@ewhain.net"
}
export let noShowEx:noshowProps = {
    users:[noshowEx1,noshowEx2,noshowEx3]
}