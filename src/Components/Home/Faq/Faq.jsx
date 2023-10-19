import React, { useEffect, useState } from 'react';
import SingleFaq from './SingleFaq';

const Faq = () => {
    const [faqs, setFaq] = useState([])

    useEffect(()=>{
        fetch('./faq.json')
        .then(res=>res.json())
        .then(data=>setFaq(data))
    },[])
    return (
        <div className='my-4'>
              <h2 className='text-center text-3xl font-semibold'>FAQ</h2>

            <div className='grid md:grid-cols-2 w-11/12 mx-auto mt-4'>
                <div>
                    <img src="./faq.png" alt="" className='w-[80%]' />
                </div>
                <div className='my-auto '>

{
    faqs.map((faq,index)=><SingleFaq key={index} faq={faq}/>) 
}
</div>
            </div>
        </div>
    );
};

export default Faq;