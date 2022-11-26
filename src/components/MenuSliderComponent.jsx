import React from 'react'
import swa1 from '../assets/slideImage/swathimenu1.jpg'
import swr1 from '../assets/slideImage/swarnamukimenu4.jpg'
// import swa2 from '../assets/slideImage/swathimenu2.jpg'
import swr2 from '../assets/NonVeg/swarnaPrawnBiryani.jpg'
import swa3 from '../assets/NonVeg/swathiDragonChicken.jpg'
import swa4 from '../assets/NonVeg/swathiTandooriChicken.jpg'
import swr3 from '../assets/NonVeg/swarnaGingerChicken.jpg'
import swr4 from '../assets/NonVeg/swarnaFish.jpg'
import swa2 from '../assets/NonVeg/swathiChickenLollipop.jpg'
import swa5 from '../assets/NonVeg/swarnaChickenKebabBiryani.jpg'


const MenuSliderComponent = () => {


    return (
      <React.Fragment>
        <div className='max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-9'>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swarnamukhi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swr2} alt="" />
            </div>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swathi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swa1} alt="" />
            </div>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swathi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swa5} alt="" />
            </div>

            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swarnamukhi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swr4} alt="" />
            </div>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swathi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-500'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swa2} alt="" />
            </div>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swarnamukhi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swr1} alt="" />
            </div>


            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swarnamukhi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swr3} alt="" />
            </div>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swathi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swa4} alt="" />
            </div>
            <div className='rounded-xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                  <p className='font-bold text-2xl px-2 pt-4'>Swathi Restaurant</p>
                  <p className='px-2'>Guaranted delivery in 20min</p>
                  <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2 hover:text-orange-400'>Order Now</button>
              </div>
              <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={swa3} alt="" />
            </div>
            
        </div>
      </React.Fragment>
    );
  
  }
  
  export default MenuSliderComponent