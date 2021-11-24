import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router'
import './app.scss'
import { addQuantityLocalSotrage } from '../helpers/functions'
import {  useSelector } from 'react-redux'

const App = () => {
  const { products } = useSelector(state => state.products)
  const [productsCart, setProductsCart] = useState(null)

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
        <div>
        <i className="fas fa-shopping-cart"></i> $###
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
