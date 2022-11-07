import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { uiActions } from '../../../store/ui'
import CartItem from './CartItem'
import Button from '../../UI/Button'
import classes from './CartSummary.module.css'

const CartSummary = (props) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)

  const hideCartHandler = () => dispatch(uiActions.hideCart())

  const cartItems = items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
    />
  ))

  const totalPriceText = `$${totalPrice.toFixed(2)}`
  const hasItems = items.length > 0

  return (
    <div>
      <ul className={classes.items}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPriceText}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes['button--alt']} onClick={hideCartHandler}>
          Close
        </Button>
        {hasItems && <Button onClick={props.onOrder}>Order</Button>}
      </div>
    </div>
  )
}

export default CartSummary
