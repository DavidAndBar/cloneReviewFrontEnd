import { useState } from "react"; // We import useState from react to use it to render variables.
import style from "./style.css";

const Header = ({username, name, logOut}) =>{ // When we have maximum 3 variables we can destructure like this 
    // line, otherwise, as: "const {username, name, logOut} = props;" and we init header: "const Header = (props) {..."
    return <>
    <header className="header">
        <p>Welcome {username} - {name}</p>
        <p><button type="button" onClick={logOut}> Log Out </button></p>
    </header>
    </>
}
;

export default Header;