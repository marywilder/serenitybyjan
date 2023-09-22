import React from 'react'
import youdrive from '../assets/You-drive-smaller.jpg'
function YouDrive() {
  return (
    <div className="product-container">
        <img src={youdrive} className="product-image"/>
        <h3>You drive</h3>
        <p>I've had too much wine.</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default YouDrive