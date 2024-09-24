import { useEffect, useState } from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import PageContainer from './Pages/PageContainer/pagecontainer';
import Signup from './Pages/SignIn/Signup';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';

function App() {
  const [signedIn, setSignedin] = useState(false)
  useEffect(() => {
    const st = localStorage.getItem('signedin')
    if(st === 'true') {
      setSignedin(true)
    }
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<PageContainer signedin={signedIn} />}>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<SignIn/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
