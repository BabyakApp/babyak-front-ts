import * as React from "react";
import {getPost, posting} from "./api";
import {Component, useEffect, useState} from "react";
import axios from "axios";
import {ListProps, PostForm} from "../components/postList";



async function GetPostData(){
    const [loading, setLoading] = useState(false);
    setLoading(true);
    try {
        let response = await axios.get("http://localhost:8080/AllList")
            .then((res) => {
                console.log("api response:", res.data)
                setLoading(false);
                return res.data;
            })
            .catch(err => console.log(err))
        setLoading(false);
    } catch (e) {
        console.log("api error")
    }
    return null
}

export function GetPost(){
    const [load, setLoad] = useState(false);
    const [result, setResult] = useState(null);
    console.log("getpost start")
    try {
        let promise:Promise<any> = GetPostData()
            .then((result)=>{
                console.log(result)
                return result;
            })
            .catch(err => console.log(err))
    }catch (e) {
        setResult(null);
        return<div>error</div>
    }
    if(result!=null){
        setLoad(false);
        console.log("result는",result)
    }
    return<div>none result</div>


}

export default GetPost;