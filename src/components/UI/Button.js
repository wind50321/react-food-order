import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
  const className = `${classes.button} ${
    props.className ? props.className : ''
  }`

  return (
    <button
      className={className}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
