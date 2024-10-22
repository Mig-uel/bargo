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
    addItem: (state, action: PayloadAction<CartItem>) => {
      const cartItem = action.payload

      const item = state.cartItems.find(
        (i) => i.productID === cartItem.productID
      )

      if (item) item.amount += cartItem.amount
      else state.cartItems.push(cartItem)

      // update cart item amount
      state.numItemsInCart += cartItem.amount

      // update cart total
      state.cartTotal += Number(cartItem.price) * cartItem.amount

      // // calculate tax
      // state.tax = 0.1 * state.cartTotal

      // // calculate order total
      // state.orderTotal = state.cartTotal + state.shipping + state.tax

      // localStorage.setItem('cart', JSON.stringify(state))

      cartSlice.caseReducers.calculateTotal(state)

      toast({ description: 'Item added to cart' })
    },

    removeItem: () => {},

    editItem: () => {},

    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState))

      return defaultState
    },

    calculateTotal: (state) => {
      // calculate tax
      state.tax = 0.1 * state.cartTotal

      // calculate order total
      state.orderTotal = state.cartTotal + state.shipping + state.tax

      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, calculateTotal, clearCart, editItem, removeItem } =
  cartSlice.actions
export default cartSlice.reducer
