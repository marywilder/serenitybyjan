import React from 'react'
import eggshell from '../assets/Eggshell-smaller.jpg'

function Eggshell() {
  return (
    <div className="product-container">
        <img src={eggshell} className="product-image" id="eggshell"/>
        <h3>Eggshell</h3>
        <p>A softer version of white.</p>
        <p className="price">$17.99</p>
        <button className="add-button">add to cart</button>
    </div>
  )
}

export default Eggshell