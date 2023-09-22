import React from 'react'
import sonofapreacher from '../assets/son-of-a-preacher.jpg'
function SonOfAPreacher() {
  return (
    <div className="product-container">
        <img src={sonofapreacher} className="product-image"/>
        <h3>Son of a Preacher Man</h3>
        <p>Taking time to make time.</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default SonOfAPreacher