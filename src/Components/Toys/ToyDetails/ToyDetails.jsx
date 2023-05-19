import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

   
    const loadedToy = useLoaderData();
    const {_id,toyphoto,name,sellerName,category,price,quantity,details,email,rating} = loadedToy
    
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-6 md:w-[90%] mx-auto my-4'>
                <div className=''>
                    <LazyLoad>
                        <img src={toyphoto} alt="" />
                    </LazyLoad>
                </div>
                <div className='text-2xl font-semibold space-y-6 my-auto bg-slate-100 py-7 px-4 rounded-xl'>
                    <li>Toy Name: {name}</li>
                    <li>Seller: {sellerName}</li>
                    <li className=''>Seller Email: {email}</li>
                    <li>Price: ${price}</li>
                    <li>Rating: {rating}</li>
                    <li>Available Quantity: {quantity}</li>
                    

                </div>
            </div>

<div className='md:w-[95%] mx-auto  font-semibold space-y-6 bg-slate-100 py-7 px-4 rounded-xl my-3'>
        <h2 className='underline text-4xl font-bold '>Description</h2>
        <p className='text-2xl'>{details} ,{details}</p>
        

</div>

        </div>
    );
};

export default ToyDetails;