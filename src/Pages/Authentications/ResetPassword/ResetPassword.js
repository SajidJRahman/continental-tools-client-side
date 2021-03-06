import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import './ResetPassword.css';
import Title from '../../Shared/Title/Title';

const ResetPassword = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [
        sendPasswordResetEmail,
        sendingReset,
        errorReset
    ] = useSendPasswordResetEmail(auth);

    if (sendingReset) {
        return <Spinner />
    }

    if (errorReset) {
        toast.error(errorReset.message, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success('Reset link sent!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset();
        navigate('/login');
    }

    return (
        <div className="hero font-poppins py-5 lg:py-44 px-5 bg-gradient-to-r from-[#2fbfc7] to-[#00008b]">
            <Title title="Reset Password" />
            <div className="card w-full lg:w-2/6 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-3xl lg:text-3xl font-semibold'>Reset Password</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', {
                            required: {
                                value: true,
                                message: 'Please, enter an email address!'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Please, provide a valid email address!'
                            }
                        })} placeholder="email" className="input input-bordered" />

                        <label className='label pb-0'>
                            {errors.email?.type === 'required' &&
                                <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' &&
                                <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        </label>
                    </div>

                    <p className='text-center font-bold'>Go Back To <Link to='/login' className='text-primary'>Login</Link></p>
                    <div className="form-control mt-2">
                        <button onClick={handleSubmit(onSubmit)} className="btn btn-primary">Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;