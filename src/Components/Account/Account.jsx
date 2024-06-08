import React from 'react'
import './Account.css'
import {z} from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function Account() {

    const userSchemen = z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(7,'Password should be of at least 7 words')
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(userSchemen),
    })


    const handleSubmission = (formData,event)=>{
        event.preventDefault();

        const url = 'http://localhost:3000/users';
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        }).then((response)=> response.json()).then((data)=> console.log(data)).catch((error)=> console.log("AN error has occured",error))
    }



  return (
    <>
        <section className="account-container">
            <h1>Account</h1>
            <div className="login-container">
                <form onSubmit={handleSubmit(handleSubmission)} >
                    <label htmlFor="Email">Email</label>
                    <input type="email" {...register('email')} />
                    {errors.email && <span className='error' >{errors.email.message}</span>}
                    <label htmlFor="password">Password</label>
                    <input type="password"  {...register('password')} />
                    {errors.password && <span className='error' >{errors.password.message}</span>}

                    <button type='submit' >Log in</button>
                    <a href="#">Lost you password?</a>
                </form>
            </div>
        </section>
    </>
)
}

export default Account