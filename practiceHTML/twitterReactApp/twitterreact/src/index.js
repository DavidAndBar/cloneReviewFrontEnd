// This file was created as .js at first, but will be modified to be .jsx to support
// coding merging both javascript and HTML syntax.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* This is a comment in jsx, This is not a HTML Tag, it's a component written in jsx*/}
  </React.StrictMode>
);

// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();