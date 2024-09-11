import React from 'react'
import { Outlet } from 'react-router'

function Admindashboard() {
  return (
    <div className='bg-[#213045]'>
        <Outlet/>
    </div>
  )
}

export default Admindashboard