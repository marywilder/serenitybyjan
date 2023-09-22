import React from 'react'
import serenitynow from '../assets/serenity-smaller.jpg'
function SerenityNow() {
  return (
    <div className="product-container">
        <img src={serenitynow} className="product-image"/>
        <h3>Serenity Now</h3>
        <p>Serenity NOW!</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default SerenityNow