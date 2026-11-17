import React from 'react'
import ReactDOM from 'react-dom/client'
// Bootstrap dipasang lokal lewat npm (tanpa CDN)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/main.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
