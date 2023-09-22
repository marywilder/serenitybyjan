import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, clearCart, decreaseCart, getTotal, removeFromCart } from '../features/cartSlice';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="cart-page">
        <h1>Your cart</h1>
        {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
                <p>Your cart is currenty empty.</p>
                
            </div>
        ): (
            <div className="titles">
              <div className="subtitles">
                <h3 className="product-title">Item</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
                <div className="cart-items">{cart.cartItems?.map(cartItem => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <div className="item-container">
                        <img src={cartItem.image} alt={cartItem.name} />
                        
                            <h3>{cartItem.name}</h3>
                            <p>{cartItem.desc}</p>
                        </div>
                        <div className="cart-product-price">
                        ${cartItem.price}
                        </div>
                        <div className="cart-product-quantity">
                            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                            <div className="count">{cartItem.cartQuantity}</div>
                            <button onClick={()=> handleIncreaseCart(cartItem)}>+</button>

                        </div>
                        <div className="item-last-column">
                        <div className="cart-product-total-price">${cartItem.price * cartItem.cartQuantity}</div>
                        <button onClick= {() => handleRemoveFromCart(cartItem)}>remove</button>
                        </div>
                    </div>
                  </div>
                  
                )
                    
                )}</div>
                <br />
                <div className="cart-summary">
                    <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="amount">${cart.cartTotalAmount}</span>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Check out</button>
                        <div className="continue-shopping"></div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
