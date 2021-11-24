import React, {useEffect, useState} from 'react'
import { Outlet, useLocation } from 'react-router'
import './app.scss'
import { addQuantityLocalSotrage } from '../helpers/functions'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const App = () => {
  const { products } = useSelector(state => state.products)
  const [productsCart, setProductsCart] = useState(null)
  const location = useLocation()
  const handleAddCart = (ele) => {
    addQuantityLocalSotrage(productsCart, ele)
  }
  useEffect(() => {
    setProductsCart(JSON.parse(localStorage.getItem('cart')))
  }, [])
  return (
    <div className='app-container'>
      <header>
        <img src="https://cdn-icons-png.flaticon.com/512/609/609752.png" alt="logo" />
        <div className='cart cart-shoping'>
          <i className="fas fa-shopping-cart"></i><p>$###</p>
          {
            true && <p>X</p>
          }
        </div>
      </header>
      <Outlet />
      <section>
        <h2>Store</h2>
        <hr />
        <section>
          {
            products.map(ele => (
              <article key={ele.id}>
                {/* {productsCart[ele.cart] > 0 && <div>{productsCart[ele.cart]}</div>} */}
                <img src={ele.imagen} alt={ele.nombre} onClick={(e) => handleAddCart(ele)}/>
              </article>
            ))
          }
        </section>
      </section>

    </div>
  )
}

export default App
