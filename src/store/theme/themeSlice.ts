import { applyTheme } from '@/utils'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'dark' | 'light' | 'system'

type ThemeState = {
  theme: Theme
}

const initializeTheme = (): Theme => {
  const theme = JSON.parse(localStorage.getItem('theme') as Theme) || 'system'

  // apply theme
  applyTheme(theme)

  return theme
}

const initialState: ThemeState = {
  theme: initializeTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
      applyTheme(action.payload)

      localStorage.setItem('theme', JSON.stringify(action.payload))
    },
  },
})

export default themeSlice.reducer
