import React, { useState, useRef } from 'react'

import Button from '../../UI/Button'
import classes from './CheckoutForm.module.css'

const isEmpty = (value) => value.trim().length === 0
const isPhoneNumber = (value) => /^09\d{8}$/.test(value)

const errorMessages = {
  name: 'Please enter your name.',
  phone: 'Please enter a valid phone.',
  street: 'Please enter your street.',
  city: 'Please enter your city.',
}

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    phone: true,
    street: true,
    city: true,
  })

  const nameInputRef = useRef()
  const phoneInputRef = useRef()
  const streetInputRef = useRef()
  const cityInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredPhone = phoneInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPhoneIsValid = isPhoneNumber(enteredPhone)

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      phone: enteredPhoneIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPhoneIsValid

    if (!formIsValid) return

    props.onSubmit({
      name: enteredName,
      phone: enteredPhone,
      street: enteredStreet,
      city: enteredCity,
    })
  }

  const controlClasses = {}
  for (const key in formInputValidity) {
    controlClasses[key] = `${classes.control} ${
      formInputValidity[key] ? '' : classes.invalid
    }`
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['control-group']}>
        <div className={controlClasses.name}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputValidity.name && <p>{errorMessages.name}</p>}
        </div>
        <div className={controlClasses.phone}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="e.g., 0933123123"
            ref={phoneInputRef}
          />
          {!formInputValidity.phone && <p>{errorMessages.phone}</p>}
        </div>
      </div>

      <div className={classes['control-group']}>
        <div className={controlClasses.street}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formInputValidity.street && <p>{errorMessages.street}</p>}
        </div>
        <div className={controlClasses.city}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formInputValidity.city && <p>{errorMessages.city}</p>}
        </div>
      </div>

      <div className={classes.actions}>
        <Button className={classes['button--alt']} onClick={props.onClose}>
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default Checkout
