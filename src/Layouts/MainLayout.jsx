import React, { useEffect } from 'react';
import Header from '../Components/SharedPages/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from '../Components/SharedPages/Footer/Footer';
import { Toaster } from 'react-hot-toast';
// ..
AOS.init();

const MainLayout = () => {


    const {pathname} =  useLocation();
    // console.log(pathname);
    useEffect(()=>{
        document.title=`${pathname.split('/')[1]} | KhelaGhor  `
    },[pathname])
    return (
        <>
        <Toaster></Toaster>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </>
    );
};

export default MainLayout;