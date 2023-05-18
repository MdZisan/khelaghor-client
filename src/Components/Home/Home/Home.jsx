import React, { useEffect } from 'react';
import Header from '../../SharedPages/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {

    const {pathname} =  useLocation();
 
    useEffect(()=>{
        document.title=`KhelaGhor`
    },[pathname])


    return (
        <>
           <Banner></Banner>
        </>
    );
};

export default Home;