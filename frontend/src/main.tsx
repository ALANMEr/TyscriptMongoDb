import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route } from "react-router-dom";
import App from './App';
import "bootswatch/dist/darkly/bootstrap.min.css"
import { Navbar } from './components/NavBar/Navbar';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
