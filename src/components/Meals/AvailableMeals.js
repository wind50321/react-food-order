import React, { useState, useEffect } from 'react'

import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATABASE}/meals.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Loading meal data from server failed!')
        }
        return response.json()
      })
      .then((data) => {
        const loadedMeals = []
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          })
        }
        setMeals(loadedMeals)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <p className={classes.loading}>Loading meal data from server...</p>
  }

  if (error) {
    return <p className={classes.error}>{error}</p>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  )
}

export default AvailableMeals
