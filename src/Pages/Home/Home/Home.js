import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Reviews from '../Reviews/Reviews';
import Newsletter from '../Newsletter/Newsletter';
import './Home.css';
import { Helmet } from 'react-helmet-async';
import Delivery from '../Delivery/Delivery';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Continental Tools</title>
            </Helmet>
            <Banner />
            <Products />
            <Delivery />
            <BusinessSummery />
            <Reviews />
            <Newsletter />
        </div>
    );
};

export default Home;