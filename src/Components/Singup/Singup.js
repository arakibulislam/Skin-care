import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Singup.css'
import search from '../../images/search.png'

const Singup = () => {
    const { handleRegistration,  error,loginWithGoogle } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const getName = e => {
        setName(e.target.value);
    }
    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPassword = e => {
        setPassword(e.target.value);
    }

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const redirectLink =()=>{
        history.push(redirect_url)
    }

    const singupEmailandPasswoird=(e)=>{
        e.preventDefault();
        handleRegistration(name, email, password, redirectLink);
       

    }


    return (
        <div className="bg-img">
            <div className="content">
                <header>Sing Up Form</header>
                <form onSubmit={singupEmailandPasswoird}>
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input onBlur={getName} type="text" required placeholder="Name " />
                    </div>
                    <div className="field space">
                        <span className="fa fa-user"></span>
                        <input onBlur={getEmail} type="text" required placeholder="Email " />
                    </div>
                    <div className="field space">
                        <span className="fa fa-lock"></span>
                        <input onBlur={getPassword} type="password" className="pass-key" required placeholder="Password" />
                    </div>
                    <div className='mt-4 text-danger'>
                        <h5>
                            {error}
                        </h5>
                    </div>
                    <div className="field mt-4">
                        <input className='bt' type="submit" value="Sing Up" />
                    </div>
                </form>
                <div className="login">Or sing up with</div>
                <div className="links">
                <Button onClick={loginWithGoogle} className='google btn-light d-flex justify-content-center align-items-center'> <img className='me-3' src={search} alt="" /> <span className='fs-5 '>Google</span></Button>
                </div>
                <div className="signup ">
                    <span>Already Sing Up ?</span>
                    <NavLink className='nav-link fs-5 text-info' to="/login">Log In Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Singup;