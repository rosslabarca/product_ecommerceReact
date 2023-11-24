import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './components/Header/Header.jsx'
import { Banner } from './components/Banner/Banner.jsx'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
   <Banner/>
    <App />
  </React.StrictMode>,
)
