
import { useForm } from 'react-hook-form'
export default function Signup() {
    const {register , handleSubmit , formState:{errors}}= useForm();
    const onSubmit =(data)=>

    (console.log("user input data",data))
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='email'>Email</label>
            <input type="email" {...register("email", {required:"Email is required"})} />
            {errors.email && <p className='text-red-800'>{errors.email.message}</p>}
            <label htmlFor='password'>Password</label>

<button type='submit'>Sign up</button>
        </form>
      
    </div>
  )
}
