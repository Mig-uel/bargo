import { toast } from '@/hooks/use-toast'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CartItem, type CartState } from '@/utils'

const defaultState: CartState = {
  cartItems: [],
  cartTotal: 0,
  numItemsInCart: 0,
  orderTotal: 0,
  shipping: 15,
  tax: 0,
}

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem('cart')

  return cart ? JSON.parse(cart) : defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),

  reducers: {
    addItem: () => {},
    removeItem: () => {},
    editItem: () => {},
    clearCart: () => {},
    calculateTotal: () => {},
  },
})

export const { addItem, calculateTotal, clearCart, editItem, removeItem } =
  cartSlice.actions
export default cartSlice.reducer
