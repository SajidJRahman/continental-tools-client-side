import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Reviews from '../Reviews/Reviews';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <BusinessSummery />
            <Reviews />
            <Newsletter />
        </div>
    );
};

export default Home;