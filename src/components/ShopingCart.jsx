import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTotalCart, quantityDecimals } from '../helpers/functions'
import './shopingCart.scss'

const ShopingCart = () => {
  const { cart } = useSelector(state => state.products)

  const handlePay = (e) => {
    e.preventDefault()
    const reference = new Date().getTime()
    const total = getTotalCart(cart)
    let checkout = new window.WidgetCheckout({
      currency: 'COP',
      amountInCents: total * 18200 ,
      reference: `jack_${reference}`,
      publicKey: 'pub_test_AQOb9XRmok39xbAWMNGl59hTROmT2vSH',
      redirectUrl: 'https://minimarket-guajolotas.surge.sh/',
    })
    checkout.open(function ( result ) {
      var transaction = result.transaction
      console.log('Transaction ID: ', transaction.id)
      console.log('Transaction object: ', transaction)
    })
  }
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
      <form onSubmit={handlePay}>
      <button>PAGAR</button>
      </form>
      </section>
      {
        cart.length > 0 &&  <div className='total-cart'><p><b>Total</b>:</p><h3>{`$${getTotalCart(cart)}`}.00 MXN</h3></div>

      }
    </aside>
  )
}

export default ShopingCart
