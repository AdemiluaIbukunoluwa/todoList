import { useContext, useEffect, useState } from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import PageContainer from './Pages/PageContainer/pagecontainer';
import Signup from './Pages/SignIn/Signup';
import SignIn from './Pages/SignIn/SignIn';
import Banner from './Pages/Banner/Banner'; 
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import CategoryTasks from './Components/CategoryTasks/categoryTasks';
import { UserDataContext } from './Context/usercontext';

function App() {
  const id = localStorage.getItem("id")
  const username = useContext(UserDataContext).user.name
  return (
    <>
      <Routes>
        <Route path='/' element={id? <Home/> : <Banner/>}/>
        <Route path='/welcome' element={ <Banner/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/category/:catName/:id' element={<CategoryTasks/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
