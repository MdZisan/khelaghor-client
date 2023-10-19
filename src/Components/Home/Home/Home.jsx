import React, { useEffect } from 'react';
import Header from '../../SharedPages/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CategoryTab from '../CategoryTab/CategoryTab';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import { Toaster } from 'react-hot-toast';
import Sponsers from '../ExtraSections/Sponsers';
import AllCounts from '../ExtraSections/AllCounts';
import Faq from '../Faq/Faq';
import AboutUs from '../AboutUs/AboutUs';
import NewsLetter from '../NewLetter/NewsLetter';
import Contact from '../Contact/Contact';
import WhyChooseUsSection from '../WhyChooseUs/WhyChooseUs';

const Home = () => {

    const {pathname} =  useLocation();
 
    useEffect(()=>{
        document.title=`KhelaGhor`
    },[pathname])


    return (
        <>
       
           <Banner></Banner>
           <PhotoGallery></PhotoGallery>
           <AllCounts></AllCounts>
           <CategoryTab></CategoryTab>
           <NewsLetter/>
           <WhyChooseUsSection/>
           <Sponsers></Sponsers>
           <Faq/>
           <AboutUs/>
           <Contact/>
        </>
    );
};

export default Home;