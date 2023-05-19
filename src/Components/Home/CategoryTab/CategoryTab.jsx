import React, { useEffect, useState } from "react";
import SingleCategoryTab from "./SingleCategoryTab";


const CategoryTab = () => {
  const [category, setCategory] = useState("marvel");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

//   console.log(toys);

  return (
    <div className="bg-slate-100 md:p-4 md:mx-5 md:rounded-2xl md:my-4">
       
        <h2 className="text-center text-3xl font-bold pb-3">Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 w-1/2  mx-auto my-3 space-y-3 md:space-y-0">
        <p className={`btn w-5/6 bg-slate-500 ${category==="marvel" && 'bg-slate-900'}`} onClick={() => setCategory("marvel")}>
          Marvel
        </p>
        <p className={`btn w-5/6 bg-slate-500 ${category==="DC" && 'bg-slate-900'}`} onClick={() => setCategory("DC")}>
          DC
        </p>
        <p className={`btn w-5/6 bg-slate-500 ${category=== "disney" && 'bg-slate-900'}`} onClick={() => setCategory("disney")}>
          Disney
        </p>
        <p className={`btn w-5/6 bg-slate-500 ${category=== "starWars" && 'bg-slate-900'}`} onClick={() => setCategory("starWars")}>
          Star wars
        </p>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  md:w-[95%] mx-auto gap-3 bg-slate-50 md:p-4 rounded-2xl">
{  toys?.map(toy=><SingleCategoryTab key={toy._id} toy={toy}></SingleCategoryTab>)}


      </div>
    
    </div>
  );
};

export default CategoryTab;
