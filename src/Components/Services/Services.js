import React from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    const {id, serviceNmae, thumbnail, titelDetails, price } = props.service;
    return (
        <div id="services" className="col-lg-3 col-sm-6 service-box h-100">
            <div className="service-item">
                <figure>
                    <img src={thumbnail} className="img-fluid" alt="" />
                    <figcaption>
                        <div className="inner-text">
                            <NavLink className='nav-link boxed-btn' to={`/service/${id}`}>Book Now</NavLink>
                        </div>
                    </figcaption>
                </figure>
                <h5 className="pt-2">{serviceNmae.slice(0, 20)}</h5>
                <p className="py-2">{titelDetails.slice(0, 70)}</p>
                <p className="service-price">${price}</p>
            </div>
        </div>
    );
};

export default Services; 