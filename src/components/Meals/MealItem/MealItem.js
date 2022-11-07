import React from 'react'
import { useDispatch } from 'react-redux'

import { cartActions } from '../../../store/cart'
import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  const dispatch = useDispatch()

  const addItemHandler = (amount) => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount,
      })
    )
  }

  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onSubmit={addItemHandler} />
      </div>
    </li>
  )
}

export default MealItem
