import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/routes'
import GlobalStyle from './styles/globalStyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>,
)
