import React, { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";
import { Link, useLocation } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const AllToys = () => {
  const [order, setOrder] = useState(false);
  const [toys, setToys] = useState([]);
  const [limit, setLimit] = useState(20);
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState(true);

  useEffect(() => {
    fetch(`https://khelaghor-server.vercel.app/alltoys/${order}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [order, limit]);

  const sort = () => {
    setOrder(!order);
  };
  const limits = () => {
    setLimit(0);
  };

  useEffect(() => {
    fetch(`https://khelaghor-server.vercel.app/alltoy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [searchText]);

  const handleSearch = () => {
    // fetch(`https://khelaghor-server.vercel.app/alltoy/${searchText}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setJobs(data);
    //   });
  };
  // console.log(searchText);
  // console.log(toys);

  return (
    <div className="  md:p-16">
      <div className="md:absolute right-5 flex space-x-3">
        <label> switch view</label>
        <input
          type="checkbox"
          className="toggle"
          checked={view}
          onClick={() => setView(!view)}
        />
        {/* <input type="radio" name="table" className="radio" checked  onClick={()=>setView(true)}/>
        <input type="radio" name="card" className="radio" onClick={()=>setView(false)} /> */}
      </div>
      <h1 className="text-3xl  font-bold text-center">ALL TOYS COLLECTION</h1>
      <h1 className="text-2xl font-semibold text-center">
        Total Toy On This page: {toys.length}
      </h1>
      <div className="text-center my-3">
        <input
          type="text"
          id=""
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-slate-100 rounded-xl px-14 md:px-24 py-2"
          placeholder="Search Toys"
        />
      </div>
      <div className="text-center my-2 ">
        <button className="btn " onClick={sort}>
          Sort by price{" "}
          <span className="ml-2">
            {order ? <FaArrowDown /> : <FaArrowUp />}
          </span>
        </button>
      </div>
      {/* card format */}
      {view || (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-5 w-[95%] md:w-full mx-auto">
          {toys.map((toy) => (
            <AllToyCard key={toy._id} toy={toy}></AllToyCard>
          ))}
        </div>
      )}
{toys.length < 1 && (
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
      {/* table format */}
      {view && (
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead className="text-center">
                <tr>
                  <th>No.</th>
                  <th>Seller</th>
                  <th>Photo</th>
                  <th>Toy Name</th>
                  <th>Sub-category</th>
                  <th className="flex items-center">
                    Price{" "}
                    <span className="ml-1">
                      {order ? <FaArrowDown /> : <FaArrowUp />}
                    </span>
                  </th>
                  <th>Available Quantity</th>
                  <th>View Details</th>
                </tr>
              </thead>
              
              <tbody className="text-center">
                

                {toys.map((toy, index) => (
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
                    <td className="font-semibold">{toy.name}</td>
                    <td>{toy.category}</td>
                    <td className="font-semibold text-lg text-success">
                      ${toy.price}
                    </td>
                    <td className="text-error">{toy.quantity}</td>
                    <td>
                      <Link to={`/toy/${toy._id}`} className="btn">
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="text-center">
        {toys.length > 20 || (
          <button className="btn" onClick={limits}>
            See ALL
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;
