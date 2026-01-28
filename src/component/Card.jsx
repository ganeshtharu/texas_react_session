import React from 'react'
import { IoMdCall } from "react-icons/io";

//making id card
export default function Card({name,age}) {
  return (
    <div className='flex flex-col border-2 items-center  '>
        <div className='bg-'>
            <img src="./rank.png" alt=""  className="h-20 w-20 rounded-full"/>
            </div>
      <div>
        <p className='text-blue-200'>Name:{name}</p>
      </div>
      <div className='flex gap-4'>
        <p className='text-blue-200'>Age:{age}</p>
      
      </div>
      <div>
          <button className='bg-amber-400 border-2 border-amber-400 rounded-2xl mx-auto text-sm' ><IoMdCall />Edit</button>
      </div>
    </div>
  )
}
