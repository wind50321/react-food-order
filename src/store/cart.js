import { createSlice } from '@reduxjs/toolkit'

const MAX_AMOUNT = 5

const initialState = { items: [], totalPrice: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload

      const existingItem = state.items.find((item) => item.id === newItem.id)

      if (existingItem) {
        let addedAmount = newItem.amount
        if (existingItem.amount + addedAmount > MAX_AMOUNT) {
          addedAmount = MAX_AMOUNT - existingItem.amount
        }

        existingItem.amount += addedAmount
        state.totalPrice += newItem.price * addedAmount
      } else {
        state.items.push(newItem)
        state.totalPrice += newItem.price * newItem.amount
      }

      state.totalPrice = +state.totalPrice.toFixed(2)
    },
    removeItem(state, action) {
      const itemId = action.payload

      const existingItem = state.items.find((item) => item.id === itemId)

      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== itemId)
      } else {
        existingItem.amount--
      }

      state.totalPrice -= existingItem.price
      state.totalPrice = +state.totalPrice.toFixed(2)
    },
    clearCart() {
      return initialState
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
