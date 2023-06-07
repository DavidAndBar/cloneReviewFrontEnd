// This file was created as .js at first, but it's really a .jsx to support
// coding merging both javascript and HTML syntax, but it works also as a .js extension.
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main /> {/* This is a comment in jsx, This is not a HTML Tag, it's a component written in jsx*/}
  </React.StrictMode>
);

// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();