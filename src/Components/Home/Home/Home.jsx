import React, { useEffect } from 'react';
import Header from '../../SharedPages/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CategoryTab from '../CategoryTab/CategoryTab';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Home = () => {

    const {pathname} =  useLocation();
 
    useEffect(()=>{
        document.title=`KhelaGhor`
    },[pathname])


    return (
        <>
           <Banner></Banner>
           <PhotoGallery></PhotoGallery>
           <CategoryTab></CategoryTab>
        </>
    );
};

export default Home;