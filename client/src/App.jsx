import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import StudentDashboard from './components/StudentDashboard'

function App() {
  

  return (
    <div className="App">
      
      
      <BrowserRouter>
          <Routes>
      <Route path='/' element={<Header/>}/>
          <Route path="/studentDash" element={<StudentDashboard/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
