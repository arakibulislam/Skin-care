import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import errorImage from '../../images/404.png'

const PageNotFound = () => {
    return (
        <div className=''>
            <img className='w-75' src={errorImage} alt="" />
            
            <NavLink className='nav-link mb-5' to="/home"><Button className='btn-info'>Back Home</Button></NavLink>
        </div>
    );
};

export default PageNotFound;