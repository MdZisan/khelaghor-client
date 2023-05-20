import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setBlogs] =useState([]);

    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))


    },[])






    return (
        <div className='text-center mx-9  my-3'>
           <h1 className='font-extrabold text-3xl'>BLOG</h1>
            <hr className='my-2'/>
           <div className='space-y-3'>
            
            {
                blogs.map((blog,index)=>(
                    <div className="mockup-window border bg-slate-400" key={index}>
                    <div className="flex flex-col justify-center px-4 py-16 bg-slate-700 text-white">
                        <p className='font-bold text-3xl mb-3'>{blog.question}</p>
                        <p className='font-semibold text-xl'>{blog.answer}</p>
                    </div>
                  </div>
                ))
            }

          
            </div> 
        </div>
    );
};

export default Blogs;