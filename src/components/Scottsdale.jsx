import React from 'react'
import scottsdale from '../assets/Scottsdale-smaller.jpg'
function Scottsdale() {
  return (
    <div className="product-container">
        <img src={scottsdale} className="product-image"/>
        <h3>Scottsdale Sunsets</h3>
        <p>Need I say more?</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default Scottsdale