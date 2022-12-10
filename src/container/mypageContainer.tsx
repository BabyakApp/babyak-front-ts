import {Component} from "react";
import NoshowReport from "../components/noshowReport";
import {noShowEx} from "../data/testdata";
import {connect} from "react-redux";
import * as React from "react";
import MyPage from "../pages/myPage";
import MenuFooter from "../components/menuFooter";

export class MypageContainer extends Component{
    render() {
        return(<><MyPage babyak={11} major={"음악과 20"} nickname={"붐바음악"} noshow={1}/>
                <MenuFooter type={2}/>
            </>
        );
    }
}


export default connect(
    null,
    dispatch => ({})
)(MypageContainer);