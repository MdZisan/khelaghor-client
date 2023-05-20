import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyToy = () => {

    const {user} = useContext(AuthContext)

    const [loadedToy,setLoadedToys]=useState([]);
    



useEffect(()=>{
    fetch(`https://khelaghor-server.vercel.app/mytoy/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setLoadedToys(data))
},[user])
    
// console.log(loadedToy);
const handleDelete = (id)=>{

// console.log(id);
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {


    fetch(`https://khelaghor-server.vercel.app/deleteToy/${id}`,{
      method:'DELETE'
    })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  if(data.deletedCount>0){
  
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    const remining = loadedToy.filter(toy=> toy._id !== id);
    setLoadedToys(remining)
  }
  
  
  })

    
  }
})









}

    return (
        <div>
            {/* <Toaster/> */}


            <div className='text-center text-2xl font-bold'>
            <h2>MY TOY</h2>
            <h1>Total added toy: {loadedToy?.length} </h1>
            </div>
            {loadedToy.length < 1 && (
                  <div className="text-center">
                    
                    <p className="text-center text-xl text-error">
                      MAYBE VERCEL SERVER ITS NOT RESPONDING, <br /> try to
                      Refresh sometime <br />
                      <button
                        className="btn"
                        onClick={() => {
                          location.reload();
                        }}
                      >
                        reload
                      </button>
                    </p>
                  </div>
                )}
            <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead  className="text-center">
                <tr>
                  <th>No.</th>
                  <th>Seller</th>
                  <th>Photo</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Details</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody  className="text-center">
                {loadedToy?.map((toy, index) => (
                  
                   
                    <tr key={toy._id}>
                      <th>{index + 1}</th>
                      <td>{toy.sellerName}</td>
                      <td>
                      <div className="avatar">
                        <div className="w-28 mask mask-squircle">
                          <img
                            src={toy.toyphoto}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </div>
                      </div>
                    </td>
                      <td>{toy.name}</td>
                      <td>{toy.category}</td>
                      <td>${toy.price}</td>
                      <td>{toy.quantity}</td>
                      <td>
                      <Link to={`/toy/${toy._id}`} className="btn">
                        Details
                      </Link>
                    </td>
                      <td>
                        <Link to={`/updateToy/${toy._id}`} className="btn btn-success text-white">
                          Update
                        </Link>
                      </td>
                      <td><button className='btn btn-error text-white' onClick={()=>handleDelete(toy._id)}>DELETE</button></td>
                    </tr>
                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
};

export default MyToy;