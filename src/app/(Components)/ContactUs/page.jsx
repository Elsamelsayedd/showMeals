'use client'

import { useFormik } from 'formik';
import { useState } from 'react'

import * as Yup from 'yup';






export default function ContactUs() {

    const validationSchema = Yup.object().shape({
        name: Yup.string().matches(/^[a-zA-Z]*$/, "Special characters and numbers not allowed").required("Name is required..."),
        email: Yup.string().email("Email not valid *exemple@yyy.zzz").required("Email is required..."),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Enter valid Phone Number").required("Email is required..."),
        age: Yup.string().matches(/^(?:1[01][0-9]|120|[1-9]?[0-9])$/, ' Enter valid age').required("Age is required..."),
        password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Enter valid password *Minimum eight characters, at least one letter and one number:*').required("Password is required..."),
        repassword: Yup.string().oneOf([Yup.ref('password')], 'repassword is must match password').required("Repassword is required...")
    })







    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            age: '',
            password: '',
            repassword: ''
        }, validationSchema
    })



    return (
        <>
            <div className='card my-4 bg-black container w-75'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className='col-md-6 my-4'>
                            <div>
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="form-control" type="text" name='name' placeholder="Enter Your Name" aria-label="default input example" />

                                {formik.errors.name && formik.touched.name && <div className="alert alert-danger my-1" role="alert">
                                    {formik.errors.name}
                                </div>
                                }
                            </div>

                        </div>
                        <div className='col-md-6 my-4'>
                            <div>
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control" name='email' type="email" placeholder="Enter Your Email" aria-label="default input example" />

                                {formik.errors.email && formik.touched.email && <div className="alert alert-danger my-1" role="alert">
                                    {formik.errors.email}
                                </div>
                                }
                            </div>

                        </div>
                        <div className='col-md-6 my-4'>
                            <div>
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} className="form-control" name='phone' type="phone" placeholder="Enter Your Phone" aria-label="default input example" />

                                {formik.errors.phone && formik.touched.phone && <div className="alert alert-danger my-1" role="alert">
                                    {formik.errors.phone}
                                </div>
                                }
                            </div>

                        </div>
                        <div className='col-md-6 my-4'>
                            <div>
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} className="form-control" name='age' type="number" placeholder="Enter Your Age" aria-label="default input example" />

                                {formik.errors.age && formik.touched.age && <div className="alert alert-danger my-1" role="alert">
                                    {formik.errors.age}
                                </div>
                                }
                            </div>

                        </div>
                        <div className='col-md-6 my-4'>
                            <div>
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="form-control" name='password' type="password" placeholder="Password" aria-label="default input example" />

                                {formik.errors.password && formik.touched.password && <div className="alert alert-danger my-1" role="alert">
                                    {formik.errors.password}
                                </div>
                                }
                            </div>

                        </div>
                        <div className='col-md-6 my-4'>
                            <div>
                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.repassword} className="form-control" name='repassword' type="password" placeholder="RePassword" aria-label="default input example" />

                                {formik.errors.repassword && formik.touched.repassword && <div className="alert alert-danger my-1" role="alert">
                                    {formik.errors.repassword}
                                </div>
                                }
                            </div>

                        </div>
                    </div>
                    <div className='text-center my-4'>
                        <button type="button" className={formik.isValid ? "btn btn-warning " : 'btn btn-warning disabled'}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
};

