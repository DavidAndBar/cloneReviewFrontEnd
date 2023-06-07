import { useState } from "react"; // We import useState from react to use it to render variables.
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import style from "./style.css";

const Main = () =>{
    const [name, setName] = useState("David");
    const [username, setUsername] = useState("@Davidandbar");
    
    const logIn = () => {
        setName("David");
        setUsername("@Davidandbar");
    }
    
    const logOut = () => {
        setName("");
        setUsername("");
    }


    return <>
        { name === "" ? 
        <><p><button type="button" onClick={logIn}> Log In</button></p></>
        :
        <>
        <Header username = {username} name = {name} logOut = {logOut} />
        <Content />
        <Footer />
        </>}
        </>
}
;

export default Main;