import { useState } from 'react'; // We import useState from react to use it to render variables.
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from '../private/home/home.jsx';
import Index from '../public/LogIn.jsx';
import SignUp from '../public/SignUp.jsx';

const Main = () =>{

    const [isAuth, setIsAuth] = useState(false)
    const [users, setUsers] = useState([{}])

    // Make the request to the backend for the users information.
    
    const requestOptions = {
        method: 'GET',
    };
    
    const butFn = () => {fetch("http://localhost:3200/api/getall", requestOptions)
        .then(response => response.json())
        .then(result => setUsers(result))
        .catch(error => console.log('error', error));}


    return <>
            <>{JSON.stringify(users)}</>
            <button onClick={butFn}> but </button>
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