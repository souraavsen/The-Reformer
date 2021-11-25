import React from "react";
import detailimg from "../../Images/header.png";

const DetailsSection = () => {
  return (
    <div className='flex flex-col md:flex-row my-10'>
      <div>
        <img src={detailimg} width="100%" alt='' />
      </div>
      <div className='md:max-w-sm bg-gradient-to-br from-gray-200 to-gray-50 lg:absolute top-2/3 left-2/3 md:-ml-20 p-12'>
        <div>
          <h2 className='text-2xl font-bold pb-4'>
            Melissa Bentivoglio CEO & Co-Founder
          </h2>
          <p>
            Melissa Bentivoglio is a classically trained ballet dancer and a
            renowned pilates and fitness instructor. Melissa credits her
            dedication to pilates as having changed her life after years of
            elite level performance. In 2018, she designed her own proprietary
            reformer for use in her own studio. By launching Frame, she hopes to
            make pilates more widely available and accessible, so that everyone
            has a chance to improve their quality of life.
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold py-4'>Lee Belzberg Co-Founder</h2>
          <p>
            Following in the footsteps of his family, Lee Belzberg continues the
            Belzberg legacy with Frame. He seeks to combine his deep expertise
            of wealth management, real-estate banking, and private equity with
            his passion for health and wellness. Lee is excited to venture into
            new frontiers and take his strategic vision and entrepreneurial
            spirit to the digital-fitness startup space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
