import React from 'react';

const SingleFaq = ({faq}) => {
    const {question,answer} = faq;
    return (
        <div>
             <div className="collapse  collapse-arrow border border-[#1e293b] hover:border-[#0066ff] rounded-lg mb-2 ">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    {question}
  </div>
  <div className="collapse-content"> 
    <p>
        {answer}
    </p>
  </div>
</div>
        </div>
    );
};

export default SingleFaq;