import React from 'react'
import { Button } from '../../Components/Button/button'
import { Link } from 'react-router-dom'

const Signup = () => {
    const signup = (e) => {
        e.preventDefault()
        console.log('signedup')
    }
  return (
    <div className='md:w-1/3 h-3/4 sm:w-1/4 bg-white text-center justify-center m-auto mt-10 rounded-lg p-7'>
      <h2 className='text-3xl font-semibold'>Sign up</h2>
      <form className='mt-3'>
        <input type="text" placeholder='Username' className='w-full h-10 rounded-lg p-2 mt-5 border-2'/>
        <input type="text" placeholder='Email' className='w-full h-10 rounded-lg p-2 mt-5 border-2'/>
        <input type="password" placeholder='Password' className='w-full h-10 rounded-lg p-2 mt-5 border-2'/>
        <input type="password" placeholder='Confirm Password' className='w-full h-10 rounded-lg p-2 mt-5 mb-7 border-2'/>
        <Button onClick={signup} content='Sign up' rounded={true} transition={false} className='mt-5 border border-blue-500'/>
        <span className='text-sm mt-2'>Already have an account? <Link className='text-blue-500 font-bold hover:underline' to={'/signin'}>Log in</Link></span>
      </form>
    </div>
  )
}

export default Signup
