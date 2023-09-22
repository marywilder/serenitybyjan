import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './features/productsSlice.jsx';
import { productsApi } from './features/productsApi.jsx'
import cartReducer, { getTotal } from './features/cartSlice.jsx'

const store = configureStore({
  reducer: {
  products: productsReducer,
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer, 
},
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotal());

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
)
