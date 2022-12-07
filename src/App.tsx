import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./components/postBox";
import AllPostList from "./pages/allPostList";
import {BrowserRouter, Route} from "react-router-dom";
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
