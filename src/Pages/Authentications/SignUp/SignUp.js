import React, { useEffect } from 'react';
import './SignUp.css';
import Google from '../../../Images/Logos/Google.svg';
import GitHub from '../../../Images/Logos/GitHub.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import {
    useSignInWithGoogle,
    useSignInWithGithub,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from 'react-firebase-hooks/auth';
import Spinner from '../../Shared/Spinner/Spinner';
import Title from '../../Shared/Title/Title';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();

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
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updatingUpdate,
        errorUpdate
    ] = useUpdateProfile(auth);

    const [token] = useToken(userGoogle || userGitHub || user);


    useEffect(() => {
        if (token) {
            navigate('/');
        }

    }, [navigate, token]);

    if (loadingGoogle || loadingGitHub || loading || updatingUpdate) {
        return <Spinner />
    }

    if (errorGoogle || errorGitHub || error || errorUpdate) {
        alert(errorGoogle || errorGitHub || error || errorUpdate);
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    return (
        <div className="hero py-5 lg:py-16 px-5 bg-gradient-to-r from-secondary to-primary">
            <Title title="Sign Up" />
            <div className="card w-full lg:w-2/6 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-3xl mb-5 lg:text-3xl font-semibold'>Sign Up</h1>

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
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register('name')} placeholder="name" className="input input-bordered" />
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
                    </div>
                    <p className='text-center font-bold'>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
                    <div className="form-control mt-2">
                        <button onClick={handleSubmit(onSubmit)} className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;