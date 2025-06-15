import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppColorOnChange from './AppColorOnChange'
import AppColorOnClick from './AppColorOnClick'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppColorOnChange />
    <AppColorOnClick />
  </StrictMode>,
)
