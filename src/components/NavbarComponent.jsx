import React, { Fragment, useContext} from 'react'
import CartContext from '../store/cart-context'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import { useState } from 'react'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'

import logo from '../assets/logo2.png'

const NavbarComponent = (props) => {
    const cartTemp = useContext(CartContext);
    const numOfCartItem = cartTemp.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);
    const [nav, setNav] = useState(false);
    return (
        <Fragment>
            <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
                {/* Left Portion of NavBar */}
                <div className='flex items-center'>
                    <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                        <AiOutlineMenu size={30} />
                    </div>

                    <img className='px-2' style={{ 'width': '200px' }} src={logo} alt="" />

                    {/* 
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>

                        Easy<span className='font-bold'>FOODZ</span>
                    </h1> */}
                </div>

                {/* Search Input Bar*/}
                <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <AiOutlineSearch size = {25}/>
                    <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder="Order Food Recipies"/>
                </div>
                
                {/* Cart Checkout */}
                <button className='bg-black text-white hidden md:flex item-center py-2 px-6 rounded-full hover:bg-gray-500' onClick={props.onShowCart}>
                    <BsFillCartFill size={20} className='mr-2'/>
                    Cart
                    <span style={{'backgroundColor':'white','padding':'0.1rem 0.8rem', 'borderRadius': '20px', 'fontWeight':'bold', 'marginLeft': '0.5rem', color:'black'}}>
                        1
                    </span>
                </button>
                {nav ? <div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'></div>:''}
                {/* Menu */}
                <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' :'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                    <AiOutlineClose size={30} onClick = {()=>setNav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
                    <img className='px-5 py-2' style={{ 'width': '200px' }} src={logo} alt="" />

                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='text-xl py-4 flex'>
                                <FaWallet className='mr-4'/>
                                Wallet
                            </li>
                            <li className='text-xl py-4 flex'> 
                                <TbTruckDelivery className='mr-4' size={25}/>
                                Track Orders 
                            </li>
                            <li className='text-xl py-4 flex'>
                                <MdHelp className='mr-4' size={25}/>
                                Help
                            </li>
                            <li className='text-xl py-4 flex'>
                                <MdFavorite className='mr-4' size={25}/>
                                Favorites
                            </li>
                            <li className='text-xl py-4 flex'>
                                <AiFillTag className='mr-4' size={25}/>
                                Resturant nearme
                            </li>
                            <li className='text-xl py-4 flex'>
                                <BsFillSaveFill className='mr-4' size={25}/>
                                Hungry?
                            </li>
                            <li className='text-xl py-4 flex'>
                                <FaUserFriends className='mr-4' size={25}/>
                                Invite a Friend
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </Fragment>
    )
}

export default NavbarComponent