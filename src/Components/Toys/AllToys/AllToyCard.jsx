import React from 'react';




const AllToyCard = ({toy}) => {

    const {_id,toyphoto,name,sellerName,category,price,quantity}  =toy

    return (
        <>   
         <div className="card w-96 bg-base-100 shadow-xl my-5 ">
  <figure><img src={toyphoto} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <hr />
   <p className='text-xl font-semibold'>Price:$ {price}</p>
   <p className='text-xl font-semibold'>Available Quantity: {quantity}</p>
   <p className='text-xl font-semibold'>Category: {category}</p>
   <p className='text-xl font-semibold'>seller: {sellerName}</p>
    <div className="card-actions justify-start mt-4">
      <button className="btn">View Details button</button>
    </div>
  </div>
</div>   
        </>
    );
};

export default AllToyCard;