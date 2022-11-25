import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ContactPage from './components/Pages/ContactPage';
import HomePage from './components/Pages/HomePage';
import DiscountPage from './components/Pages/DiscountPage';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>  
      <Route path='/discount' element={<DiscountPage/>}/>   
      </Routes>
    </Router>
    </>
  )
}

export default App