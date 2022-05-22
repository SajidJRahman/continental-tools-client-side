import React, { useEffect } from 'react';
import './Login.css';
import Google from '../../../Images/Logos/Google.svg';
import GitHub from '../../../Images/Logos/GitHub.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';
import {
    useSignInWithGoogle,
    useSignInWithGithub,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [
        signInWithGoogle,
        userGoogle,
        loadingGoogle,
        errorGoogle
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        userGitHub,
        loadingGitHub,
        errorGitHub
    ] = useSignInWithGithub(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (userGoogle || userGitHub || user) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, user, userGitHub, userGoogle]);

    if (loadingGoogle || loadingGitHub || loading) {
        return <Spinner />;
    }

    if (errorGoogle || errorGitHub || error) {
        console.log(errorGoogle || errorGitHub || error);
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className="hero py-32 bg-gradient-to-r from-[#00008b] to-[#2fbfc7]">
            <div className="card w-80 lg:w-2/6 sm:w-3/5 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-3xl mb-5 lg:text-4xl'>Login</h1>

                    <div className='flex mx-auto'>
                        <button onClick={() => signInWithGoogle()} className='btn-social py-2 px-12 lg:px-16 sm:px-12 mr-3 rounded-lg flex items-center justify-center'>
                            <img width='40px' src={Google} alt="" />
                        </button>
                        <button onClick={() => signInWithGithub()} className='btn-social py-2 px-12 lg:px-16 sm:px-12 ml-3 rounded-lg flex items-center justify-center'>
                            <img width='40px' src={GitHub} alt="" />
                        </button>
                    </div>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider mb-0">OR Continue With</div>
                    </div>

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

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', {
                            required: {
                                value: true,
                                message: 'Please, enter a password!'
                            },
                            pattern: {
                                value: /.{6,}(?=.*?[#?!@$%^&*-])/,
                                message: 'Password must contain at least 1 special character & must be at least 6 characters or longer!'
                            }
                        })} placeholder="password" className="input input-bordered" />

                        <label className='label'>
                            {errors.password?.type === 'required' &&
                                <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' &&
                                <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        </label>

                        <label className="label mx-auto py-0">
                            <Link to='/reset-password'>
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </Link>
                        </label>
                    </div>
                    <p className='text-center font-bold'>Don't have an account? <Link to='/sign-up' className='text-primary'>Sign Up</Link></p>
                    <div className="form-control mt-2">
                        <button onClick={handleSubmit(onSubmit)} className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;