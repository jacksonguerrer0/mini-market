import React, {useEffect} from 'react'
import { Outlet } from 'react-router'
import './app.scss'
import {  useDispatch, useSelector } from 'react-redux'
import { addCart, addProductCart } from '../redux/productsDucks'
import types from '../redux/types/types'
import { getCartLocalStorage, getTotalCart, quantityDecimals, setCartLocalStorage } from '../helpers/functions'

const App = () => {
  const { products, cart } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const handleAddCart = (id) => {
    dispatch(addProductCart(id))
  }
  const handleDeleteAllCart = () => {
    dispatch({type: types.CLEAR_CART})
    setCartLocalStorage([])
  }
  const renderQuantity = (id) => {
    let ele = cart.find(ele => ele.id === id)
    return ele && <div title={ele.quantity}>{quantityDecimals(ele.quantity, 99)}</div>
  }

  useEffect(() => {
    dispatch(addCart(getCartLocalStorage()))
  }, [dispatch])
  return (
    <div className='app-container'>
      <header>
        <img src="https://cdn-icons-png.flaticon.com/512/609/609752.png" alt="logo" />
        <div className={`cart ${cart.length > 0 &&'cart-shoping'}`}>
          <i className="fas fa-shopping-cart"></i><p>{`$${getTotalCart(cart)}`}.00</p>
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
              <article key={ele.id} onClick={(e) => handleAddCart(ele.id)}>
                {
                  renderQuantity(ele.id)
                }
                <img src={ele.imagen} alt={ele.nombre}/>
              </article>
            ))
          }
        </section>
      </section>

    </div>
  )
}

export default App
