import { useState } from "react";

const SignUp = () => {

    const [matchPasswords, setMatchPasswords] = useState(true);

    const submitForm = (e) => {
        e.preventDefault();
        if (e.target.password.value === e.target.confirmpassword.value) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.password.value
            });

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://todolistbackend-db.azurewebsites.net/auth/register", requestOptions)
            .then(response => response.text())
            .then(result => {
                alert("User Created!"); // Let the user know that their user were created.
                window.location.href = '../';}) //Once I get the result I need to redirect the user to the index page.
            .catch(error => console.log('error', error));
        } else {
            setMatchPasswords(false)
        }
    }

    return <>
        <h1> To Do List </h1>
        <form onSubmit={submitForm} method="POST">
            <label htmlFor="name"> Name: </label><br/>
            <input htmlFor="name" id="name" name="name" type="text" required/><br/>
            <label htmlFor="email"> Email: </label><br/>
            <input htmlFor="email" id="email" name="email" type='email' required/><br/>
            <label htmlFor="password"> Password: </label><br/>
            <input htmlFor="password" id="password" name="password" type="password" required minLength={6}/><br/>
            <label htmlFor="confirmpassword"> Confirm Password : </label><br/>
            <input htmlFor="confirmpassword" id="confirmpassword" name="confirmpassword" type="password" required minLength={6}/><br/>
            <> {matchPasswords ? <></> : <p className="password-mismatch"> Passwords Must Match! </p> } </>
            <div>
                <button type="submit" style={{width: "45%"}}> Create Account </button>
                <button type="button" style={{width: "45%"}} onClick={() => window.location.href = '../'}> Back </button>
            </div>
        </form>
    </>
}

export default SignUp;