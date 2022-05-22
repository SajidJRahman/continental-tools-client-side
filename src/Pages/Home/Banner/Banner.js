import React from 'react';
import './Banner.css';
import Tools from '../../../Images/Tools/tools.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url(${Tools})`
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Continental Tools</h1>
                    <p className="mb-5">The home for all the tools you need. Need decent amount of tools? You're at the right place!</p>
                    <button className="btn btn-primary px-8">View Items</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;