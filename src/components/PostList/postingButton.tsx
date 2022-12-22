import * as React from "react";
import styles from "../../style/StyleSetting.module.css";
import {PostingButtonContainer} from "../../container/postingButtonContainer";
import {Link} from "react-router-dom";

export function PostingButton(){
    return<div className={styles.PostingButton}>
        <Link to="/posting"><img src="img/postingbutton.svg"/></Link>
    </div>
};

export default PostingButton;