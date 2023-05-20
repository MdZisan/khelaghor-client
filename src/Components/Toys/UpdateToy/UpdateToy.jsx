import React from 'react';
import {  Navigate, useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'react-hot-toast';
const UpdateToy = () => {
    const loadedToy = useLoaderData();
    const {_id,toyphoto,name,sellerName,category,price,quantity,details,email,rating} = loadedToy
    const {
        reset , register,handleSubmit, watch,formState: { errors },} 
        = useForm();


        const onSubmit = (data) =>{

            data.price=parseInt(data.price)

            fetch(`https://khelaghor-server.vercel.app/updateData/${_id}`,{
                method:"PUT",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
      .then(data=>{
        console.log(data);

        if(data.modifiedCount>0){
          toast.success('product updated');

          return <Navigate to={'/mytoy'}></Navigate>
         
        }
            })





        }





    return (
        <div>
          {/* <Toaster></Toaster> */}
            <h1 className='text-center text-2xl font-semibold'>Update your Toy named: <span className='underline'>{name}</span> </h1>


        
            {/* form  */}

            <div className="bg-slate-200 p-10 m-6 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          {/* <input required defaultValue="test" {...register("example")} /> */}

          {/* include validation with required or other standard HTML validation rules */}
          <div className="grid grid-cols-2 gap-4">
            
            
           
           
           
                {/* price  */}
                <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">price</span>
              </label>
              <input required
                defaultValue={loadedToy?.price}
                type="number"
                placeholder="price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
            </div>
               
              
                {/* quantity  */}
                <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Quantity</span>
              </label>
              <input required
                defaultValue={loadedToy?.quantity}
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
                 defaultValue={loadedToy?.details}
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
            <input  className="btn" type="submit" value='Update TOY'/>
          </div>
        </form>
            
      </div>




            {/* form  */}



        </div>
    );
};

export default UpdateToy;