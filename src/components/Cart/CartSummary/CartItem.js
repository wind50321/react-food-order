import React from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from '../../../store/cart'
import classes from './CartItem.module.css'

const CartItem = (props) => {
  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: 1,
      })
    )
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(props.id))
  }

  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.item}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  )
}

export default React.memo(CartItem)
