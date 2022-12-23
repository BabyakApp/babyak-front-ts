import React from 'react';
import logo from './logo.svg';
import './App.css';
import mainImage from "./mainImage.png";
import { Link } from "react-router-dom";
import styles from "style/LoginStyles.module.css";
import { imageListClasses } from "@mui/material";
import Post from "./components/PostList/postBox";
import AllPostList from "./pages/allPostList";
import {BrowserRouter, Route} from "react-router-dom";
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <div className="App">
      <div>
        <img className="mainImage" src={mainImage} alt="mainImage" />
      </div>
      <div className={styles.googleLoginButton}>
        <a href="http://3.36.207.252:8080/oauth/google">
          <img src={`img/googleLoginButton.svg`} />
        </a>
      </div>
    </div>
  );
}

export default App;
