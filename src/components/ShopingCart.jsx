import React from 'react'
import { useSelector } from 'react-redux'
import './shopingCart.scss'
const ShopingCart = () => {
  const { cart } = useSelector(state => state.products)
  console.log(cart)
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
            <article key={ele.id}>
              <div>{ele.quantity}</div>
              <img src={ele?.imagen} alt={ele.nombre} />
            </article>
            ))
          : <p><small>Press a product</small></p>
        }
        <div><p><b>Total</b>:</p><h3>{
          cart.forEach(ele => {
            return ele.precio 
          })
        }</h3></div>
      </section>
    </aside>
  )
}

export default ShopingCart
