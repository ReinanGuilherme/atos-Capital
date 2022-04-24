import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//importação das traduções no contexto global
import "./i18n/index"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
