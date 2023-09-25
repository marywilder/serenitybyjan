import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addToCart, getTotal} from '../features/cartSlice';
import cartImage from "../assets/shopping-cart-01-svgrepo-com.svg";
import menuIcon from '../assets/menu-svgrepo-com.svg';
import closeIcon from '../assets/close-svgrepo-com.svg';


export default function Navbar() {
  const dispatch = useDispatch();
 

 const cart = useSelector((state) => state.cart);

 const navRef = useRef();
 const showNavbar = () => {
  navRef.current.classList.toggle('responsive-nav');
  const menuImage = document.querySelector('.nav-icon');
  let menuSrc = menuImage.getAttribute('src');

  (menuSrc === menuIcon ) ?
    (menuImage.setAttribute('src', `${closeIcon}`)):
    (menuImage.setAttribute('src', `${menuIcon}`))
 }

 useEffect(() => {
  dispatch(getTotal());
}, [cart, dispatch])

 

  return (<>
    <button onClick={showNavbar} className="mobile-nav-button"><img src={menuIcon} className="nav-icon"/></button>
    <nav ref={navRef}>
        
        <NavLink to='/' >Home </NavLink>
        
        <NavLink to='/about'  className="about-link">About</NavLink>

        <NavLink to='/candles' className="shop-link">Shop</NavLink>

        
        <NavLink to='/cart' className="cart-link">
          <img src={cartImage} className="cart-icon"/>
        <span className="cart-quantity">
            <span>{cart.cartTotalQuantity}</span>
        </span>
        </NavLink>
    </nav>
    </>
  )
}
