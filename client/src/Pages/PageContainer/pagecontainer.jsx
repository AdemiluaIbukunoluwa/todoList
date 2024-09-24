import React from 'react';
import SignedOutHeader from '../../Components/Header/SignedOutHeader';
import SignedInHeader from '../../Components/Header/SignedInHeader';
import { Outlet } from 'react-router-dom';
import '../../styles/general.styles.css'

const PageContainer = ({signedin = false}) => {
  return (
    <div className='page-container background h-screen'>
      <div className='header'>
        {signedin ? <SignedInHeader /> : <SignedOutHeader />}
      </div>
      <Outlet/>
    </div>
  )
}

export default PageContainer
