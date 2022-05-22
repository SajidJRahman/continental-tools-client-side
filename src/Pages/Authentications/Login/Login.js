import React from 'react';
import './Login.css';
import Google from '../../../Images/Logos/Google.svg';
import GitHub from '../../../Images/Logos/GitHub.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero py-32 bg-gradient-to-r from-[#00008b] to-[#2fbfc7]">
            <div className="card w-80 lg:w-2/6 sm:w-3/5 shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-3xl lg:text-4xl'>Login</h1>
                    <p className='text-center font-bold my-5'>Social Login</p>
                    <div className='flex mx-auto'>
                        <button className='btn-social py-3 px-12 lg:px-16 sm:px-12 mr-3 rounded-full flex items-center justify-center'>
                            <img width='40px' src={Google} alt="" />
                        </button>
                        <button className='btn-social py-3 px-12 lg:px-16 sm:px-12 ml-3 rounded-full flex items-center justify-center'>
                            <img width='40px' src={GitHub} alt="" />
                        </button>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR Continue With</div>
                    </div>
                    <p className='text-center font-bold'>Email & Password</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                        <label className="label mx-auto">
                            <button className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                    </div>
                    <p className='text-center font-bold'>Don't have an account? <Link to='/sign-up' className='text-primary'>Sign Up</Link></p>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;