import { useState } from "react"; // We import useState from react to use it to render variables.
import {Link, Route, BrowserRouter} from "react-router-dom";
import Index from "./../public/index/Index";
import Login from "./../public/login/Login";
import SignUp from "./../public/signup/SignUp";
import PasswordRecovery from "./../public/passwordrecovery/PasswordRecovery";


import style from "./style.css";

const Main = () =>{

    return <>
            <BrowserRouter>
                <ul>
                    <li><Link to="/"> Index </Link> </li>
                    <li><Link to="/login"> Login </Link> </li>
                    <li><Link to="/signUp"> Sign Up</Link> </li>
                    <li><Link to="/passwordRecovery"> Password recovery </Link> </li>
                </ul>
                <Route path="/">
                    <Index />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signUp">
                    <SignUp />
                </Route>
                <Route path="/passwordRecovery">
                    <PasswordRecovery />
                </Route>
                
            </BrowserRouter>
        </>
}
;

export default Main;