import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalCart, quantityDecimals } from '../helpers/functions'
import './shopingCart.scss'

const ShopingCart = () => {
  const { cart } = useSelector(state => state.products)
  return (
    <aside>
      {
        cart.length > 0? <h2>Shoping Cart</h2> : <h2>.</h2>
      }
      <hr />
      <section>
        {
          cart.length > 0
          ? cart.map(ele => (
            <Link key={ele.id} to={`detail/${ele.id}`}>
              <div>{quantityDecimals(ele.quantity, 99)}</div>
              <img src={ele?.imagen} alt={ele.nombre} />
            </Link>
            ))
          : <p><small>Press a product</small></p>
        }

      </section>
      {
        cart.length > 0 &&  <div className='total-cart'><p><b>Total</b>:</p><h3>{`$${getTotalCart(cart)}`}.00</h3></div>

      }
    </aside>
  )
}

export default ShopingCart
