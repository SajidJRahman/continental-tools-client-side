import React, { useState } from 'react';
import './Newsletter.css';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import SpinnerSecondary from '../../Shared/SpinnerSecondary/SpinnerSecondary';

const Newsletter = () => {
    const { register, handleSubmit, reset } = useForm();
    const [showSpinner, setShowSpinner] = useState();

    const onSubmit = data => {
        setShowSpinner(<SpinnerSecondary />);
        fetch('https://continental-tools.herokuapp.com/newsletter', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

            })
        toast.info("You are now subscribed!", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setShowSpinner();
        reset({
            email: ''
        });
    }

    return (
        <div className='font-poppins bg-gradient-to-t from-[#4099ff] to-[#afdffc] pt-16 pb-5 lg:pb-16'>
            <h1 className='text-3xl lg:text-4xl font-bold text-center mb-2'>Get in touch</h1>
            <p className='text-center mb-16 px-5'>Subscribe to our newsletter to get latest update on our services!</p>
            <div className="card rounded-3xl w-[355px] lg:w-96 sm:w-80 bg-base-100 shadow-xl mx-auto">
                <figure className="mx-5 mt-5">
                    <svg style={{ width: '40%', padding: '20px' }} xmlns="http://www.w3.org/2000/svg" className=" bg-gradient-to-t from-[#4099ff] to-[#afdffc] text-white  rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className="card-title">SUBSCRIBE</h4>
                    <p className='text-gray-500'>Subscribe to our newsletter & stay updated!</p>
                    <div className="card-actions">
                        <div>
                            {
                                showSpinner ?
                                    <div >
                                        {showSpinner}
                                    </div>
                                    :
                                    <div className='flex'>
                                        <input type="email" name="email" {...register('email', { required: true })} className="input input-bordered rounded-tl-full rounded-bl-full w-full max-w-xs" id="" placeholder='Enter Email' />
                                        <button onClick={handleSubmit(onSubmit)} className='btn bg-gradient-to-t from-[#4099ff] to-[#afdffc] border-none rounded-tr-full rounded-br-full px-8 m-0'>Submit</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;