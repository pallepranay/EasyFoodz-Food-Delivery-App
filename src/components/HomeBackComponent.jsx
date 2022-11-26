import React, { Fragment } from 'react';
import pexelbg from '../assets/pexelsbg.jpeg'

const HomeBackComponent = () => {
  return (
    <Fragment>
        <div className='max-w-[1640px] p-4 mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='text-gray-200 max-height-[500px] bg-black/40 flex flex-col absolute w-full h-full justify-center px-10'>
                    <h1 className='px-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                    The <span className='text-orange-500'>Fastest</span>
                    </h1>
                    <h1 className='px-4 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                     <span className='text-orange-500'>Food</span> Delivery @Sricity
                    </h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src={pexelbg} alt="" />
            </div>
        </div>
    </Fragment>
  )
}

export default HomeBackComponent