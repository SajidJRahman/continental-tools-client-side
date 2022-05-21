import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokelinejoinn="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='font-weight: 500'>Home</Link></li>
                        <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>
                        <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
                        <li><Link to='/contact-us' className='font-medium'>Contact Us</Link></li>
                        <li><Link to='/about' className='font-medium'>About</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home' className='font-medium'>Home</Link></li>
                    <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>
                    <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
                    <li><Link to='/contact-us' className='font-medium'>Contact Us</Link></li>
                    <li><Link to='/about' className='font-medium'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className='mr-2'>
                    <button className='btn btn-outline rounded-full lg:px-10 md:px-10'>Login</button>
                </Link>
                <Link to='/sign-up'>
                    <button className='btn rounded-full lg:px-10 md:px-10'>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;