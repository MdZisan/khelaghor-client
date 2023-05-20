import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Select from 'react-select';
import { useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const AddToy = () => {
 







  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const options = [
    { value: 'marvel', label: 'marvel' },
    { value: 'disney', label: 'disney' },
    { value: 'starWars', label: 'starWars' },
    { value: 'DC', label: 'DC' }
  ]
  const rating = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 }

  ]



  const {
    reset ,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    data.category= selectedOption.value;
    data.rating= selectedRating.value;
    data.price=parseInt(data.price)
    console.log(data);

    fetch('https://khelaghor-server.vercel.app/addtoy',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            toast.success('Toy added successfully')
           
            reset();
        }
        
        console.log(data)})
   
  };

  return (
    <div>
        <Toaster></Toaster>
      <h1 className="text-4xl font-bold text-center">Add Your Toy</h1>
     
      <div className="bg-slate-200 p-10 m-6 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          {/* <input required defaultValue="test" {...register("example")} /> */}

          {/* include validation with required or other standard HTML validation rules */}
          <div className="grid grid-cols-2 gap-4">
            {/* Toy Photo URl */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Toy Photo URl</span>
              </label>
              <input required
              
                type="text"
                placeholder="Toy Photo URl"
                className="input input-bordered"
                {...register("toyphoto", { required: true })}
              />
            </div>
            {/* Toy name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Toy Name</span>
              </label>
              <input required
                type="text"
                placeholder="toyname"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
            {/* Seller Name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Seller Name</span>
              </label>
              <input required
                value={user?.displayName}
                type="text"
                placeholder="Seller Name "
                className="input input-bordered"
                {...register("sellerName", { required: true })}
              />
            </div>
            {/* Email  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input required
                value={user?.email}
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>
            {/* Category  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Category</span>
              </label>
              {/* <input required
                value={user?.email}
                type="text"
                placeholder="Category"
                className="input input-bordered"
                {...register("Category", { required: true })}
              /> */}
               <Select required options={options}  defaultValue={selectedOption}
              onChange={setSelectedOption} />
            </div>
                {/* price  */}
                <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">price</span>
              </label>
              <input required
                
                type="number"
                placeholder="price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
            </div>
                {/* rating  */}
                <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Rating</span>
              </label>
              {/* <input required
                
                type="number"
                placeholder="rating"
                className="input input-bordered"
                {...register("rating", { required: true })}
              /> */}
                <Select required options={rating}  defaultValue={selectedRating}
              onChange={setSelectedRating} />
            </div>
                {/* quantity  */}
                <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Quantity</span>
              </label>
              <input required
                
                type="number"
                placeholder="quantity"
                className="input input-bordered"
                {...register("quantity", { required: true })}
              />
            </div>
                {/* details  */}
                <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text text-lg font-semibold">Details Description</span>
              </label>
              <input required
                
                type="text"
                placeholder="Details Description"
                className="input input-bordered "
                {...register("details", { required: true })}
              />
            </div>
          </div>

          <div>
            {/* errors will return when field validation fails  */}

          </div>
          <div className="form-control mt-6">
            <input  className="btn" type="submit" value='ADD TOY'/>
          </div>
        </form>
            
      </div>
      {/* <p>{errors && <span>This field is required</span>}</p> */}
    </div>
  );
};

export default AddToy;
