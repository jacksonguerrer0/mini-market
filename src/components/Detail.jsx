import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import './detail.scss'
import { useSelector } from 'react-redux'
const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { cart } = useSelector(state => state.products)
  const navigate = useNavigate()
  useEffect(() => {
    const productDetail = cart.find(ele => ele.id === parseInt(id))
    setProduct(productDetail)
  }, [id, cart])
  console.log(product, 'detail')
  console.log(parseInt(id))
  if(!product){
    navigate(-1)
  }
  return (
    <aside>
      <h2>Product <Link to='/'><i className="fas fa-chevron-left"></i></Link></h2>
      <hr />
      <article>
        <div className='product-hero'>
          <div>{product?.quantity}</div>
          <img src={product?.imagen} alt={product?.nombre} />
        </div>
        <div className='product-info'>
          <div><p><b>{product?.nombre}</b>-</p><h3>{'$'+ product?.precio * product?.quantity} </h3></div>
          <div>
            <button>-</button><button>+</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam atque dicta adipisci dolor suscipit aliquam voluptas, esse pariatur eaque sunt beatae id, quam quibusdam, ut consequuntur laborum minus repellat!
          </p>
        </div>
      </article>
    </aside>
  )
}

export default Detail
