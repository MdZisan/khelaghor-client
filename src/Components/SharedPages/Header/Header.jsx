import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TbHorseToy } from 'react-icons/tb';
import { RxAvatar } from 'react-icons/rx';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LazyLoad from 'react-lazy-load';

const Header = () => {
  const {logout,user}= useContext(AuthContext);
  const handleLogOut = ()=>{
    logout()
   
   
  }

    return (
        <>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/alltoys'>All Toys</Link></li>
     { user &&
       <><li><Link to='/mytoy'>My Toys</Link></li>
       <li><Link to='/addtoy'>Add A Toy</Link></li>
       </>
     }
      <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
    </div>
   <Link to='/' className="btn btn-ghost normal-case text-xl">KhelaGhor 
   <span className='ml-2 text-3xl'><TbHorseToy/></span>
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/alltoys'>All Toys</Link></li>
      { user &&
       <><li><Link to='/mytoy'>My Toys</Link></li>
       <li><Link to='/addtoy'>Add A Toy</Link></li>
       </>
     }
      <li><Link to='/blogs'>Blogs</Link></li>
   
    </ul>
  </div>
  <div className="navbar-end">
  {user ? <a className='btn hidden md:block pt-4 mx-2  border-none  text-white'><button className=' ' onClick={handleLogOut}>Logout</button></a> : <Link to='/login' className='btn   border-none'>Login</Link>}
       {user&& <p className='hidden md:block'>{user.email}</p>}
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
       {/* { user || <div className="rounded-full">
          <div className='text-3xl'><RxAvatar/></div>
        </div>} */}
       { user?.photoURL ? <div className="avatar"  title={user.displayName}>
  <div className="w-10 rounded-full" title={user.displayName} >
    <LazyLoad>

    <img src={user.photoURL} title={user.displayName}/>
    </LazyLoad>
  </div>
</div> : <div className="rounded-full">
          <div className='text-3xl'><RxAvatar/></div>
        </div>}
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li>{user&& <p className='text-lg'> Name: {user.displayName}</p>}</li>
          <li><small>{user&& <p className='md:hidden'>{user.email}</p>}</small></li>
        <li> 
           {/* <button onClick={handleLogOut}>Logout</button>  */}
        {user ? <p  className=''><button onClick={handleLogOut}>Logout</button></p> : <Link to='/login'>Login</Link>}
       
        
         </li>
        
      </ul>
    </div>
    
  </div>
</div> 
        </>
    );
};

export default Header;