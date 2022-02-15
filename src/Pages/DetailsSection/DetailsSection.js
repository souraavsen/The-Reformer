import React from "react";
import { useState } from "react";
import detailimg from "../../Images/header.png";
import sidelogo from "../../Images/sidebar.png";
import "./DetailsSection.css";

const DetailsSection = ({ animateClass, setAnimateClass }) => {
  return (
    <div
      className='-mt-44'
      onWheel={() => {
        setAnimateClass("motion-bg-animation uppercase px-2.5 py-0.5");
      }}
      onMouseOut={() => {
        setAnimateClass("motion-bg uppercase px-2.5 py-0.5");
      }}
    >
      <aside className='w-10 sticky top-1/2 left-0'>
        <div className='m-auto flex flex-col bg-white'>
          <i className='fab fa-facebook text-black mt-2 mx-auto text-3xl cursor-pointer'></i>
          <i className='fab fa-twitter text-black mt-2 mx-auto text-3xlcursor-pointer'></i>
          <i className='fab fa-instagram text-black mt-2 mx-auto text-3xl cursor-pointer'></i>
        </div>
      </aside>

      <div className='flex justify-between'>
        <div className='flex flex-col md:flex-row my-10 2xl:mb-16'>
          <div>
            <img src={detailimg} width='100%' alt='' />
          </div>
          <div className='md:max-w-sm 2xl:max-w-lg bg-gradient-to-br from-gray-200 to-gray-50 md:absolute md:top-2/4 md:left-2/3 md:-ml-20 md:mt-24 2xl:left-2/4 2xl:top-1/3 2xl:-ml-36 2xl:mt-60 p-12'>
            <div>
              <h2 className='text-2xl font-bold pb-4'>
                Melissa Bentivoglio CEO & Co-Founder
              </h2>
              <p>
                Melissa Bentivoglio is a classically trained ballet dancer and a
                renowned pilates and fitness instructor. Melissa credits her
                dedication to pilates as having changed her life after years of
                elite level performance. In 2018, she designed her own
                proprietary reformer for use in her own studio. By launching
                Frame, she hopes to make pilates more widely available and
                accessible, so that everyone has a chance to improve their
                quality of life.
              </p>
            </div>
            <div>
              <h2 className='text-2xl font-bold py-4'>
                Lee Belzberg Co-Founder
              </h2>
              <p>
                Following in the footsteps of his family, Lee Belzberg continues
                the Belzberg legacy with Frame. He seeks to combine his deep
                expertise of wealth management, real-estate banking, and private
                equity with his passion for health and wellness. Lee is excited
                to venture into new frontiers and take his strategic vision and
                entrepreneurial spirit to the digital-fitness startup space.
              </p>
            </div>
          </div>
        </div>
        <aside className='sticky top-1/2 left-full z-30 h-0'>
          <div className='-mr-14 transform rotate-90 flex justify-between items-center'>
            <img
              src={sidelogo}
              width='4%'
              className='mr-7 transform -rotate-90'
              alt=''
            />
            <div className='text-xs font-semibold text-center'>
              <div className={animateClass}>
                <span>M</span>
                <span>a</span>
                <span>d</span>
                <span>e&ensp;</span>
                <span>F</span>
                <span>o</span>
                <span>r&ensp;</span>
                <span>M</span>
                <span>o</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DetailsSection;
