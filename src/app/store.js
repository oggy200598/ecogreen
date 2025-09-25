import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import products from '../features/products/productSlice'
import cart from '../features/cart/cartSlice'

// load cart từ localStorage
const saved = (() => {
  try { return JSON.parse(localStorage.getItem('cart_items') || '{}') } catch { return {} }
})()

export const store = configureStore({
  reducer: { counter, products, cart },
  preloadedState: { cart: { items: saved } }
})

// lưu lại mỗi khi state đổi
store.subscribe(() => {
  const items = store.getState().cart.items
  localStorage.setItem('cart_items', JSON.stringify(items))
})
