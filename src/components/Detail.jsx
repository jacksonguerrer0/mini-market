import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  useParams } from 'react-router'
import './detail.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart, deleteProductCart } from '../redux/productsDucks'
const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { cart } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const handleAddProductCart = () => {
    dispatch(addProductCart(product?.id))
  }
  const handleRemoveProductCart = () => {
    dispatch(deleteProductCart(product?.id))
  }
  useEffect(() => {
    const productDetail = cart.find(ele => ele.id === parseInt(id))
    setProduct(productDetail)
  }, [id, cart])
  return (
    <aside>
      <h2>Product <Link to='/'><i className="fas fa-chevron-left"></i></Link></h2>
      <hr />
      <article>
      {
        product &&
        <>
        <div className='product-hero' title={product?.quantity}>
          <div>{product?.quantity}</div>
          <img src={product?.imagen} alt={product?.nombre} />
        </div>
        <div className='product-info'>
          <div><p><b>{product?.nombre}</b>-</p><h3>{'$'+ product?.precio * product?.quantity}.00 </h3></div>
          <div>
            <button onClick={handleRemoveProductCart}>-</button><button onClick={handleAddProductCart}>+</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam atque dicta adipisci dolor suscipit aliquam voluptas, esse pariatur eaque sunt beatae id, quam quibusdam, ut consequuntur laborum minus repellat!
          </p>
        </div>
        </>
      }
      </article>
    </aside>
  )
}

export default Detail
