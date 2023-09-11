

const LogIn = ({isAuth, setIsAuth}) => {
    
    const loginfn = () => {
        //setIsAuth(true);
    }

    const submitForm = (e) => {
        e.preventDefault();
    }

    return <>
    <h1> This is the title in LogIn</h1>
    <form onSubmit={submitForm}>
        <label htmlFor="email"> Email or Username: </label><br/>
        <input htmlFor="email" id="email" name="email" type="text" required/><br/>
        <label htmlFor="password"> Password </label><br/>
        <input htmlFor="password" id="password" name="password" type="password" required/><br/>
        <button type="submit" onClick={loginfn}> Log In </button>
    </form>
    </>
}


export default LogIn;