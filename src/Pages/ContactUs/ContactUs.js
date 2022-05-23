import React from 'react';
import './ContactUs.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = data => {
        toast.success("We've received your message, we'll get back to you shortly", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset({
            first: '',
            last: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content bg-primary p-0 gap-0 m-10 rounded-[1rem] shadow-2xl flex-col lg:flex-row">
                <div className='p-8 h-full w-full'>
                    <h1 className='text-2xl text-white'>Contact Information</h1>
                    <p className='text-gray-200 mt-5'>Need our help? Or do you have suggestions for us? Just contact us by our phone or email, or you can submit your information & we'll get back you as soon as possible.</p>
                    <p className='flex text-gray-200 mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        + 39 312345-6789
                    </p>
                    <p className='flex text-gray-200 mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        user@example.com
                    </p>
                    <div className='flex mt-5'>
                        <a rel="noreferrer" target='_blank' href="https://facebook.com/sajidjrahman">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 bg-white rounded-sm" viewBox="0 0 448 512">
                                <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z"></path>
                            </svg>
                        </a>
                        <a rel="noreferrer" target='_blank' href="https://github.com/sajidjrahman">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 bg-white rounded-sm" viewBox="0 0 448 512">
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
                            </svg>
                        </a>
                        <a rel="noreferrer" target='_blank' href="https://twitter.com/sajidjrahman">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 bg-white rounded-sm" viewBox="0 0 448 512">
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
                            </svg>
                        </a>
                        <a rel="noreferrer" target='_blank' href="https://instagram.com/sajidjrahman">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 bg-white rounded-sm" viewBox="0 0 448 512">
                                <path d="M224 202.66A53.34 53.34 0 10277.36 256 53.38 53.38 0 00224 202.66zm124.71-41a54 54 0 00-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 00-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0030.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0030.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1182-82 81.9 81.9 0 01-82 82zm85.38-148.3a19.14 19.14 0 1119.13-19.14 19.1 19.1 0 01-19.09 19.18zM400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card w-full rounded-tl-none lg:rounded-tl-none rounded-tr-none lg:rounded-tr-[1rem] rounded-bl-[1rem] lg:rounded-bl-none rounded-br-[1rem] bg-base-100">
                    <div className="card-body">
                        <h1 className='text-2xl font-semibold'>Send us a message</h1>
                        <div className="block lg:flex justify-between">
                            <div className=' lg:mr-2'>
                                <label className="label">
                                    <span className="label-text font-bold">First Name</span>
                                </label>
                                <input type="text" {...register('first', { required: true })} placeholder="First Name" className="w-full lg:w-[269px] input input-bordered" />
                            </div>
                            <div className='lg:ml-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Last Name</span>
                                </label>
                                <input type="text" {...register('last', { required: true })} placeholder="Last Name" className="w-full lg:w-[269px] input input-bordered" />
                            </div>
                        </div>
                        <div className="block lg:flex justify-between">
                            <div className=' lg:mr-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} placeholder="Email" className="w-full lg:w-[269px] input input-bordered" />
                            </div>
                            <div className='lg:ml-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Phone</span>
                                    <span className="label-text-alt font-bold text-gray-400">Optional</span>
                                </label>
                                <input type="tel" {...register('phone')} placeholder="Phone" className="w-full lg:w-[269px] input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Subject</span>
                            </label>
                            <input type="text" {...register('subject', { required: true })} placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" {...register('message', { required: true })} placeholder="Bio"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSubmit(onSubmit)} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;