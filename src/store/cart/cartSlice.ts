import { toast } from '@/hooks/use-toast'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CartItem, type CartState } from '@/utils'

const defaultState: CartState = {
  cartItems: [],
  cartTotal: 0,
  numItemsInCart: 0,
  orderTotal: 0,
  shipping: 1500,
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

      const item = state.cartItems.find((i) => i.cartID === cartItem.cartID)

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

    removeItem: (state, action: PayloadAction<string>) => {
      const cartID = action.payload

      const item = state.cartItems.find((i) => i.cartID === cartID)

      if (!item) return

      // update cart items
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)

      // update number of items in cart
      state.numItemsInCart -= item.amount

      // update cart total
      state.cartTotal -= Number(item.price) * item.amount

      // update order total
      cartSlice.caseReducers.calculateTotal(state)

      toast({ description: 'Item removed from the cart' })
    },

    editItem: (
      state,
      action: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const cartItem = action.payload

      state.cartItems = state.cartItems.map((item) => {
        if (item.cartID === cartItem.cartID)
          return { ...item, amount: cartItem.amount }

        return item
      })

      // update number of items in cart
      state.numItemsInCart = state.cartItems.reduce(
        (acc, curr) => acc + curr.amount,
        0
      )

      // update cart total
      state.cartTotal = state.cartItems.reduce(
        (acc, curr) => acc + curr.amount * Number(curr.price),
        0
      )

      // update order total
      cartSlice.caseReducers.calculateTotal(state)

      toast({ description: 'Item quantity has been updated' })
    },

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
