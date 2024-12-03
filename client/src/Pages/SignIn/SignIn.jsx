import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../../Components/Button/button'
import {toast } from 'react-toastify';
import axiosInstance from '../../Utils/axiosInstance';
import {useNavigate} from 'react-router-dom'
import { encrypt, decrypt } from '../../Utils/encryption';
import { UserDataContext } from '../../Context/usercontext';
import PageContainer from '../PageContainer/pagecontainer';

const SignIn = () => {
  const navigate = useNavigate()
  if(localStorage.getItem("id")){
    navigate('/')
  }
    const [data, setData] = useState({
        email: null,
        password: null
    })
    const {user, setUser} = useContext(UserDataContext)
    const signin = async(e) => {
      e.preventDefault()
      await axiosInstance.post('/login', {
          email: data.email,
          password: encrypt(data.password)
      }).then((res) => {
          toast.success('Login successful')
          localStorage.setItem('signedin', true)
          localStorage.setItem('id', res.data._id)      
          setUser(res.data)
           // Redirect after a short delay
           setTimeout(() => {
            navigate('/');
        }, 1000);
      }).catch((err) => {
        if(err.response.status == 400){
          toast.error('Username exists')
        }
          toast.error('Signup failed')
          console.log(err)
      })
    }
  return (
    <PageContainer signedIn={false}>
    <div className='md:w-1/3 h-3/4 sm:w-1/4 bg-white text-center justify-center m-auto mt-10 rounded-lg p-7'>
    <h2 className='text-3xl font-semibold'>Sign In</h2>
    <form className='mt-16'>
      <input type="email" placeholder='Email' className='w-full h-10 rounded-lg p-2 mt-5 border-2' required onChange={(e) => setData({...data, email: e.target.value.toLocaleLowerCase()})}/>
      <input type="password" placeholder='Password' required className='w-full h-10 rounded-lg p-2 mt-5 border-2' onChange={(e)=> setData({...data, password: e.target.value})}/>
      <div className='mt-24'>
      <Button onClick={signin} content='Sign in' rounded={true} transition={false} className='border border-blue-500'/>
      <span className='text-sm mt-5'>new user? <Link className='text-blue-500 font-bold hover:underline' to={'/signup'}>Sign up</Link></span>
      </div>
    </form>
  </div>
  </PageContainer>
  )
}

export default SignIn
