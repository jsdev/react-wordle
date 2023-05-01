import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { AlertProvider } from './context/AlertContext'
import reportWebVitals from './reportWebVitals'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  const config = {
    rules: [
      {
        id: 'skip-link',
        enabled: true,
      },
    ],
    disableDeduplicate: true,
  }
  axe(React, ReactDOM, 1000, config)
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
