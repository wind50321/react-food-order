import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1>Great Meals</h1>
        <HeaderCartButton />
      </div>
    </header>
  )
}

export default React.memo(Header)
