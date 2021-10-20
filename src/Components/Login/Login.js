import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { loginWithGoogle, handleLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const redirectLink =()=>{
        history.push(redirect_url)
    }

    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {

            })
    }
    const getEmail = (e) => {
        setUsername(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const loginwithEmailandPassword = (e) => {
        e.preventDefault();
        handleLogin(username, password,redirectLink);
    }
    return (

        <div className="bg-img">
            <div className="content">
                <header>Login Form</header>
                <form>
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input onBlur={getEmail} type="text" required placeholder="Email " />
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input onBlur={getPassword} type="password" className="pass-key" required placeholder="Password" />
                    </div>
                    <p className="pass text-light">
                        Forgot Password?
                    </p>
                    <div className="field">
                        <input onClick={loginwithEmailandPassword} type="submit" value="LOGIN" />
                    </div>
                </form>
                <div className="login">Or login with</div>
                <div className="links">
                    <Button onClick={handelGoogleLogin} className='google'><i className="fab fa-google me-2"></i>Google</Button>
                </div>
                <div className="signup ">
                    <span>Don't have account?</span>
                    <NavLink className='nav-link' to="/singup">Signup Now</NavLink>
                </div>
            </div>
        </div>

    );
};

export default Login;