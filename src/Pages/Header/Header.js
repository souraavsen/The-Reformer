import React from "react";

const Header = ({ setAnimateClass }) => {
  return (
    <div
      className='container my-24 grid grid-cols-1 md:grid-cols-2 items-center'
      onWheel={() => {
        setAnimateClass("motion-bg-animation uppercase px-2.5 py-0.5");
      }}
    >
      <div className='mb-10 md:mb-0'>
        <h1 className='text-center text-4xl font-bold'>Our Story</h1>
      </div>
      <div className='mx-10 md:mr-32'>
        <h5>
          Melissa Bentivoglio and Lee Belzberg have paired together their
          extensive backgrounds of elite fitness instruction and
          entrepreneurship to bring you Frame—a groundbreaking approach to
          pilates disrupting the traditional at-home fitness market.
        </h5>
      </div>
    </div>
  );
};

export default Header;
