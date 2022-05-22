import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Newsletter/>
            <Footer />
        </div>
    );
};

export default Home;