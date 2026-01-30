import React from 'react'
import { useState } from 'react'
function Contact() {
    const [name,setName]=useState("")
    const [contact,setContact] =useState("")
    const [address,setAddress] = useState("")

    function handleClick(e){
        e.preventDefault();
        console.log("contach have submitted",name,contact,address)
    }
  return (
    <div className=' flex flex-col justify-center items-center container mx-auto'>
      <form onSubmit={handleClick} className='flex flex-col gap-4'>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name'  value={name} onChange={(e)=>setName(e.target.value)}  className='border-amber-500 border-2'/>
        <label htmlFor='contact'> Contact</label>
        <input type='numbe' id="contact"  value={contact} onChange={(e)=> setContact(e.target.value)} className='
       border-amber-500 border-2'></input>
        <label htmlFor="address">Address</label>
        <input type="text" id='address' value={address} onChange={(e)=>setAddress(e.target.value)} className='border-amber-500 border-2' />
        <button type='submit' className='w-full border-2 p-2'>Submit</button>

      </form>
      
    </div>
  )
}
export default Contact;
