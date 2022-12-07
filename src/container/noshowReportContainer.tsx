import * as React from "react";
import {Component} from "react";
import NoshowReport from "../components/noshowReport";
import {connect} from "react-redux";
import {noShowEx} from "../data/testdata"

export class NoshowReportContainer extends Component{
    render() {
        return(<NoshowReport  users={noShowEx.users}/>);
    }
}


export default connect(
    null,
    dispatch => ({})
)(NoshowReportContainer);