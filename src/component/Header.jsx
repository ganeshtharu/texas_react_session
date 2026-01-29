import React from 'react'

const NavLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
  { title: 'Services', url: '/services' },
]

export default function Header() {
  return (
    <div className="flex justify-center gap-6 items-center bg-amber-400 p-4">
      {NavLinks.map((el, idx) => (
        <a
          href={el.url}
          key={idx}
          className="font-medium hover:text-white transition"
        >
          {el.title}
        </a>
      ))}
    </div>
  )
}
