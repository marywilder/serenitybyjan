import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';
import arrow from '../assets/arrow-right-svgrepo-com.svg';

export default function Home() {
  const dispatch = useDispatch();
  
  /*const {data} = useGetAllProductsQuery();*/
  const navigate = useNavigate();

  console.log("this the function", useGetAllProductsQuery())

  const {data} = useGetAllProductsQuery();
  
  console.log("this is the data variable: ", data);


  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
 
  }

  const closePopup = () => {
    const notice = document.querySelector('.shipping-notice');
    notice.style.display = "none"
  }
 
 

  return (
    <section className='home-container'>
      <div className="shipping-notice">
        <span onClick={() => {closePopup()}}>x</span>
        <p>
        Due to visiting my sister in Scottsdale, we are experiencing shipping delays. 
        </p>
      </div>
      <div className="title-container">
      
      <h1>Serenity by Jan</h1>
    <h2 className="home-title">Serenity starts with a scent.</h2>
    </div>
    
    <section className="shop-preview">
      <h3>New Arrivals</h3>
      
         <div className="products-preview">

       
          {data?.filter(product => product.id < 5).map(product => (
            
          
          
          <div key={product.id} className="product-home">
            <div className="description-home">
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} className="candles-preview"/>
            
            

            <div className="price-and-button">
            <span>${product.price}</span> 
            
            <button className="add-to-cart-home" onClick={() => handleAddToCart(product)}>+</button>
            </div>
            </div>
            
            </div>
            
            
         
         
         ))
         
         }
         </div>
      
      <button onClick={() => navigate('candles')} className="shop-now">shop now <img src={arrow} alt="arrow" className="arrow-home"/></button>
    </section>
    
    
    </section>

  )
}
