import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { JournalApp } from './JournalApp.jsx'
import { store } from './store'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
