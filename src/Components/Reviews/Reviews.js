import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        <section id='reviews' className="features">
            <div className="container py-5">
                <div className="row">
                    <div className="section-head col-sm-12">
                        <h4><span className="text-light">Client </span> testimonials</h4>
                        <p className="text-dark">It’s always the word of mouth that’s the best advice. Here are<br />some of ours client testimonials.</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                        <div className="row">
                            <div className="text-lg-end text-center col-lg-6">
                                <img className='w-75 rounded-circle' src="http://medicare.bold-themes.com/cosmetic-surgery/wp-content/uploads/sites/11/2018/03/img-cosmetic-surgery-03.jpg" alt="" />
                            </div>
                            <div className='col-lg-6 text-start'>
                                <h1>
                                    <i className="fas fa-quote-left"></i>
                                </h1>
                                <p>I really love this place. Dr. Hobson is so personable. Her staff is friendly and knowledgeable and I feel so comfortable coming here! Thank you!</p>
                                <h4>Kylie Brett</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                        <div className=" row">
                            <div className="text-lg-end text-center col-lg-6">
                                <img className='w-75 rounded-circle' src="http://medicare.bold-themes.com/cosmetic-surgery/wp-content/uploads/sites/11/2018/03/img-cosmetic-surgery-04.jpg" alt="" />
                            </div>
                            <div className='col-lg-6 text-start'>
                                <h1>
                                    <i className="fas fa-quote-left"></i>
                                </h1>
                                <p>Best experience ever and I have had breast surgery with several other surgeons prior to Dr. Hobson, she exceeded all my expectations. Thanks!</p>
                                <h4>Sonya Harlan</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                        <div className="row">
                            <div className="text-lg-end text-center col-lg-6">
                                <img className='w-75 rounded-circle' src="http://medicare.bold-themes.com/cosmetic-surgery/wp-content/uploads/sites/11/2018/03/img-cosmetic-surgery-05.jpg" alt="" />
                            </div>
                            <div className='col-lg-6 text-start'>
                                <h1>
                                    <i className="fas fa-quote-left"></i>
                                </h1>
                                <p>Dr. Clarkson is an amazing man and doctor. He has neen my doctor for over 25 years. She cares about his patients and ensures excellence.</p>
                                <h4>Bridgette Starr</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;