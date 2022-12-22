import * as React from "react";
import styles from "../style/StyleSetting.module.css";
import {Link} from "react-router-dom";
import {Component} from "react";
import {connect} from "react-redux";
import PostingButton from "../components/PostList/postingButton";


export class PostingButtonContainer extends Component{
    render() {
        return (
            <PostingButton />
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
    })
)(PostingButtonContainer);