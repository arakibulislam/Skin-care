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
                    <div className="col-12 col-md-6 ">
                        <img style={{ border: "8px solid #bc003f", borderRadius: "5px" }} className="img-fluid shadow-lg" src="https://media.istockphoto.com/photos/medical-doctor-woman-showing-presenting-picture-id1159734771?k=20&m=1159734771&s=612x612&w=0&h=V0KHg1pKkbDDSHz0Rxo98E1si4g-u6kHZerSLe_rBrU=" alt="" />
                    </div>

                    <div className="col-12 col-md-6">
                        <h3 className='appoinment-tag text-center mt-lg-0 mt-4'>Request an Appointment</h3>
                        <p className="my-4 lead">Complete the request form, and we'll reach out to you shortly to schedule your appointment.
                        </p>


                        {
                            appointment?.email ?
                                <div className="card shadow-lg border-0  text-dark">
                                    <div className="card-body ">
                                        <h5 className="card-title text-center text-danger mb-5">Your Appointment Details</h5>
                                        <p className="card-text ps-5 fs-5">
                                            <span className="fw-bold">Name: </span>
                                            {appointment.name} <br />
                                            <span className="fw-bold">Email: </span>
                                            {appointment.email} <br />
                                            <span className="fw-bold">Apointment Date: </span> {appointment.appointdate} <br />
                                            <span className="fw-bold">Subject: </span> {appointment.subject} <br />
                                            <span className="fw-bold">Details: </span> {appointment.details}
                                        </p>
                                        <div className="text-center mt-5">
                                            <a href="https://images.pexels.com/photos/4439457/pexels-photo-4439457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" target="blank" className="btn btn-outline-danger">Download</a>
                                        </div>
                                    </div>
                                </div>
                                :
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="form-floating mb-4">


                                        <input type="text" defaultValue={user.displayName} {...register("name", { required: true })} className="form-control border-0 shadow" id="floatingInput" />
                                        {errors.name ? <label htmlFor="floatingInput">Your name is required</label> : <label htmlFor="floatingInput">Your name</label>}

                                    </div>

                                    <div className="form-floating mb-4">
                                        <input type="email" defaultValue={user.email} {...register("email", { required: true })} className="form-control border-0 shadow" id="floatingInput" />
                                        {errors.email ? <label htmlFor="floatingInput">Your email is required</label> : <label htmlFor="floatingInput">Your email</label>}


                                    </div>

                                    <div className="row g-2  mb-4">
                                        <div className="col-md mb-lg-0 mb-3">
                                            <div className="form-floating">
                                                <input type="text" {...register("subject", { required: true })} className="form-control border-0 shadow" id="floatingInput" />
                                                {errors.subject ? <label htmlFor="floatingInput"><span className="text-danger">Your Problem Subject</span></label> : <label htmlFor="floatingInput">Problem Subject</label>}
                                            </div>
                                        </div>

                                        <div className="col-md">
                                            <div className="form-floating">
                                                <select className="form-select border-0 shadow" id="floatingSelectGrid" aria-label="Floating label select example" {...register("appointdate", { required: true })}>
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

                                    <div className="form-floating mb-4">


                                        <textarea type="text" {...register("details", { required: true })} className="form-control border-0 shadow" id="floatingTextarea2"></textarea>



                                        {errors.details ? <label htmlFor="floatingInput"><span className="text-danger">Write Problem details</span></label> : <label htmlFor="floatingInput">Problem details</label>}
                                    </div>


                                    <div className="mt-5">
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