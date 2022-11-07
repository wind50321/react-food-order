import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { uiActions } from '../../../store/ui'
import { cartActions } from '../../../store/cart'
import CheckoutForm from './CheckoutForm'
import Button from '../../UI/Button'
import classes from './Checkout.module.css'

const Checkout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDisSubmit] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const hideCartHandler = () => dispatch(uiActions.hideCart())

  const submitHandler = (userData) => {
    setIsSubmitting(true)

    fetch(`${process.env.REACT_APP_DATABASE}/orders.json`, {
      method: 'POST',
      body: JSON.stringify({ items: cartItems, user: userData }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Sending order to server failed!')
        }
        setIsSubmitting(false)
        setDisSubmit(true)
        dispatch(cartActions.clearCart())
      })
      .catch((error) => {
        setIsSubmitting(false)
        setError(error.message)
      })
  }

  if (isSubmitting)
    return (
      <div className={classes.message}>
        <p>Sending order data...</p>
      </div>
    )

  if (didSubmit) {
    return (
      <div>
        <div className={classes.message}>
          <p>Successfully sent the order!</p>
        </div>
        <div className={classes.actions}>
          <Button className={classes.button} onClick={hideCartHandler}>
            Close
          </Button>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <div className={`${classes.message} ${classes.error}`}>
          <p>{error}</p>
        </div>
        <div className={classes.actions}>
          <Button className={classes.button} onClick={hideCartHandler}>
            Close
          </Button>
        </div>
      </div>
    )
  }

  return <CheckoutForm onSubmit={submitHandler} onClose={hideCartHandler} />
}

export default Checkout
