import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToy = () => {

    const {user} = useContext(AuthContext)

    const [loadedToy,setLoadedToys]=useState([]);
    const [toys,setToys] =useState(loadedToy)



useEffect(()=>{
    fetch(`http://localhost:5000/mytoy/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setLoadedToys(data))
},[user])
    
// console.log(loadedToy);


    return (
        <div>
            


            <div className='text-center text-2xl font-bold'>
            <h2>MY TOY</h2>
            <h1>Total added toy: </h1>
            </div>
            <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Seller</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody className=''>
                {loadedToy?.map((toy, index) => (
                  <>
                   
                    <tr>
                      <th>{index + 1}</th>
                      <td>{toy.sellerName}</td>
                      <td>{toy.name}</td>
                      <td>{toy.category}</td>
                      <td>${toy.price}</td>
                      <td>{toy.quantity}</td>
                      <td>
                        <Link to={`/updateToy/${toy._id}`} className="btn">
                          Update
                        </Link>
                      </td>
                      <td><button className='btn'>DELETE</button></td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
};

export default MyToy;