import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

const App = () => {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible)

  return (
    <Fragment>
      {cartIsVisible && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
