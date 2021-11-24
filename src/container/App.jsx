import React, {useEffect} from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import './app.scss'
import { getDataApi } from '../helpers/functions'
import { useDispatch, useSelector } from 'react-redux'
import { saveProducts } from '../redux/productsDucks'

const App = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)
  useEffect(() => {
    getDataApi().then(res => dispatch(saveProducts(res)))
  }, [dispatch])
  return (
    <div className='app-container'>
      <header>
        <img src="https://cdn-icons-png.flaticon.com/512/609/609752.png" alt="logo" />
        <div>
        <i className="fas fa-shopping-cart"></i> $########
        </div>
      </header>
      <aside>
        <Outlet />
      </aside>
      <section>
        <h2>Store</h2>
        <hr />
        <section>
          {
            products.map(ele => (
              <img src={ele.imagen} alt={ele.nombre} key={ele.id} />
            ))
          }
        </section>
      </section>

    </div>
  )
}

export default App
