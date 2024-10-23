import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from '@/hooks/use-toast'

export type User = {
  username: string
  jwt: string
}

export type UserState = {
  user: User | null
}

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user')

  if (!user) return null

  return JSON.parse(user)
}

const initialState: UserState = {
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const user = action.payload

      state.user = user

      localStorage.setItem('user', JSON.stringify(user))

      if (user.username === 'demo user') {
        toast({ description: 'Welcome, Demo User!' })
        return
      }

      toast({ description: `Welcome back, ${user.username}!` })
    },

    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer