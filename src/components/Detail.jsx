import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import './detail.scss'
import { useSelector } from 'react-redux'
const Detail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { cart } = useSelector(state => state.products)

  useEffect(() => {
    // const productDetail = cart.find(ele => ele.id === id)
    // setProduct(productDetail)
  }, [id, cart])
  console.log(product, 'detail')
  return (
    <aside>
      <h2>Product <Link to='/'><i className="fas fa-chevron-left"></i></Link></h2>
      <hr />
      <article>
        <div className='product-hero'>
          <div>##</div>
          <img src="https://cdn-icons-png.flaticon.com/512/609/609752.png" alt="" />
        </div>
        <div className='product-info'>
          <div><p><b>Guajolota</b>-</p><h3>$##</h3></div>
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
