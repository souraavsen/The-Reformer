import React from 'react'

const ManagingDetails = () => {
    return (
      <div className='container grid grid-cols-1 md:grid-cols-3 items-center gap-16 my-8'>
        <div className='px-6'>
          <h2 className='text-2xl font-semibold mb-4'>
            Mark Mastrov Investor, Board of Director
          </h2>
          <h5>
            Mark Mastrov is an American businessman who was born in Oakland, CA.
            In addition to serving on the board and investing in Frame, he is
            the founder and former CEO of 24-Hour Fitness as well as many other
            fitness ventures worldwide. Mastrov is also a member of the
            Sacramento Kings ownership group.
          </h5>
        </div>
        <div className='px-6'>
          <h2 className='text-2xl font-semibold mb-4'>Michael Bruno Investor</h2>

          <h5>
            Michael Bruno is the owner and CEO of Core Health and Fitness. Core
            Health & Fitness is the world’s largest privately-held marketer and
            distributor of commercial fitness solutions to health clubs,
            community recreational centers, hotels, government, educational
            facilities and more.
          </h5>
        </div>
      </div>
    );
}

export default ManagingDetails
