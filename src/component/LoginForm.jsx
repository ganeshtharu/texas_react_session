import React from 'react'
import { useState } from 'react'
function LoginForm() {
    const [email,setEmail]=useState("");
    const [password, setPassword]= useState("")

    function handleClick(e){
        e.preventDefault()
        console.log("submitted",email,password)
    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor='"password'>Password</label>
            <input type='text' id='password' value={password} placeholder='enter your password' onChange={(e)=>setPassword(e.target.value)}/>

<button type='submit'> submit</button>

        </form>
      
    </div>
  )
}

export default LoginForm
