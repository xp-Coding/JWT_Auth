import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import PrivateRoute from './PrivateRoute'

function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App