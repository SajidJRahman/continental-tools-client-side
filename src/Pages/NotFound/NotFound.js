import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div id='not-found'>
            <div className='not-found text-center px-5'>
                <h1>404</h1>
                <h2>Page Not Found!</h2>
                <p>Nice try though, very few people can reach at this certain place...</p>
                <Link to='/'>
                    <button className='btn rounded-full mt-5 px-12'>Get Me Back To Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;