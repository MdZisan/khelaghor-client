import React, { useEffect } from 'react';
import Header from '../Components/SharedPages/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {


    const {pathname} =  useLocation();
    // console.log(pathname);
    useEffect(()=>{
        document.title=`${pathname.split('/')[1]} | KhelaGhor  `
    },[pathname])
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        
        </>
    );
};

export default MainLayout;