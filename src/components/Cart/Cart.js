import React, { useState } from 'react'

import Modal from '../UI/Modal'
import CartSummary from './CartSummary/CartSummary'
import Checkout from './Checkout/Checkout'

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false)

  const orderHandler = () => setIsCheckout(true)

  return (
    <Modal>
      {!isCheckout && <CartSummary onOrder={orderHandler} />}
      {isCheckout && <Checkout />}
    </Modal>
  )
}

export default Cart
