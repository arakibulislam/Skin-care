import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './About.css'
import Rating from 'react-rating';

const About = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctorData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div style={{ backgroundImage: `url("https://cosmedics-s3-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/08/25094747/doc-min-scaled.jpg")` }}
                className=" banner">
                <Container>
                    <div className="row">
                        <div className='col-lg-6 lg-12 text-start text-light py-5 '>
                            <div className='banner-text my-5 p-4'>
                                <h1>
                                    Skin Doctors at Cosmedics
                                </h1>
                                <h4 className='my-3'>
                                    Highly qualified and experienced skin treatment doctors and surgeons
                                </h4>
                                <Button className='me-4 mb-4 p-3 button-blue'><i className="fas fa-phone-alt me-2"></i>Call Us Now</Button>
                                <NavLink to="/appoinment"><Button className='btn-primary mb-4 p-3'><i className="fas fa-calendar-week me-2"></i>Book Online</Button></NavLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='d-flex flex-lg-row flex-column justify-content-center py-4 bg-light shadow-sm text-center'>
                <h5 >
                    Our customers say <b>Excellent</b>
                </h5>
                <h5 className='text-danger mx-3' > <Rating initialRating={4.5} readonly emptySymbol="far fa-star"
                    fullSymbol="fa fa-star"
                /> </h5>
                <h5>
                    4.5 out of 5
                </h5>
                <h5>
                    based on {600} reviews
                </h5>
                <img className='review ms-lg-3 mx-lg-0 mx-auto' src={'https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg'} alt="" />
            </div>
            <div className='d-flex flex-lg-row flex-column justify-content-around py-4 bg-light shadow text-center container-fluid'>
                <h4 className='fw-light d-flex align-items-center'>
                    <i className="far fa-check-circle fs-1 text-primary me-4"></i> Highly qualified and experienced
                </h4>
                <h4 className='fw-light d-flex align-items-center'>
                    <i className="far fa-check-circle fs-1 text-primary me-4"></i> Skin treatment doctors and surgeons
                </h4>
                <h4 className='fw-light d-flex align-items-center'>
                    <i className="far fa-check-circle fs-1 text-primary me-4"></i> 24/7 Hour Support
                </h4>
            </div>
            <Container className='my-5 pt-lg-5 pt-0'>
                <div className='row'>
                    <h3 className='col-lg-5 col-12 mb-lg-0 mb-4'>
                        Cosmedics was established by Dr Ross Perry to provide the latest non-surgical, dermatology, skincare and facial rejuvenation treatments for women and men.
                    </h3>
                    <p className='col-lg-7 col-12'>
                        Our team includes expert and highly experienced skin doctors, led by Dr Ross Perry, who founded the company in 2003 and ensures that high standards are delivered throughout our clinics. <br /> <br /> Cosmedics’ team of skin doctors are now recognised as one of the best in aesthetic and medical skin treatments, with 5 clinics in London and the Home Counties. <br /> <br /> Dr Ross Perry is regularly invited to comment by the media.
                    </p>
                </div>
            </Container>
            <div className='my-5 py-4 shadow-lg'>
                <h5 className='bg-danger text-center mx-auto text-light rounded-3 my-1 py-4 w-25 inline'>
                    Our Doctors
                </h5>
            </div>
            <Container className='my-5 pt-lg-5 pt-2'>
                <CardGroup className='row mt-4 mb-5'>
                    {
                        doctors.map(doctor => <div key={doctor.id} className='col-lg-3 col-12  mb-5'>
                            <Card className='h-100 text-center border-0 w-75 mx-auto'>
                                <div className=''>
                                    <Card.Img className='img-fluid rounded-circle' variant="top" src={doctor.img} />
                                </div>
                                <Card.Body>
                                    <Card.Title className='blog-titel'>{doctor.name}</Card.Title>
                                    <Card.Text>
                                        <i className="fas fa-user-edit me-2 text-dark"></i>  {doctor.education}
                                    </Card.Text>
                                    <Card.Text>
                                        <i className="fas fa-calendar me-2"></i>  {doctor.type}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                    }  
                </CardGroup>
            </Container>

        </div>
    );
};

export default About;