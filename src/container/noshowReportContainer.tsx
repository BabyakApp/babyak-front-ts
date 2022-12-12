import * as React from "react";
import {Component, useState} from "react";
import NoshowReport from "../components/noshowReport";
import {connect} from "react-redux";
import {noShowEx} from "../data/testdata"
import NoshowSubmit from "../components/noshowSubmit";

export class NoshowReportContainer extends Component{
    render() {
        return(
            <NoshowReport users={noShowEx.users}/>);
    }
}


export default connect(
    null,
    dispatch => ({})
)(NoshowReportContainer);