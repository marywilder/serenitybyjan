import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

           const itemIndex = state.cartItems.findIndex( (item) => item.id === action.payload.id);

           if (itemIndex >= 0) {
            state.cartItems[itemIndex] = {
                ...state.cartItems[itemIndex],
                cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
                
            };
            toast.info(`another ${state.cartItems[itemIndex].name}  added to cart`, {
                position: "bottom-left"
            });
           } else {

            let tempProduct = {...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProduct);
            toast.success(`${action.payload.name} added to cart`, {
                position: "bottom-left"
            })
        }

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));


        const cartPreview = document.querySelector('.cart-preview');
        
        cartPreview.style.display = "block";
        cartPreview.style.animation = 'cartOpening 4s linear';
        
        setTimeout(() => {
            cartPreview.style.animation = 'none';
        }, '7500');
    
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)

            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

                toast.info(`${action.payload.name} quanitity updated`, {
                    position: "bottom-left"
                });

            } else if (state.cartItems[itemIndex].cartQuantity === 1 ) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
    
                state.cartItems = nextCartItems;
                
                toast.error(`${action.payload.name} removed from cart`, {
                    position: "bottom-left"
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );

            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`${action.payload.name} removed from cart`, {
                position: "bottom-left"
            });
        },

        getTotal(state, action) {
            let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) =>{
                const { price, cartQuantity} = cartItem;
                const itemTotal = price *  cartQuantity;
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });

            state.cartTotalQuantity = quantity;

            state.cartTotalAmount = total;
        },
        clearCart(state, action) {
            state.cartItems = [];

            toast.error(`Cart cleared`, {
                position: "bottom-left"
            });

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        

    },
    
    

});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = cartSlice.actions;



export default cartSlice.reducer;

