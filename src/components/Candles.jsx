import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';


export default function Candles() {
    const dispatch = useDispatch();
  
    const {data} = useGetAllProductsQuery();
    
    
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      
    }
    
    
    
    const [searchParams, setSearchParams] = useSearchParams()
    const showSaleItems = searchParams.get('filter') === 'sale'
    const showRomanticItems = searchParams.get('filter') === 'romantic'
    const showIntrospectiveItems = searchParams.get('filter') === 'introspective'
    const showBlissItems = searchParams.get('filter') === 'bliss'
    const showFreeItems = searchParams.get('filter') === 'free'

    const showAllItems = searchParams.get('filter') === null

  return (
    <section className="shop-container">
        
        
        {/*<section className="filter-nav">

        <a onClick={() => setSearchParams({filter: 'sale'})}>On Sale</a>
        <br />
        <h4>Shop by mood</h4>
        <a onClick={() => setSearchParams({ filter: 'romantic'})}>Romantic</a> 
        <br />
        <a onClick={() => setSearchParams({ filter: 'introspective'})}>Introspective</a> 
        <br />
        <a onClick={() => setSearchParams({ filter: 'bliss'})}>Bliss</a> 
        <br />
        <a onClick={() => setSearchParams({ filter: 'free'})}>Free & Frolicking</a> 
        <br />
        <a onClick={() => setSearchParams({filter: 'null'})}>Reset Filter</a> 
        

  </section>*/}
        <div className="return-policy"><p>*Return Policy: You <i>burn it</i>, you <i>buy it!</i></p> <p>*Return Policy: You <i>burn it</i>, you <i>buy it!</i>*</p></div>

        <div className="listings-container">
        <h1>Candles</h1>

        <div className="listings">
            
        {data?.map(product => 
          <div key={product.id} className="product-container">
            
            <img src={product.image} alt={product.name} className="product-image"/>

            <h3>{product.name}</h3>

            <p>{product.desc}
            </p>
            <div className= "candles-price-and-button">
            <p className="price">${product.price}</p> 
            
            <button className="add-button" onClick={() => handleAddToCart(product)}>add to cart</button>
            </div>
            
             </div>

            )}

         </div>
         </div>

           {/* {showAllItems ? (
                <div>
                <h2 className='candle-title'>Sale</h2>
                <div className="listings">
                <Foliage />
                <SonOfAPreacher />
                <ThatOneNight />
                <Bonfire />
                <YouDrive />
                <Scottsdale />
                <SerenityNow />
                <OakyAfterbirth />
                <Eggshell />

              
                </div>
                </div>
            ) : (
                <></>
            )}
        
            {showSaleItems ? (
                <div >
                <h2 className='candle-title'>Sale</h2>
                <div className="listings">
                <Foliage />
                </div>
                </div>
            ) : (
                <></>
            )

            }

            {showRomanticItems ? (
                <div>
                <h2 className='candle-title'>Romantic</h2>
                <div className="listings">
                <ThatOneNight />
                <Foliage />
                <SonOfAPreacher />
                <Eggshell />
                
                </div>
                </div>
            ) : (
                <></>
            )

            }

            {showIntrospectiveItems ? (
                <div>
                <h2 className='candle-title'>Introspective</h2>
                <div className="listings">
                <Bonfire />
                <YouDrive />
                </div>
                </div>
            ) : (
                <></>
            )

            }

            {showBlissItems ? (
                <div>
                <h2 className='candle-title'>Bliss</h2>
                <div className="listings">
                <Eggshell />
                <SerenityNow />
                <OakyAfterbirth />
                </div>
                </div>

            ) : (
                <></>
            )

            }

            {showFreeItems ? (
                <div>
                    <h2 className='candle-title'>Free</h2>
                    <div className="listings">
                    <Scottsdale />
                    </div>
                </div>
            ) : (
                <></>
            )

            */}

            
         
    </section>
  )
}
