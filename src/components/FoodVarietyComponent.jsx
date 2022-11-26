import React from 'react'
import { categories } from './../dummydata'

// const categories = data.map(items => items.category);
// const uniqcat = categories.filter((q, idx)=>categories.indexOf(q) === idx);
// console.log(uniqcat);
const FoodVarietyComponent = () => {
  return (
    <React.Fragment>
      <div className='max-w-[1640px] m-auto px-6 py-6 '>
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Deliverable Categories</h1>
        <div className='grid grid-cols-3 gap-6 py-6 m-6'>
          {categories.map((items, index) =>(
            <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                <h2 className='font-bold sm:text-xl'>{items.name}</h2>
                <img className='w-40' src={items.image} alt="" />
            </div>
          ))}
        </div>
      </div>

    </React.Fragment>

  )
}

export default FoodVarietyComponent