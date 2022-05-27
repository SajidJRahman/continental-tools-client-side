import React from 'react';
import './MyPortfolio.css';
import WebsiteOne from '../../Images/Websites/website-1.png';
import WebsiteTwo from '../../Images/Websites/website-2.png';
import WebsiteThree from '../../Images/Websites/website-3.png';
import Title from '../Shared/Title/Title';

const MyPortfolio = () => {
    return (
        <div>
            <Title title="My Portfolio" />
            <div className='text-center mt-20 mb-32 lg:mt-56 lg:mb-64'>
                <h1 className='text-3xl font-bold mb-2'>Hello there,<br />my name is <span className='text-5xl text-info'>Sajid Rahman</span>.</h1>
                <p>I am a beginner web developer, I have completed more than 20 projects till now.<br />I am looking forward to give the best out of myself! </p>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold'>My Expertise</h1>
                <p className='text-center mb-8'>Technologies I currently work with...</p>
                <div className='px-5 lg:px-14 md:px-14 grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    <div className="card bg-base-100 shadow-xl text-center w-[100%]">
                        <div className="card-body">
                            <p className='font-bold'>Frontend Technologies</p>
                            <div className='flex justify-evenly'>
                                <ul>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>HTML</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>CSS</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>JavaScript</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>React</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Bootstrap</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Tailwind CSS</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-[100%]">
                        <div className="card-body">
                            <p className='font-bold'>Backend Technologies</p>
                            <div className='flex justify-evenly'>
                                <ul>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Node.js</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>MongoDB</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Firebase</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Express.js</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-[100%]">
                        <div className="card-body">
                            <p className='font-bold'>Side Technologies</p>
                            <div className='flex justify-evenly'>
                                <ul>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>GitHub</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Firebase Hosting</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Netlify</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className='flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-info" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className='ml-2 font-semibold text-left'>Heroku</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            <div className='mt-16 mb-16'>
                <h1 className='text-center text-3xl font-bold'>My Recent Websites</h1>
                <p className='text-center mb-8'>Some of my latest websites...</p>
                <div className='px-5 lg:px-14 md:px-14 grid gap-8 grid-cols-1 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1'>
                    <div className="card w-[100%] bg-[base-100] shadow-xl">
                        <figure className="">
                            <img src={WebsiteOne} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl font-bold">HeadphonesInsider</h2>
                            <p>HeadphonesInsider is an analysis related website</p>
                            <div className="card-actions">
                                <a rel="noreferrer" target='_blank' href="https://headphones-insider-sajidjrahman.netlify.app/">
                                    <button className="btn btn-info font-bold text-white px-10 rounded-full">Visit Site</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[100%] bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={WebsiteTwo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl font-bold">InventoryStation</h2>
                            <p>InventoryStation is an inventory management related website</p>
                            <div className="card-actions">
                                <a rel="noreferrer" target='_blank' href="https://inventory-station.web.app/">
                                    <button className="btn btn-info font-bold text-white px-10 rounded-full">Visit Site</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[100%] bg-base-100 shadow-xl">
                        <figure className="">
                            <img src={WebsiteThree} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-3xl font-bold">FitnessBuddy</h2>
                            <p>FitnessBuddy is a fitness, workout related website</p>
                            <div className="card-actions ">
                                <a rel="noreferrer" target='_blank' href="https://fitness-buddy-sajidjrahman.web.app/">
                                    <button className="btn btn-info font-bold text-white px-10 rounded-full">Visit Site</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 mb-5 lg:mt-20 lg:mb-20'>
                <h1 className='text-center text-3xl font-bold'>Contact Me</h1>
                <p className='text-center mb-12'>Get in touch with me...</p>
                <div className='px-5 lg:px-14 md:px-14 grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    <div className="card bg-base-100 shadow-xl text-center w-[100%]">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-info text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p className='font-bold'>Name & Address</p>
                            <p className='font-semibold'>Sajid Rahman</p>
                            <p className='font-semibold'>Via Romanello da Forli, 28, Rome, Italy</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-[100%]">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-info text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className='font-bold'>Email</p>
                            <p className='font-semibold'>sajidjrahman@icloud.com</p>
                            <p className='flex justify-center items-center text-info'>
                                <a className='mr-1 font-semibold' href="mailto:sajidjrahman@icloud.com">Email Me</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-info" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl text-center w-[100%]">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-8 w-8 text-info text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className='font-bold'>GitHub</p>
                            <p className='font-semibold'>/sajidjrahman</p>
                            <p className='flex justify-center items-center text-info'>
                                <a className='mr-1 font-semibold' rel="noreferrer" target='_blank' href="https://facebook.com/sajidjrahman" >GitHub</a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-info" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;