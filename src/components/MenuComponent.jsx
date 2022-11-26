import React, { Fragment } from 'react'
import { data, categories } from '../dummydata.js'
import { useState } from 'react'

const MenuComponent = () => {

  const submitHandler = event =>{
    
  };
  const [menu, setMenu] = useState(data);
  const filterCategory = (category) => {
    console.log(data)
    setMenu(
      data.filter((item) => {
        return item.category === category;
      })
    )
  }

  const filterPrice = (price) => {
    setMenu(
      data.filter((item) => {
        return item.price === price;
      })
    )
  }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>Order Now</h1>

      <div className='flex flex-col lg:flex-row justify-between pt-10'>

        <div>
          <p className='font-bold text-gray-700'>
            Filter By Price :
          </p>
          <div className='flex justify-between max-w-[390px] w-full pt-3'>
            <button onClick={() => filterPrice('₹200')} className='m-1 px-3 py-0.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl'>
              ₹200
            </button>
            <button onClick={() => filterPrice('₹300')} className='m-1 px-3 py-0.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl'>
              ₹300
            </button>
            <button onClick={() => filterPrice('₹250')} className='m-1 px-3 py-0.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl'>
              ₹250
            </button>
            <button onClick={() => filterPrice('₹150')} className='m-1 px-3 py-0.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl'>
              ₹150
            </button>
            <button onClick={() => filterPrice('₹450')} className='m-1 px-3 py-0.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl'>
              ₹450
            </button>


          </div>
        </div>


        <div>
          <p className='font-bold text-gray-700'>Filter By Category: </p>
          <div className='flex justify-between flex-wrap pt-3'>
            <button onClick={() => setMenu(data)} className='m-1 px-3 py-0.5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl'>
              All Varities
            </button >
            <button onClick={() => filterCategory('nonveg')} className='m-1 px-3 py-0.5 border-2 border-orange-600 rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white'>
              NonVeg
            </button>
            <button onClick={() => filterCategory('veg')} className='m-1 px-3 py-0.5 border-2 border-orange-600 rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white'>
              Vegyy
            </button >
            <button onClick={() => filterCategory('beverages')} className='m-1 px-3 py-0.5 border-2 border-orange-600 rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white'>
              Thickshakes
            </button>
            <button onClick={() => filterCategory('chinese')} className='m-1 px-3 py-0.5 border-2 border-orange-600 rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white'>
              Chinese
            </button>
            <button onClick={() => filterCategory('ComboMenu')} className='m-1 px-3 py-0.5 border-2 border-orange-600 rounded-xl text-orange-600 hover:bg-orange-600 hover:text-white'>
              Combo
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10'>
        {menu.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-400'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white px-2 py-1.5 rounded-full m-1 hover:bg-orange-400'>
                  <button>+ Add</button>
                </span>
                <span className='bg-orange-500 text-white px-2 py-1.5 rounded-full m-1'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent