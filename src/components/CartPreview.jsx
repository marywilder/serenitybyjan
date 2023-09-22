import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, clearCart, decreaseCart, getTotal, removeFromCart } from '../features/cartSlice';
import cartIcon from '../assets/shopping-cart-01-svgrepo-com.svg'

function CartPreview() {
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

    const navigate = useNavigate();
    
    const pauseAnimation = (event) => {
        event.currentTarget.style.animationPlayState = "paused";
        
    }

    const playAnimation = (event) => {
        event.currentTarget.style.animationPlayState = "running";
        
    }
    
    
  return (
    <div className="cart-preview" onMouseEnter={pauseAnimation} onMouseLeave={playAnimation}>
        <div onClick={() => navigate('cart')} className="preview-cart-link"><img src={cartIcon} className="preview-shopping-cart"/><span>{cart.cartTotalQuantity} </span></div>
        <h1>added to cart!</h1>
        {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
                <p>Your cart is currenty empty.</p>
                
            </div>
        ): (
            <div className="cart-preview-container">
                <div className="preview-titles">
                    <h3 className="">Product</h3>
                    <h3 className="">Price</h3>
                    <h3 className="">Quantity</h3>
                    <h3 className="">Total</h3>
                </div>
                <div className="cart-preview-items">{cart.cartItems?.map(cartItem => (
                  <div className="cart-preview-item" key={cartItem.id}>
                        <img src={cartItem.image} alt={cartItem.name} className=""/>
                        <div className="name-preview">
                            <h3>{cartItem.name}</h3>
                            <button onClick= {() => handleRemoveFromCart(cartItem)}>Remove</button>
                        </div>
                        <div className="price-and-quantity">
                        
                        <div className="quantity-container-preview">
                            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                            <div className="">{cartItem.cartQuantity}</div>
                            <button onClick={()=> handleIncreaseCart(cartItem)}>+</button>
                            
                        </div>
                        <div className="price-preview">
                        ${cartItem.price}
                        </div>
                        </div>
                        <div className="preview-item-total">${cartItem.price * cartItem.cartQuantity}</div>
                  </div>
                )
                    
                )}</div>

                <div className="preview-end-buttons">
                    <button className="" onClick={() => navigate('candles')}>Continue Shopping</button>
                    <div className="">
                        <span>Subtotal</span>
                        <span className="">${cart.cartTotalAmount}</span>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button onClick={() => navigate('cart')}>Check out</button>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default CartPreview