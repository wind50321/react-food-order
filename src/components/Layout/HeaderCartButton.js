import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { uiActions } from '../../store/ui'
import classes from './HeaderCartButton.module.css'

let isInitial = true

const HeaderCartButton = () => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    setButtonIsHighlighted(true)

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [cartItems])

  const clickHandler = () => dispatch(uiActions.showCart())

  const cartTotalAmount = cartItems.reduce(
    (prevValue, item) => prevValue + item.amount,
    0
  )

  const badgeClasses = `${classes.badge} ${
    buttonIsHighlighted ? classes.bump : ''
  }`

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>Cart</span>
      <span className={badgeClasses}>{cartTotalAmount}</span>
    </button>
  )
}

export default HeaderCartButton
