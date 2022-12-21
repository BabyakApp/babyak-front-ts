import {Component} from "react";
import NoshowReport from "../components/Noshow/noshowReport";
import {noShowEx} from "../data/testdata";
import {connect} from "react-redux";
import * as React from "react";
import MyPage from "../pages/myPage";
import MenuFooter from "../components/menuFooter";

export class MypageContainer extends Component{
    render() {
        return(<MyPage babyak={11} major={"융콘 20"} nickname={"이화융콘"} noshow={1}/>);
    }
}


export default connect(
    null,
    dispatch => ({})
)(MypageContainer);