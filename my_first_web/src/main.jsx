import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { HashRouter } from 'react-router-dom'
// React-router-dom in 4 steps
//1. install i react-router-dom
//2. modify package.json ( "homepage": "./",)
//3. modify main.jsx 
//   3.1 import { HashRouter } from 'react-router-dom'
//   3.2 put <App /> between  <HashRouter></HashRouter>
////////////////////////////////////////////////////////
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
