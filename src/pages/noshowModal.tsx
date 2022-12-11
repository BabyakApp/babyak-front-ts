import * as React from "react";
import AllPostList from "./allPostList";
import {NoshowReportContainer} from "../container/noshowReportContainer";
import {PostDetailContainer} from "../container/postDetailContainer";
import {MypageContainer} from "../container/mypageContainer";


export function NoshowModal(){
    return(
        <div>
            <NoshowReportContainer />
            <MypageContainer />
        </div>)
}

export default NoshowModal;