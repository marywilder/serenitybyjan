import React from 'react'
import oakyafterbirth from '../assets/Oaky-smaller.jpg'
function OakyAfterbirth() {
  return (
    <div className="product-container">
        <img src={oakyafterbirth} className="product-image"/>
        <h3>Oaky Afterbirth</h3>
        <p>It's kind of got an oaky afterbirth.</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default OakyAfterbirth