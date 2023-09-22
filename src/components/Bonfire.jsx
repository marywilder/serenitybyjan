import React from 'react'
import bonfire from '../assets/Bonfire-smaller.jpg';
function Bonfire() {
  return (
    <div className="product-container">
        <img src={bonfire} className="product-image"/>
        <h3>Bonfire</h3>
        <p>James Bonfire.</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default Bonfire