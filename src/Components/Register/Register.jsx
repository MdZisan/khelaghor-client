import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
const [error,setError] = useState('')
  const {createUser,profileUpdate,user} = useContext(AuthContext);
  if(user){
   return <Navigate to={'/'}></Navigate>
  }


  const handleSignUp =(event)=>{
event.preventDefault();
const form = event.target;
const email =  form.email.value;
const password = form.password.value;
const photoUrl = form.photo.value;
const name= form.name.value;


if(password.length < 6){
  setError('Please set password more the 6 letter');
  return
}

createUser(email,password)
.then((res)=>{
  setError('')
  profileUpdate(name,photoUrl)
.then(result=>{
  console.log('profile',result);
})
.catch(error=>{
  console.log(error);
})
})
.catch(error=>{
  console.log(error);
})


form.reset()

  }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
         
          </div> <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name'  required placeholder="name" className="input input-bordered" />
              </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo'  required placeholder="Photo Url" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
          <p className='text-red-600'>{error}</p>
          <hr />
          <div className="form-control mt-3">
            <h2 className='text-center font-bold mb-2'>Already have an account?</h2>
          <button className="btn btn-secondary m-2" ><Link to='/login'>Log in</Link></button>
        </div>
          </div>
        </div>
      </div>
    );
};

export default Register;