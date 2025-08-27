import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const handleLinkClick = () => {
    // Close menu after navigating on mobile
    if (open) setOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="brand">
          <span className="brand-icon">🏔️</span>
          <span className="brand-text">State 2884</span>
        </div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav className={`nav-menu ${open ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            end 
            onClick={handleLinkClick} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/alliances" 
            onClick={handleLinkClick} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">🤝</span>
            <span>Alliances</span>
          </NavLink>
          
          <NavLink 
            to="/stateinfo" 
            onClick={handleLinkClick} 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon"> 🌐</span>
            <span>State Info</span>
          </NavLink>

          <a 
            href="#" 
            className="nav-link discord-link"
            onClick={handleLinkClick}
          >
            <span className="nav-icon">💬</span>
            <span>Discord</span>
          </a>
        </nav>
      </div>
    </header>
  )
}