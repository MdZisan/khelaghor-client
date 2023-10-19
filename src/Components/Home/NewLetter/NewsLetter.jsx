import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
      // You can implement your subscription logic here
      if (!email) {
        alert('Please enter your email address');
        return;
      }
      alert(`Subscribed with email ${email}`)

    //   console.log(`Subscribed with email: ${email}`);
      // Reset the email state after subscription
      setEmail('');
    };
  
    return (
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Stay up-to-date with our latest products, promotions, and news. Sign up for our newsletter.
          </p>
          <div className="mt-6 sm:flex">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-5 py-3 border border-transparent rounded-md leading-5 bg-white 
              border-blue-300
              placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200  transition duration-150 ease-in-out sm:max-w-xs sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="mt-4 w-full px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };

export default NewsLetter;