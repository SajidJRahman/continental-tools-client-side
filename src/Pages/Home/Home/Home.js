import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Newsletter from '../Newsletter/Newsletter';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummery />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;