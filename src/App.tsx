import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mainImage from "./mainImage.png";
import Post from "./components/postBox";
import AllPostList from "./pages/allPostList";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <div className="App">
      <img className="mainImage" src={mainImage} alt="mainImage" />
    </div>
  );
}

export default App;
