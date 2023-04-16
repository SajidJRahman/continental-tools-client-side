import React from 'react';
import './About.css';
import Title from '../Shared/Title/Title';
import AboutOne from '../../Images/About/about-1.jpg';
import AboutTwo from '../../Images/About/about-2.jpg';
import AboutThree from '../../Images/About/about-3.jpg';
import AboutFour from '../../Images/About/about-4.jpg';
import AboutFive from '../../Images/About/about-5.jpg';
import AboutSix from '../../Images/About/about-6.jpg';

const About = () => {
    return (
        <div className='font-poppins py-10 mx-10'>
            <Title title="About" />
            <h1 className='text-3xl lg:text-4xl font-bold text-center mb-2'>About</h1>
            <p className='text-center mb-12 font-medium'>We are Continental Tools, authentic tools provider. We have achieved the trust of our customers for providing them the tools they need at a very short time. We have been continuously updating our services & hoping for achieving the trust from new visitor also. We love providing the service that our customers expect from us. We look forward to update our product as well. We will reach our desired place InshAllah. Thank you for visiting Continental Tools.</p>
            <div class="carousel carousel-end rounded-box border-2">
                <div class="carousel-item border p-5">
                    <img className='w-96' src={AboutOne} alt="Drink" />
                </div>
                <div class="carousel-item border p-5">
                    <img className='w-96' src={AboutTwo} alt="Drink" />
                </div>
                <div class="carousel-item border p-5">
                    <img className='w-96' src={AboutThree} alt="Drink" />
                </div>
                <div class="carousel-item border p-5">
                    <img className='w-96' src={AboutFour} alt="Drink" />
                </div>
                <div class="carousel-item border p-5">
                    <img className='w-96' src={AboutFive} alt="Drink" />
                </div>
                <div class="carousel-item border p-5">
                    <img className='w-96' src={AboutSix} alt="Drink" />
                </div>
            </div>
        </div>
    );
};

export default About;