import React from 'react'
import { useState } from 'react'
export default function Hooks() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <p>count:{count}</p>
        <button className='h-8 w-20 border-2' onClick={()=>setCount(count+1)}>increase</button>
      
    </div>
  )
}
