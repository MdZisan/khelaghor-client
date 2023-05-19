import React, { useEffect, useState } from 'react';
import AllToyCard from './AllToyCard';
import { useLocation } from 'react-router-dom';



const AllToys = () => {
    const [order,setOrder] = useState(false);
    const [toys,setToys] =useState([]);
    const [limit,setLimit] = useState(20)
    const [searchText, setSearchText] = useState("");


    useEffect(()=>{
            fetch(`http://localhost:5000/alltoys/${order}?limit=${limit}`)
            .then(res=>res.json())
            .then(data=>setToys(data))



    },[order,limit])


const sort=()=>{
    setOrder(!order)
}
const limits = ()=>{
    setLimit(0)
}

useEffect(()=>{
    fetch(`http://localhost:5000/alltoy/${searchText}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setToys(data);
    });


},[searchText])

const handleSearch =()=>{
    // fetch(`http://localhost:5000/alltoy/${searchText}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setJobs(data);
    //   });
   
}
console.log(searchText);

// console.log(toys);

    return (
        <div className='  md:p-16'>
            <h1 className='text-3xl  font-bold text-center'>ALL TOYS COLLECTION</h1>
            <h1 className="text-2xl font-semibold text-center">Total Toy On This page: {toys.length}</h1>
            <div className='text-center my-3'>
               
                <input  type="text" id="" onChange={(e)=>setSearchText(e.target.value)} className='bg-slate-100 rounded-xl  px-24 py-2' placeholder='Search Toys'/>
            </div>
            <div className='text-center my-2'>
                <button className="btn" onClick={sort} >Sort</button>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-5 '>
                {
                    toys.map(toy=><AllToyCard
                    key={toy._id}
                    toy={toy}
                    
                    ></AllToyCard>)
                }
            </div>
           <div className='text-center'>
           {toys.length > 20 || <button className="btn" onClick={limits}>See ALL</button>}
           </div>
        </div>
    );
};

export default AllToys;