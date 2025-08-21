import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Alliances from './pages/Alliances'
import Calendar from './pages/Calendar'

export default function App(){
  return (
    <div className="app">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/alliances" element={<Alliances/>} />
          <Route path="/calendar" element={<Calendar/>} />
        </Routes>
      </main>
      <footer className="site-footer">© 2025. All rights reserved.</footer>
    </div>
  )
}
