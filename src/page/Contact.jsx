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
    <div className='grid grid-cols-2'>
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
     <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1585252285126!2d85.34202727616805!3d27.712391325267614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970a9ff7041%3A0xfcaa45db29104458!2sTexas%20International%20College!5e0!3m2!1sen!2snp!4v1769918684296!5m2!1sen!2snp" width="600" height="450"  loading="lazy"></iframe>
      </div>

     
      </div>
  )
}
export default Contact;
