import * as React from "react";
import AllPostList from "./allPostList";
import {NoshowReportContainer} from "../container/noshowReportContainer";
import {PostDetailContainer} from "../container/postDetailContainer";
import {MypageContainer} from "../container/mypageContainer";
import NoshowSubmit from "../components/Noshow/noshowSubmit";


export function NoshowModal(){
    return(
        <div>
            <NoshowReportContainer />
            <AllPostList />
        </div>)
}

export default NoshowModal;