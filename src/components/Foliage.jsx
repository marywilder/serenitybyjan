import React from 'react'
import foliage from '../assets/foliage.jpg'
function Foliage() {
  return (
    <div className="product-container">
        <img src={foliage} className="product-image"/>
        <h3>Foliage</h3>
        <p>A romantic, understated scent with aromas of vanilla and amber</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default Foliage