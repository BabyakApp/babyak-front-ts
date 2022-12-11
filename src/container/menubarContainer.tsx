import {Component} from "react";
import NoshowReport from "../components/noshowReport";
import {noShowEx} from "../data/testdata";
import {connect} from "react-redux";
import * as React from "react";
import MyPage from "../pages/myPage";
import MenuFooter from "../components/menuFooter";

export class MenubarContainer extends Component{
    render() {
        return(
            <MenuFooter type={2}/>
        );
    }
}


export default connect(
    null,
    dispatch => ({})
)(MenubarContainer);