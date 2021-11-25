import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router'
import './app.scss'
import {  useDispatch, useSelector } from 'react-redux'
import { addProductCart } from '../redux/productsDucks'
import types from '../redux/types/types'
import { quantityDecimals } from '../helpers/functions'

const App = () => {
  const { products, cart } = useSelector(state => state.products)

  const dispatch = useDispatch()

  const handleAddCart = (id) => {
    dispatch(addProductCart(id))
  }
  const handleDeleteAllCart = () => {
    dispatch({type: types.CLEAR_CART})
  }
  useEffect(() => {
    // setProductsCart(JSON.parse(localStorage.getItem('cart')))
  }, [])

  const renderQuantity = (id) => {
    let ele = cart.find(ele => ele.id === id)
    console.log(ele,'dfdfd')
    return ele && <div title={ele.quantity}>{quantityDecimals(ele.quantity, 99)}</div>
  }
  return (
    <div className='app-container'>
      <header>
        <img src="https://cdn-icons-png.flaticon.com/512/609/609752.png" alt="logo" />
        <div className={`cart ${cart.length > 0 &&'cart-shoping'}`}>
          <i className="fas fa-shopping-cart"></i><p>$###</p>
          {
            cart.length > 0 && <p onClick={handleDeleteAllCart}>X</p>
          }
        </div>
      </header>
      <Outlet />
      <section>
        <h2>Store</h2>
        <hr />
        <section>
          {
            products.map((ele, i) => (
              <article key={ele.id}>
                {
                  renderQuantity(ele.id)
                }
                <img src={ele.imagen} alt={ele.nombre} onClick={(e) => handleAddCart(ele.id)}/>
              </article>
            ))
          }
        </section>
      </section>

    </div>
  )
}

export default App
