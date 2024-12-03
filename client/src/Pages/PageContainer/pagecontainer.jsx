import React, {useState, useEffect, useContext} from 'react';
import SignedOutHeader from '../../Components/Header/SignedOutHeader';
import SignedInHeader from '../../Components/Header/SignedInHeader';
import { Outlet } from 'react-router-dom';
import '../../styles/general.styles.css'
import { UserDataContext } from '../../Context/usercontext';

const PageContainer = ({children, signedIn}) => {
  const username = useContext(UserDataContext).user.name

  return (
    <div className='page-container background min-h-screen' >
      <div className='header'>
        {signedIn ? <SignedInHeader username={username}/> : <SignedOutHeader />}
      </div>
     {
      children
     }
    </div>
  )
}

export default PageContainer
