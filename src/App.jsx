import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './components/auth'
import { ToastContainer } from 'react-toastify';
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

import About from './components/About'
import OrderSummary from './components/OrderSummary'
import PageNotFound from './components/PageNotFound'
import Products from './components/Products'
import NewProducts from './components/NewProducts'
import FeaturedProducts from './components/FeaturedProducts'
import Candles from './components/Candles'
import CandleDetails from './components/CandleDetails'
import ThatOneNight from './components/ThatOneNight'
import Profile from './components/Profile'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'
import Cart from './components/Cart';
import backgroundImage from './assets/squiggle.svg';
import CartPreview from './components/cartPreview';


function App() {
  

  
    

  return (
    
    <AuthProvider>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='cart' exact element={<Cart/>}/>
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route
        path='products'
        element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />}
        />
        </Route>
        <Route path='candles' element={<Candles/>}>
          <Route path='1' element= {<ThatOneNight />}/>
          <Route path=':candleId' element={<CandleDetails/>}/>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>} /> 
        <Route path='login' element={<Login />} /> 
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      
      <img src={backgroundImage} className="backgroundImg"/>
      <CartPreview />
    </AuthProvider>
    
  )
}

export default App
