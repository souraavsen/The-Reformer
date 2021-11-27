import React from "react";
import "./Footer.css";
import logo from '../../Images/logo.png'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='container grid grid-cols-3'>
        <div className='pt-8 pb-6 flex flex-col'>
          <h3 className='text-lg font-semibold'>Contact</h3>
          <h5 className='my-4 font-light'>info@framefitness.com</h5>
          <h5>Frame Innovative Technologies Corp.</h5>
          <h5 className='font-light'>265 S. Western Avenue</h5>
          <h5 className='font-light'>P.O. Box #741940</h5>
          <h5 className='font-light'>Los Angeles, CA 90004-9998</h5>
          <div className='pt-8'>
            <i class='fab fa-facebook text-white text-2xl cursor-pointer'></i>
            <i class='fab fa-twitter text-white text-2xl px-6 cursor-pointer'></i>
            <i class='fab fa-instagram text-white text-2xl cursor-pointer'></i>
          </div>
        </div>
        <div className='flex m-auto'>
          <img className='w-16 mr-2' src={logo} alt='' />
          <span className='text-xs relative -top-1'>TM</span>
        </div>
        <div className='mt-auto mb-8 float-right'>
          <h5 className='underline float-right font-light'>
            Terms and Conditions
          </h5>
          <div className='flex mt-10'>
            <h5 className='font-light ml-auto'>©Copyright 2021</h5>
            <h5 className='ml-8 font-light'>
              Frame is patent pending
            </h5>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
