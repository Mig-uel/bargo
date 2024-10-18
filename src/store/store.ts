import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/store/cart/cartSlice'
import themeReducer from '@/store/theme/themeSlice'
import userReducer from '@/store/user/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ReduxStore = {
  getState: () => RootState
  dispatch: AppDispatch
}
