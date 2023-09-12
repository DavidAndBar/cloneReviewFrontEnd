const SignUp = () => {
    return <>
        <h1> This is the view from Sign Up </h1>
        <form>
            <label htmlFor="name"> Name: </label><br/>
            <input htmlFor="name" id="name" name="name" type="text" required/><br/>
            <label htmlFor="email"> Email: </label><br/>
            <input htmlFor="email" id="email" name="email" type='email' required/><br/>
            <label htmlFor="password"> Password: </label><br/>
            <input htmlFor="password" id="password" name="password" type="password" required/><br/>
            <label htmlFor="confirmpassword"> Confirm Password : </label><br/>
            <input htmlFor="confirmpassword" id="confirmpassword" name="confirmpassword" type="password" required/><br/>
            <button type="submit"> Create Account </button>
        </form>
    </>
}

export default SignUp;