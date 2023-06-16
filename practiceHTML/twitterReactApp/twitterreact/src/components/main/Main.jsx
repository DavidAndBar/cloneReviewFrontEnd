import { useState } from "react"; // We import useState from react to use it to render variables.
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Index from "./../public/index/Index";
import Login from "./../public/login/Login";
import SignUp from "./../public/signup/SignUp";
import PasswordRecovery from "./../public/passwordrecovery/PasswordRecovery";
import Home from "./../private/home/Home"


const Main = () =>{

    const [isAuth, setIsAuth] = useState(false)

    return <>
            <BrowserRouter>
                <Routes>
                    {
                        isAuth ? <> <Route path="/" element={<Home />} /></>: <>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/passwordRecovery" element={<PasswordRecovery />} />                        
                        </>
                    }
                </Routes>
            </BrowserRouter>
        </>
};

export default Main;