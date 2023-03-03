import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  //React.StrictMode: una funcion de desarollo que ejecuta react
  //en produccion no se ejecuta 2 veces
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
