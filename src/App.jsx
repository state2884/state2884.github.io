import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Alliances from './pages/Alliances'
import StateInfo from './pages/StateInfo'

export default function App(){
  return (
    <div className="app min-h-screen flex flex-column">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/alliances" element={<Alliances/>} />
          <Route path="/stateinfo" element={<StateInfo/>} />
        </Routes>
      </main>
      <footer className="site-footer">© 2025. All rights reserved.</footer>
    </div>
  )
}
