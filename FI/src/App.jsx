import { lazy, Suspense, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
const Services = lazy(() => import('./components/Services'))
const Skills = lazy(() => import('./components/Skills'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))
const Stats = lazy(() => import('./components/Stats'))
const Timeline = lazy(() => import('./components/Timeline'))
// import Testimonials from './components/Testimonials'
const TechOrbit = lazy(() => import('./components/TechOrbit'))
const ParticleConstellation = lazy(() => import('./components/ParticleConstellation'))
import './components/Stats.css'
import './components/Timeline.css'
// import './components/Testimonials.css'
import './components/TechOrbit.css'
const Snow = lazy(() => import('./components/Snow'))
import './components/Snow.css'

function Stars() {
  useEffect(() => {
    const canvas = document.getElementById('stars-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h
    let stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.3,
      d: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.7 + 0.2
    }))
    function draw() {
      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.shadowColor = '#b3e0ff'
      ctx.shadowBlur = 8
      for (let s of stars) {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI)
        ctx.fillStyle = '#fffbe7'
        ctx.fill()
      }
      ctx.restore()
    }
    function animate() {
      for (let s of stars) {
        s.y += s.speed
        if (s.y > h) {
          s.x = Math.random() * w
          s.y = -2
        }
      }
      draw()
      requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener('resize', () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])
  return <canvas id="stars-canvas" className="stars"></canvas>
}

function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className={`app-container ${theme}`}> 
      {theme === 'dark' && <Stars />}
      {theme === 'light' && <Snow />}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div>Loading...</div>}>
          <Stats />
          <Timeline />
          <Services />
          <Skills />
          <TechOrbit />
          <Portfolio />
          
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}

export default App
