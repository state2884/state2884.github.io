import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="site-header">
      <div className="brand">State 2884</div>
      <nav>
        <NavLink to="/" end className={({isActive})=> isActive? 'active' : ''}>Home</NavLink>
        <NavLink to="/alliances" className={({isActive})=> isActive? 'active' : ''}>Alliances</NavLink>
        <NavLink to="/calendar" className={({isActive})=> isActive? 'active' : ''}>Event Calendar</NavLink>
      </nav>
    </header>
  )
}
