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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='font-medium'>Home</Link></li>
                        {
                            user && <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>
                        }
                        <li><Link to='/my-portfolio' className='font-medium'>My Portfolio</Link></li>
                        <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
                        <li><Link to='/contact-us' className='font-medium'>Contact Us</Link></li>
                        <li><Link to='/about' className='font-medium'>About</Link></li>
                        {
                            user?.photoURL &&
                            <div className="avatar">
                                <div className="w-10 mt-3 mx-auto rounded-full ring ring-[#4099ff] ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
                        }
                        {
                            user?.displayName &&
                            <div className='font-bold text-center my-3'>
                                <p>{user?.displayName}</p>
                            </div>
                        }
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn rounded-full'>Log Out</button>
                                :
                                <div className='text-center mt-3'>
                                    <Link to='/login' className='mr-2'>
                                        <button className='btn btn-outline rounded-full w-full py-1'>Login</button>
                                    </Link>
                                    <Link to='/sign-up'>
                                        <button className='btn rounded-full w-full mt-2'>Sign Up</button>
                                    </Link>
                                </div>
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost rounded-full normal-case text-[27px] text-white bg-[#4099ff] w-[258px] lg:text-3xl lg:w-60 navbar-title">
                    <span>Continental Tools</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home' className='font-medium'>Home</Link></li>
                    {
                        user && <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>
                    }
                    <li><Link to='/my-portfolio' className='font-medium'>My Portfolio</Link></li>
                    <li><Link to='/blogs' className='font-medium'>Blogs</Link></li>
                    <li><Link to='/contact-us' className='font-medium'>Contact Us</Link></li>
                    <li><Link to='/about' className='font-medium'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                {
                    user?.photoURL &&
                    <div className="avatar hidden lg:flex">
                        <div className="w-10 mr-1 lg:mr-5 rounded-full ring ring-[#4099ff] ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </div>
                }
                {
                    user?.displayName &&
                    <div className='font-bold mr-5 hidden lg:flex'>
                        <p>{user?.displayName}</p>
                    </div>
                }
                {
                    user ?
                        <button onClick={handleSignOut} className='btn rounded-full hidden lg:flex lg:px-10 md:px-10'>Log Out</button>
                        :
                        <div className='hidden lg:flex'>
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