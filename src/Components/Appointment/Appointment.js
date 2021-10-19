import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Appoinment.css'

const Appointment = () => {
    const { user } = useAuth();
    const [appointment, setAppointment] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name } = data;
        setAppointment(data)
    };
    return (
        <div>
            <div style={{ backgroundImage: `url("https://cosmedics-s3-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/05/19100725/top-scaled.jpg")` }}
                className=" banner">
                <Container>
                    <div className="row">
                        <div className='col-lg-6 lg-12 text-start text-light py-5 '>
                            <div className='banner-text my-5 p-4'>
                                <h1>
                                Book Online Now
                                </h1>
                                <h4 className='my-3'>
                                Or Call to Book
                                </h4>
                            </div>
                            <Button className='me-4 mb-4 p-3 button-blue'><i className="fas fa-phone-alt me-2"></i>Call Us Now</Button>
                        </div>
                    </div>
                </Container>
            </div>

            <section className="container my-5" id="about">
                <div className="row gx-lg-5">
                    <div className="col-12 col-md-6">
                        <img style={{ border: "10px solid #0d5796" }} className="img-fluid" src="https://cosmedics-s3-bucket.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/05/16122011/dr-ross-perry.jpg" alt="" />
                    </div>

                    <div className="col-12 col-md-6">
                        <h3 className='appoinment-tag text-center'>Request an Appointment</h3>
                        <p className="my-4 lead">Complete the request form, and we'll reach out to you shortly to schedule your appointment.
                        </p>


                        {
                            appointment?.email ?
                                <div className="card bg-dark text-white">
                                    <div className="card-body">
                                        <h5 className="card-title text-center  mb-5">Your Appointment Details</h5>
                                        <p className="card-text fs-5">
                                            <span className="fw-bold">Name: </span>
                                            {appointment.name} <br />
                                            <span className="fw-bold">Email: </span>
                                            {appointment.email} <br />
                                            <span className="fw-bold">Apointment Date: </span> {appointment.appointdate} <br />
                                            <span className="fw-bold">Subject: </span> {appointment.subject} <br />
                                            <span className="fw-bold">Details: </span> {appointment.details}
                                        </p>
                                        <div className="text-center mt-5">
                                            <a href="#" className="btn btn-outline-light">Download</a>
                                        </div>
                                    </div>
                                </div>
                                :
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="form-floating mb-3">


                                        <input type="text" defaultValue={user.displayName} {...register("name", { required: true })} className="form-control" id="floatingInput" />
                                        {errors.name ? <label htmlFor="floatingInput">Your name is required</label> : <label htmlFor="floatingInput">Your name</label>}

                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" defaultValue={user.email} {...register("email", { required: true })} className="form-control" id="floatingInput" />
                                        {errors.email ? <label htmlFor="floatingInput">Your email is required</label> : <label htmlFor="floatingInput">Your email</label>}


                                    </div>

                                    <div className="row g-2  mb-3">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="text" {...register("subject", { required: true })} className="form-control" id="floatingInput" />
                                                {errors.subject ? <label htmlFor="floatingInput"><span className="text-danger">Your Problem Subject</span></label> : <label htmlFor="floatingInput">Problem Subject</label>}
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="form-floating">
                                                <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example" {...register("appointdate", { required: true })}>
                                                    <option value="15/11/2021">08/11/2021</option>
                                                    <option value="16/11/2021">08/11/2021</option>
                                                    <option value="17/11/2021">08/11/2021</option>
                                                    <option value="18/11/2021">08/11/2021</option>
                                                    <option value="19/11/2021">08/11/2021</option>
                                                    <option value="20/11/2021">08/11/2021</option>
                                                    <option value="21/11/2021">08/11/2021</option>
                                                    <option value="22/11/2021">08/11/2021</option>
                                                    <option value="23/11/2021">08/11/2021</option>
                                                    <option value="24/11/2021">08/11/2021</option>
                                                    <option value="25/11/2021">08/11/2021</option>
                                                    <option value="26/11/2021">08/11/2021</option>
                                                </select>
                                                {errors.date ? <label htmlFor="floatingSelectGrid">Your email is required</label> : <label htmlFor="floatingSelectGrid">Your email</label>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-3">


                                        <textarea type="text" {...register("details", { required: true })} className="form-control" id="floatingTextarea2"></textarea>



                                        {errors.details ? <label htmlFor="floatingInput"><span className="text-danger">Write Problem details</span></label> : <label htmlFor="floatingInput">Problem details</label>}
                                    </div>


                                    <div className="">
                                        <Button className="btn btn-lg me-4 mb-4 p-3 button-blue" type="submit">Take Appointment</Button>
                                    </div>
                                </form>
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Appointment;