import React from 'react';
import { FaShippingFast, FaGift, FaSmile } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => (
    <div className="max-w-xs mx-auto bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
    <span className="text-4xl text-blue-600 mb-4">{icon}</span>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const WhyChooseUsSection = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose Us
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Discover the reasons why <span className='font-bold'>KhelaGhor</span> is the perfect choice for your toy needs.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<FaShippingFast />}
            title="Fast Shipping"
            description="Get your favorite toys delivered to your doorstep with our lightning-fast shipping services."
          />
          <FeatureCard
            icon={<FaGift />}
            title="Exclusive Gifts"
            description="Enjoy exclusive gifts and promotions when you shop with us. Your satisfaction is our gift to you!"
          />
          <FeatureCard
            icon={<FaSmile />}
            title="Customer Happiness"
            description="Our dedicated customer support team is here to ensure your shopping experience is filled with smiles."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
