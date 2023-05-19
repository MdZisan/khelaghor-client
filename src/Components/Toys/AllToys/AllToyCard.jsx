import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';




const AllToyCard = ({toy}) => {

    const {_id,toyphoto,name,sellerName,category,price,quantity}  =toy

    return (
        <>   
      

{/* --------------------------------------------------- */}

{/* card  */}
         <div className="card w-96 bg-base-100 shadow-xl my-5 ">
  <figure>

    <LazyLoad>

    <img src={toyphoto} alt="Shoes" />
    </LazyLoad>
    </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <hr />
   <p className='text-xl font-semibold'>Price:$ {price}</p>
   <p className='text-xl font-semibold'>Available Quantity: {quantity}</p>
   <p className='text-xl font-semibold'>Category: {category}</p>
   <p className='text-xl font-semibold'>seller: {sellerName}</p>
    <div className="card-actions justify-start mt-4">
      <Link to={`/toy/${_id}`} className="btn">View Details</Link>
    </div>
  </div>
</div>   
        </>
    );
};

export default AllToyCard;