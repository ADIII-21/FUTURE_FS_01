import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

// Official SVG icons for a modern look
const CONTACTS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aditya-gupta-2725b5329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#0A66C2" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/a_.adityaa?igsh=dW51ZzFlYXI2Ym9p',
    icon: (
      <span style={{display:'inline-block',background:'#fff',borderRadius:'50%',padding:'2px'}}>
        <svg width="28" height="28" viewBox="0 0 448 448"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%" fx="10%" fy="100%"><stop offset="0%" stopColor="#fdf497"/><stop offset="5%" stopColor="#fdf497"/><stop offset="45%" stopColor="#fd5949"/><stop offset="60%" stopColor="#d6249f"/><stop offset="90%" stopColor="#285AEB"/></radialGradient></defs><rect width="448" height="448" rx="110" fill="url(#ig)"/><path d="M224 144a80 80 0 1 0 0 160 80 80 0 0 0 0-160zm0 132a52 52 0 1 1 0-104 52 52 0 0 1 0 104zm85-136a19 19 0 1 1-38 0 19 19 0 0 1 38 0zm53 19c-1-27-7-51-26-70s-43-25-70-26c-28-2-112-2-140 0-27 1-51 7-70 26s-25 43-26 70c-2 28-2 112 0 140 1 27 7 51 26 70s43 25 70 26c28 2 112 2 140 0 27-1 51-7 70-26s25-43 26-70c2-28 2-112 0-140zm-48 170a48 48 0 0 1-48 48H159a48 48 0 0 1-48-48V159a48 48 0 0 1 48-48h112a48 48 0 0 1 48 48v112z" fill="#fff"/></svg>
      </span>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ADIII-21',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#181824" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.18 9.18 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
    )
  },
]

export default function Contact() {
  const [state, handleSubmit] = useForm("manjgwnj")

  return (
    <footer id="contact" className="footer">
      <div className="contact-wave-bg">
        <svg viewBox="0 0 1440 320" width="100%" height="100" preserveAspectRatio="none"><path fill="#7c3aed" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
      <h2 className="sub-title">Contact <span>Me</span></h2>
      <p className="footer-note">Let's work together! If you're looking to collaborate or just want to say hi, feel free to reach out.</p>
      <div className="contact-links">
        {CONTACTS.map(link => (
          <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label={link.name}>
            {link.icon}
          </a>
        ))}
      </div>
      <div className="contact-form">
        {state.succeeded ? (
          <p className="form-status">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} autoComplete="off">
            <input id="email" type="email" name="email" placeholder="Enter Your Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <input type="text" name="subject" placeholder="Enter Your Subject" />
            <textarea id="message" name="message" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" className="send" disabled={state.submitting}>Send Message</button>
          </form>
        )}
      </div>
      <div className="contact-details">
        <div className="contact-list">
          <div><strong>Email:</strong> <a href="mailto:adigupta2121@gmail.com">adigupta2121@gmail.com</a></div>
        </div>
      </div>
      <p className="footer-note">&copy; 2025 Developed by Aditya Gupta. All rights reserved.</p>
    </footer>
  )
}
