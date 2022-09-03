import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { darkTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
)
