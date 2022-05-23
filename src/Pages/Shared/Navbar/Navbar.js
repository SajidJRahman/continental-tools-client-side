import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokelinejoinn="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='font-medium'>Home</Link></li>
                        {
                            user && <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>
                        }
                        <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
                        <li><Link to='/contact-us' className='font-medium'>Contact Us</Link></li>
                        <li><Link to='/about' className='font-medium'>About</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost rounded-full normal-case text-xl navbar-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65 5.725-23.92 5.34-47.08.215-68.4-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34-21.32-5.125-44.48-5.51-68.4.215-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86c8.12-2.76 16.42-3.76 24.72-3.76zm52.2 54.5c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158V95.99L64 0 0 63.1l96 127.1 62.04.008 106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.002l52.75-52.75c14.5-14.5 14.5-38.08-.002-52.71L384 278.6zM227.9 307l-59.2-59.1L19.8 396.8c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.7 24 24-10.75 24-24 24z"></path>
                    </svg> Continental Tools
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home' className='font-medium'>Home</Link></li>
                    {
                        user && <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>
                    }
                    <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
                    <li><Link to='/contact-us' className='font-medium'>Contact Us</Link></li>
                    <li><Link to='/about' className='font-medium'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL &&
                    <div className="avatar">
                        <div className="w-10 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                }
                {
                    user?.displayName &&
                    <div className='font-bold mr-5'>
                        <p>{user?.displayName}</p>
                    </div>
                }
                {
                    user ?
                        <button onClick={handleSignOut} className='btn rounded-full lg:px-10 md:px-10'>Log Out</button>
                        :
                        <div>
                            <Link to='/login' className='mr-2'>
                                <button className='btn btn-outline rounded-full lg:px-10 md:px-10'>Login</button>
                            </Link>
                            <Link to='/sign-up'>
                                <button className='btn rounded-full lg:px-10 md:px-10'>Sign Up</button>
                            </Link>
                        </div>
                }
            </div>
        </div >
    );
};

export default Navbar;