import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>imagen y carrito</nav>
      <section>
        Productos
        <Link  to='/detail/1'>detalle del producto</Link>
        <Link  to='/cart'>Carrito de compra</Link>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default App
