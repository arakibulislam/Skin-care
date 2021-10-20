import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import OurServices from '../../hooks/OurServices';
import './Service.css'

const Service = () => {
    const { serviceId } = useParams();
    const [services] = OurServices();
    const [singleData] = services.filter(single => single.id == serviceId)

    return (
        <div key={singleData?.id}>
            <div style={{ backgroundImage: `url(${singleData?.bannerImg})` }}
                className=" banner">
                <Container>
                    <div className="row">
                        <div className='col-lg-6 lg-12 text-start text-light py-5 '>
                            <div className='banner-text my-5 p-4'>
                                <h1>
                                    {singleData?.title}
                                </h1>
                                <h5>
                                    {singleData?.titelDetails}
                                </h5>
                                <h4 className='my-3'>
                                    <small>from</small>{singleData?.price}
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
                    Our customers say Excellent
                </h5>
                <h5 className='text-danger mx-3' > <Rating initialRating={singleData?.rating.rate} readonly emptySymbol="far fa-star"
                    fullSymbol="fa fa-star"
                /> </h5>
                <h5>
                    {singleData?.rating.rate} out of 5
                </h5>
                <h5>
                    based on {singleData?.rating.count} reviews
                </h5>
                <img className='review ms-lg-3 mx-lg-0 mx-auto' src={'https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg'} alt="" />
            </div>
            <div className='d-flex flex-lg-row flex-column justify-content-around py-4 bg-light shadow text-center container-fluid'>
                <h4 className='fw-light d-flex align-items-center'>
                    <i className="far fa-check-circle fs-1 text-primary me-4"></i> {singleData?.summary.one}
                </h4>
                <h4 className='fw-light d-flex align-items-center'>
                    <i className="far fa-check-circle fs-1 text-primary me-4"></i> {singleData?.summary.two}
                </h4>
                <h4 className='fw-light d-flex align-items-center'>
                    <i className="far fa-check-circle fs-1 text-primary me-4"></i> {singleData?.summary.three}
                </h4>
            </div>
            <div className='my-5 text-start container'>
                <h2>
                    Botox before & after results
                </h2>
                <div className='d-flex flex-lg-row flex-column'>
                    <img className='w-50 me-3 mb-lg-0 mb-3' src={singleData?.beforAfterImg} alt="" />
                    <img className='w-50' src={singleData?.beforAfterImg1} alt="" />
                </div>

                <h1 className='my-5'>
                    {singleData?.title}
                </h1>
                <h2 className='my-3'>
                    {singleData?.details.subTitelA}
                </h2>
                <p>
                    {singleData?.details.detailA}
                </p>
                <h2 className='mt-5 mb-3'>
                    {singleData?.details.subTitelB}
                </h2>
                <p className='fw-light d-flex align-items-center'>
                    <i className="fas fa-check fs-2 me-4"></i>  {singleData?.details.detailB.a}
                </p>
                <p className='fw-light d-flex align-items-center'>
                    <i className="fas fa-check fs-2 me-4"></i>  {singleData?.details.detailB.b}
                </p>
                <p className='fw-light d-flex align-items-center'>
                    <i className="fas fa-check fs-2 me-4"></i>  {singleData?.details.detailB.c}
                </p>
                <p className='fw-light d-flex align-items-center'>
                    <i className="fas fa-check fs-2 me-4"></i>  {singleData?.details.detailB.d}
                </p>
            </div>
        </div>
    );
};

export default Service;