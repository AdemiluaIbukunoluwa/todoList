import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button/button'

const SignIn = () => {
    const signin = (e) => {
        e.preventDefault()
        console.log('signedin')
    }
  return (
    <div className='md:w-1/3 h-3/4 sm:w-1/4 bg-white text-center justify-center m-auto mt-10 rounded-lg p-7'>
    <h2 className='text-3xl font-semibold'>Sign In</h2>
    <form className='mt-16'>
      <input type="text" placeholder='Email' className='w-full h-10 rounded-lg p-2 mt-5 border-2'/>
      <input type="password" placeholder='Password' className='w-full h-10 rounded-lg p-2 mt-5 border-2'/>
      <div className='mt-24'>
      <Button onClick={signin} content='Sign in' rounded={true} transition={false} className='border border-blue-500'/>
      <span className='text-sm'>new user? <Link className='text-blue-500 font-bold hover:underline' to={'/signup'}>Sign up</Link></span>
      </div>
    </form>
  </div>
  )
}

export default SignIn
