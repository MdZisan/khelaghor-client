import React from 'react';
import Header from '../../SharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
           <Banner></Banner>
        </>
    );
};

export default Home;