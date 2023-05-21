import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Tooltip } from 'react-tooltip';

const PhotoGallery = () => {
    const [images,setImages] =useState([]);

    useEffect(()=>{
        fetch('https://khelaghor-server-production.up.railway.app/toyphoto')
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])

// console.log(images);

    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold my-2 mb-4 text-center'>Product Gallery</h2>
                <p className='text-center text-slate-300'>
                    <span className='hidden md:inline-block mr-2'>Hover</span>
                    <span className='md:hidden' >Tap </span>
                
                 to see Name and price</p>
            </div>

          <div className='grid grid-cols-3 md:grid-cols-5 gap-5 md:w-[95%] md:mx-auto '>
                {
                    images?.map((img)=><div key={img._id}>
                   
                   <div data-tooltip-id={img._id} className='p-2 bg-slate-700'>
                 <LazyLoad>
                 <img data-aos="zoom-in" src={img.toyphoto} alt="" />
                 </LazyLoad>
                   </div>
                   <Tooltip id={img._id} className='z-50'>
  <div>
    <h3>Name: {img.name}</h3>
    <h2>Price: ${img.price}</h2>
  </div>
</Tooltip>
                    </div>
                        
                        )
                } 



            </div> 
            
        </div>
    );
};

export default PhotoGallery;