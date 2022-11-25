import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ContactPage from './components/Pages/ContactPage'
import HomePage from './components/Pages/HomePage'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>     
      </Routes>
    </Router>
    </>
  )
}

export default App