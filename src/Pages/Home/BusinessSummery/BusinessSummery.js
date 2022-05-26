import React from 'react';
import './BusinessSummery.css';

const BusinessSummery = () => {
    return (
        <div className='text-center pt-16 bg-gradient-to-r from-[lightskyblue] to-[#f9a17b] '>
            <h1 className='text-3xl lg:text-4xl font-bold text-neutral-focus'>Business Summary</h1>
            <p className='text-lg lg:text-xl'>Our customer trust us with the service we provide</p>
            <div className="stats shadow w-80 lg:w-3/4 mt-16 mb-11 lg:mb-32">

                <div className="stat py-10 rounded">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Items Sold</div>
                    <div className="stat-value">20K</div>
                    <div className="stat-desc">May 1st - May 31st</div>
                </div>

                <div className="stat py-10 rounded">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">Happy Clients</div>
                    <div className="stat-value">400+</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat py-10 rounded">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200+</div>
                    <div className="stat-desc">↗︎ 90 (14%)</div>
                </div>

                <div className="stat py-10 rounded">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">Items In Stock</div>
                    <div className="stat-value">35,000+</div>
                    <div className="stat-desc">↘︎ 10 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;