import React from 'react';
import { Link } from 'react-router-dom';
import './Delivery.css';
import DeliveryImage from '../../../Images/Delivery/delivery.jpg';

const Delivery = () => {
    return (
        <div className='flex justify-center py-32 font-poppins bg-[#ebff9c]'>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-5 w-full lg:w-3/4">
                <figure><img className='w-full lg:w-[500px]' src={DeliveryImage} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-2xl lg:text-4xl">Get your delivery</h1>
                    <p className='text-base'>Get your orders on your hand real quick! In just 5-7 business day once you place your order. Be sure to provide enough information while ordering to avoid having delivery delays. If you need any kind of help, just <Link className='text-blue-600' to='/contact-us'>contact us</Link> any time. We may get back to you as soon as we can. We love listening to our customers experience & useablity, please consider <Link className='text-blue-600' to='/dashboard/add-review'>reviewing us</Link>, it helps us improve our services & your experience with us!</p>
                    <div className="card-actions justify-end">
                        <Link to='/blogs'>
                            <button className="btn btn-outline rounded-full">Read Blogs</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;