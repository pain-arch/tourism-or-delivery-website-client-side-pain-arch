import React from 'react';
import Adress from '../Adress/Adress';
import Banner from '../Banner/Banner';
import PopularDestination from '../PopularDestination/PopularDestination';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div style={{marginTop:"70px"}}>
            <Banner></Banner>
            <Services></Services>
            <PopularDestination></PopularDestination>
            <Adress></Adress>
        </div>
    );
};

export default Home;