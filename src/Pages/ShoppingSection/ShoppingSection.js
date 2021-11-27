import React from "react";

const ShoppingSection = ({ setAnimateClass }) => {
  return (
    <div
      className='flex flex-col justify-center items-center py-24 bg-gradient-to-b from-purple-300 to-white mt-12'
      onWheel={() => {
        setAnimateClass("motion-bg-animation uppercase px-2.5 py-0.5");
      }}
    >
      <h1 className='uppercase text-5xl font-bold'>Get Moving</h1>
      <button className='uppercase px-16 font-semibold py-2 mt-8 bg-blue-600 text-white'>
        Shop Now
      </button>
    </div>
  );
};

export default ShoppingSection;
