import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Singup.css'

const Singup = () => {
    const { handleRegistration, handleEmail, handlePassword, handleName, error,loginWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from;

    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(error => {

            })
    }
    return (
        <div className="bg-img">
            <div className="content">
                <header>Sing Up Form</header>
                <form onSubmit={handleRegistration}>
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input onBlur={handleName} type="text" required placeholder="Name " />
                    </div>
                    <div className="field space">
                        <span className="fa fa-user"></span>
                        <input onBlur={handleEmail} type="text" required placeholder="Email " />
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input onBlur={handlePassword} type="password" className="pass-key" required placeholder="Password" />
                    </div>
                    <div>
                        <h5>
                            {error}
                        </h5>
                    </div>
                    <div className="field mt-4">
                        <input type="submit" value="Sing Up" />
                    </div>
                </form>
                <div className="login">Or sing up with</div>
                <div className="links">
                    <Button onClick={handelGoogleLogin} className='google'><i className="fab fa-google me-2"></i>Google</Button>
                </div>
                <div className="signup ">
                    <span>Already Sing Up ?</span>
                    <NavLink className='nav-link' to="/login">Log In Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Singup;