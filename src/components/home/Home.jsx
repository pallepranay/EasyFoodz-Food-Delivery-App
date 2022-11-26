import React, { Fragment, useState } from 'react';
import NavbarComponent from '../NavbarComponent';
import HomeBackComponent from '../HomeBackComponent';
import FoodVarietyComponent from '../FoodVarietyComponent';
import MenuSliderComponent from '../MenuSliderComponent';
import MenuComponent from '../MenuComponent';
import Cart from '../Cart';
import CartProvider from '../../store/CartProvider.js';
import Drinks from '../drinksComponent';
const Home = () => {
  const [isshown, setIsshown] = useState(false);
  
  const showHandler = () =>{
    setIsshown(true);
  };
  
  const hideHandler = () =>{
    setIsshown(false);
  }
    return (
        <CartProvider>
          {isshown && <Cart onClose = {hideHandler}/>}
          <NavbarComponent onShowCart = {showHandler}/>
          
          <HomeBackComponent/>
          <MenuSliderComponent/>
          <FoodVarietyComponent/>
          <MenuComponent/>
          <Drinks/>

  
        </CartProvider>
      );
}

export default Home;