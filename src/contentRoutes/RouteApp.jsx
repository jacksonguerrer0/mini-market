import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from '../container/NoMatch'
import App from '../container/App'
import Detail from '../components/Detail'
import ShopingCart from '../components/ShopingCart'
import { getDataApi } from '../helpers/functions'

const RouteApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index path='' element={<span>Elige un producto</span>} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='cart' element={<ShopingCart />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteApp
