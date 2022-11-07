import React, { useRef } from 'react'

import Input from '../../UI/Input'
import Button from '../../UI/Button'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return
    }

    props.onSubmit(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button className={classes.button} type="submit">
        + Add
      </Button>
    </form>
  )
}

export default MealItemForm
