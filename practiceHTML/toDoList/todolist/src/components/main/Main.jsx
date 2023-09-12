import { useState } from 'react'; // We import useState from react to use it to render variables.
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from '../private/home/home.jsx';
import Index from '../public/LogIn.jsx';
import SignUp from '../public/SignUp.jsx';

const Main = () =>{

    const [isAuth, setIsAuth] = useState(false)

    return <>
            <BrowserRouter>
                <Routes>
                    {
                        isAuth ? <> <Route path="/" element={<Home isAuth={isAuth} setIsAuth={setIsAuth}/>} /></>: 
                        <>
                        <Route path="/" element={<Index isAuth={isAuth} setIsAuth={setIsAuth}/>} />
                        <Route path="/signUp" element={<SignUp />}/>
                        </>
                    }
                </Routes>
            </BrowserRouter>
        </>
};

export default Main;