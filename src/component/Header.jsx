import React from 'react'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";

const NavLinks = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
  { title: 'Services', url: '/services' },
]

export default function Header() {
  const [isOpen,setIsOpen] = useState(false);
  return (
   <header >
    
     <div className="flex justify-center gap-6 items-center bg-amber-400 p-4">
      {/* desktop navbar */}
     <div className='hidden md:flex '>
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
    </div>
    <button className='md:hidden text-2xl ' onClick={()=>setIsOpen(!isOpen)}>
      <CiMenuBurger />
    </button>
    {/* mobile navbar */}
    {isOpen &&(
      <div className='md:hidden flex flex-col '>
       {NavLinks.map((el, idx) => (
        <a
          href={el.url}
          key={idx}
          className="font-medium hover:text-white transition"
          onClick={()=>setIsOpen(false)}
        >
          {el.title}
        </a>
      ))}
     </div>
    )}
   </header>
  )
}
