
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/login/LoginView'

function HelpLineRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />}/>
          <Route path='/forum' element={<LoginView />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default HelpLineRoutes