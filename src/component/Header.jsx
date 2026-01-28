import React from 'react'
const NavLinks=[
    {
        title:'Home',
        url:'/'
    },
    {
        title:'About',
        url:'/about'
    },
    {
        title:'Contact',
        url:'/contact'
    },
    {
        title:'Services',
        url:'/services'
    }]
export default function Header() {
  return (
    <div className='flex justify-center gap-4 items-center bg-amber-400'>
      {/* <ul className='list-none flex items-center justify-center gap-4 hover:cursor-pointer hover:border-b'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul> */}
      {
        NavLinks.map((link,idx)=><a href={link.url} key={idx}><p className=' hover:cursor-pointer hover:border-b'>{link.title}</p></a>)
      }
    </div>
  )
}
