import React from 'react';
import './Footer.css'
import logo from '../../images/healthcare-2.png'

const Footer = () => {
    return (
        <section className="footer" id="contact">
            <footer>
                <div className="footer_box">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="widget-about">
                                        <div className='d-flex align-items-center'>
                                            <img src={logo} alt="" />
                                            <h3 className='ms-3 logo-text'>
                                                <span className='logo-text-1'>SKIN</span>CLINICS
                                            </h3></div>
                                        <p className="pt-4 text-left px-lg-3">
                                        Please fill in your details and our skin advisors will call you back to give you more information.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-menu text-start">
                                        <h4 className="footer-widget-title ">Useful Links</h4>
                                        <ul>
                                            <li>About</li>
                                            <li>FAQ</li>
                                            <li>Career</li>
                                            <li>Our Team</li>
                                            <li>Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-menu text-start">
                                        <h4 className="footer-widget-title">Quick Links</h4>
                                        <ul>
                                            <li>Treatments</li>
                                            <li>Pricing</li>
                                            <li>Conditions</li>
                                            <li>Skin Clinics</li>
                                            <li>About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-menu p-o widget-about">
                                        <h4 className="footer-widget-title">Newsletter</h4>
                                        <div className="input-group">
                                            <input type="text" name="news-letter" className="form-control" placeholder="Your Email" />
                                            
                                        </div>
                                        <ul className="contact-details pt-4">
                                            <li>
                                                <i className="fa fa-phone"></i>
                                                011-26242628
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope"></i>
                                                skinclinic@gmail.com
                                            </li>
                                        </ul>
                                        <ul className="social_icons">
                                            <li><i className="fab fa-facebook-f"></i></li>
                                            <li><i className="fab fa-twitter"></i></li>
                                            <li><i className="fab fa-instagram"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mini-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-text">
                                    <p>© 2021
                                        <span className='text-light'> SKIN CLINIC. </span>  All rights reserved. Created by
                                        <span className='text-light'> RAKIBUL ISLAM</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;