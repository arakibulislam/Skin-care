import React from 'react';
import { NavLink } from 'react-router-dom';
import OurServices from '../../hooks/OurServices';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [services] = OurServices();
    return (
        <div>
            <section id='home' className="bg-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="banner_content text-start">
                                <h4>Go with confidence</h4>
                                <h2>Feel better in your skin</h2>
                                <p>TIntroducing new concentrated hyaluron filler, ideal for all non invasive skin interventions. Click to read more about our offers and services.</p>

                                <NavLink to="/appoinment"><button type="button" className="main-btn my-3">
                                    Take Appoinment
                                </button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div className='row'>
                    <div className="section-head col-sm-12 mt-5">
                        <h4><span>Our</span> Services</h4>
                        <p>
                        Helping you discover healthy, pure glowing skin and a beautiful body using customized results-driven <br className="d-lg-block d-none" />treatment strategy that will leave you looking as young as you feel.
                        </p>
                    </div>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </div>
            </div>
            <Reviews></Reviews>
        </div>


    );
};

export default Home;