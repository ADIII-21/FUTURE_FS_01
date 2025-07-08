import React from 'react'

export default function AnimatedButton({ children, href, ...props }) {
  if (href) {
    return (
      <a href={href} className="animated-btn" {...props}>{children}</a>
    )
  }
  return (
    <button className="animated-btn" {...props}>{children}</button>
  )
}
