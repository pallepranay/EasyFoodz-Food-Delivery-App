import React, { Fragment } from 'react'
import bg from '../assets/pexelsbg2.jpeg'
import { Link } from 'react-router-dom'
import { restaurants } from '../dummydata'

const FirstPageComponent = () => {
    return (
        <Fragment>
        <div className='max-w-[1640px] p-4 mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='text-gray-200 max-height-[500px] bg-black/40 flex flex-col absolute w-full h-full justify-center px-10'>

                    <button className='px-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl '>
                        <span className='text-white-500 hover:text-orange-200'><Link to={`/home`}>Explore EasyFoodZ</Link></span>
                    </button>
                </div>
                <img className='w-full max-h-[500px] object-cover' src={bg} alt="" />
            </div>
        </div>

        <h1 className=' pt-6 font-bold text-5xl text-orange-400 text-center'> Restaurants @ Sricity</h1>
        <div className='max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-9'>
            {restaurants.map((items, index) =>(
            <div key={index} className='rounded-xl relative'>
                
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>{items.name}</p>
                    <p className='px-2'>Guaranted delivery in 20min</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-500'><Link to={`/home`}>Explore Items</Link></button>
                </div>
                <img className='max-h-[200px] md:max-h-[260px] w-full object-cover rounded-xl' src={items.image} alt="" />
            </div>
            ))}
        </div>
    </Fragment>
    )
}

export default FirstPageComponent;