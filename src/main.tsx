import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary:{
      main: '#2F7ECB',
      light: '#3999f7',
      dark: '#1b4670',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff0000',
      light: '#da0000',
      dark: '#ff5436',
      contrastText: '#000'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
