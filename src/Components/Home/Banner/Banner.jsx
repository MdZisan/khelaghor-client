import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row justify-center ">
   <div className='' data-aos="fade-down">
   <LazyLoad>
   <img src="https://images.unsplash.com/photo-1596068587619-e4b11c7a3488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-w-sm rounded-lg shadow-2xl w-full md:w-auto "  />
   </LazyLoad>
   </div>
    <div className='md:ml-14' data-aos="fade-down">
      <h1 className="text-5xl font-bold uppercase">The ultimate destination for kids toys and games.</h1>
      <p className="py-6 mr-10 font-semibold"> BUY - SELL - SPREAD HAPPINESS </p>
      <Link to={'/alltoys'}>


      <button className="btn ">BUY HAPPINESS</button>
      </Link>
    </div>
  </div>
</div>
        </>
    );
};

export default Banner;