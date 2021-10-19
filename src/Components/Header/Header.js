import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/healthcare-2.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                <Container>
                    <Navbar.Brand >
                        <NavHashLink to="/home#home" className='nav-link d-flex align-items-center' >
                        <img src={logo} alt="" />
                        <h3 className='ms-3 logo-text'>
                            <span className='logo-text-1'>SKIN</span>CLINICS
                        </h3>
                        </NavHashLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-lg-auto text-start ms-lg-0 ms-4">
                            <NavHashLink className='nav-link fw-bold fs-5 section' to="/home#home">Home</NavHashLink>
                            <NavHashLink className='nav-link fw-bold fs-5 section' to="/home#services">Services</NavHashLink>
                            <NavHashLink className='nav-link fw-bold fs-5 section'  to="/home#reviews">Reviews</NavHashLink>
                            <NavLink className='nav-link fw-bold fs-5 section' to="/blogs">Blogs</NavLink>
                            <NavLink className='nav-link fw-bold fs-5 section' to="/appoinment">Appoinment</NavLink>

                        </Nav>
                        <Nav className='d-flex align-items-lg-center align-items-start ms-lg-0 ms-4'>
                            
                            <p className='text-dark mt-3 me-3'>
                                {user.displayName}
                            </p>
                            <img className='user-img me-2 rounded-circle' src={user.photoURL} alt="" />
                            {!user?.email ? <NavLink className='nav-link me-2' to="/login"><i className="fas fa-user me-2"></i>Log In</NavLink> : <Button variant="outline-dark" onClick={logOut}><i className="fas fa-sign-out-alt me-2"></i>Logout</Button>}
                            <NavLink className='nav-link' to="/singup">
                                <Button className='button'>Sing Up</Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;