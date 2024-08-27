import React, { useState } from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { PiFootballFill } from "react-icons/pi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import {BsPersonCircle } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';

const MaxWidthScreen = ({ children }) => {

  return (
    <div className='mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden'>
    <div className=' mx-auto max-w-3xl bg-[#213045]'>
        {children}
    </div>
    </div>
  )
}

export default MaxWidthScreen