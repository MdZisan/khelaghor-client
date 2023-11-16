import React, { Suspense, useEffect } from 'react';
import Header from '../Components/SharedPages/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from '../Components/SharedPages/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Loading from '../Components/Loading/Loading';
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
            <Suspense fallback={<div><Loading></Loading></div>}>
           <div className='min-h-[calc(100vh-100px)]'>
                <Outlet></Outlet> 
           </div>
            </Suspense>
            <Footer></Footer>
        
        </>
    );
};

export default MainLayout;