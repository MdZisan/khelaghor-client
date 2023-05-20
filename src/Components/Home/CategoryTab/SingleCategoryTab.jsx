import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const SingleCategoryTab = ({toy}) => {
  
    const {toyphoto,name,price,rating,_id} = toy


    return (
        <div data-aos="fade-right">
           <div className="card md:w-96 bg-base-100 shadow-xl">
  <LazyLoad>
  <figure><img src={toyphoto} alt="Shoes" /></figure>
  </LazyLoad>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price: ${price}</p>
    <p>Rating: ${rating}</p>
    <div className="card-actions justify-start">
   <p> <Link to={`/toy/${_id}`} className="btn">View Details</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCategoryTab;