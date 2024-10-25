import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// redux
import { Provider } from 'react-redux'
import { store } from '@/store/store'

// toast
import { Toaster } from './components/ui/toaster.tsx'

// react helmet
import { HelmetProvider } from 'react-helmet-async'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Toaster />
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
)
