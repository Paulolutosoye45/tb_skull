import React, { useState } from 'react'
import NavFooter from './NavFooter'

const MaxWidthScreen = ({ children }) => {

  return (
    <div className='mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen relative'>
    <div className=' mx-auto max-w-3xl'>
        {children}
        <NavFooter />
    </div>
    </div>
  )
}

export default MaxWidthScreen