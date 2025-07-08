import React from 'react'
import AppLogo from './AppLogo'

const NAVS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle realistic-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="toggle-track">
        <span className={`toggle-thumb ${theme}`}></span>
        <span className="toggle-icon sun">☀️</span>
        <span className="toggle-icon moon">🌙</span>
      </span>
    </button>
  )
}

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className={`navbar technical-theme ${theme}`}> 
      <div className="logo"><AppLogo size={32} /></div>
      <ul className="nav-links">
        {NAVS.map((nav, idx) => (
          <li key={nav.name}>
            <a href={nav.href} tabIndex={idx + 1}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <a href="#" className="scroll-to-top" title="Scroll to Top" style={{position:'fixed',right:'2rem',bottom:'2rem',zIndex:1000,background:'#fff',borderRadius:'50%',boxShadow:'0 2px 8px rgba(0,0,0,0.15)',padding:'0.5rem 0.7rem',fontSize:'1.5rem',textDecoration:'none',color:'#222',display:'flex',alignItems:'center',justifyContent:'center'}} onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>&uarr;</a>
    </nav>
  )
}
