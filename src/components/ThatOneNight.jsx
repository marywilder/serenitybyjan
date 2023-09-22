import React from 'react'
import onenight from '../assets/One-night-smaller.jpg'
export default function ThatOneNight() {
  return (
    <div className="product-container">
      <img className="product-image" src={onenight} />
      <h3>That One Night</h3>
        <p>you made everything alright. Our bestseller</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button></div>
  )
}
