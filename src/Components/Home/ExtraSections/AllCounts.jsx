import React from 'react';
import CountUp from 'react-countup';
import LazyLoad from 'react-lazy-load';
import { FaSellsy, FaShoppingBag, FaUserAlt } from 'react-icons/fa';

const AllCounts = () => {
    return (
        <div className='my-7 mx-4 md:mx-9 md:flex justify-between space-y-3 md:space-y-0 text-center text-2xl font-semibold'>
            
         
            {/* card 1 */}
            <div className='bg-slate-800 text-white p-5 w-[300px] rounded-xl' >
                <LazyLoad><p className='flex justify-center text-4xl'><FaUserAlt/></p></LazyLoad>
            <h2>TOTAL USER</h2>
            <h2 className='flex justify-center'><LazyLoad><CountUp start={0} end={2000 } delay={1}></CountUp></LazyLoad>+</h2>
            </div>
            
         
            {/* card 1 */}
            <div className='bg-slate-800 text-white p-5 w-[300px] rounded-xl' >
               <LazyLoad><p className='flex justify-center text-4xl'><FaShoppingBag/></p></LazyLoad>
            <h2>TOTAL PRODUCT</h2>
            <h2 className='flex justify-center'><LazyLoad><CountUp start={0} end={45000} delay={1}></CountUp></LazyLoad>+</h2>
            </div>
            
         
            {/* card 1 */}
            <div className='bg-slate-800 text-white p-5 w-[300px] rounded-xl' >
               <LazyLoad><p className='flex justify-center text-4xl'><FaSellsy/></p></LazyLoad>
            <h2>TOTAL SELLES</h2>
            <h2 className='flex justify-center'><LazyLoad><CountUp start={0} end={300000} delay={1}></CountUp></LazyLoad>+</h2>
            </div>
            



        </div>
    );
};

export default AllCounts;