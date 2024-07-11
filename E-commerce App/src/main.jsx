import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, createRoutesFromElements, RouterProvider , Route} from "react-router-dom";
import {Home , Cart , Layout} from '../index.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
