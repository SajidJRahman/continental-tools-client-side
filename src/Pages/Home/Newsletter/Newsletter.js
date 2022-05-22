import React from 'react';
import './Newsletter.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Newsletter = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        toast.success("You are now subscribed!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset({
            email: ''
        });
    }

    return (
        <div className='bg-gradient-to-r from-[#fa4764] to-[#f98c5f] py-16'>
            <div className="card rounded-3xl w-80 lg:w-96 sm:w-80 bg-base-100 shadow-xl mx-auto">
                <figure className="mx-5 mt-5">
                    <svg style={{ width: '40%', padding: '20px' }} xmlns="http://www.w3.org/2000/svg" className=" bg-[#fa4764] text-white  rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className="card-title">SUBSCRIBE</h4>
                    <p className='text-gray-500'>Subscribe to our newsletter & stay updated!</p>
                    <div className="card-actions">
                        <div className='flex'>
                            <input type="email" name="email" {...register('email', { required: true })} className="input input-bordered rounded-tl-full rounded-bl-full w-full max-w-xs" id="" placeholder='Enter Email' />
                            <button onClick={handleSubmit(onSubmit)} className='btn bg-gradient-to-r from-[#f98c5f] to-[#fa4764] border-none rounded-tr-full rounded-br-full px-8 m-0'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;