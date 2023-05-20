import React from 'react';
import LazyLoad from 'react-lazy-load';

const Sponsers = () => {
    return (<div className='mx-4'>
        <h2 className='text-center text-3xl font-semibold'>Sponsers</h2>
        <hr  className='my-2'/>
        <LazyLoad>
        <div className='md:flex md:w-[95%] mx-auto items-center my-2 space-x-4 space-y-2'>
            <div>
                <img src="https://i.ibb.co/1RM5Gqd/Funko-Pop-Banner.jpg" alt="" className='md:h-[150px]' />
            </div>
            <div>
                <img src="https://i.ibb.co/DVxhfLT/Disney-Banner.webp" alt="" className='md:h-[150px]' />
            </div>
            <div>
                <img src="https://i.ibb.co/r3tqbc1/MARVEL-LOGO.png" alt="" className='md:h-[150px]' />
            </div>
            <div>
                <img src="https://i.ibb.co/BVtT84N/star-wars-logo-banner.jpg" alt="" className='md:h-[150px]' />
            </div>
            <div>
                <img src="https://i.ibb.co/0jsP2b5/dam1y1q-4d30bc17-5ed6-45c4-aacf-bf2ec66a958b.jpg" alt=""  className='md:h-[150px]'/>
            </div>
        </div>
        </LazyLoad>
        </div>
    );
};

export default Sponsers;