import React, { useState } from 'react'
import Flexwrapper from '../components/Flexwrapper'

const TeamSelect = () => {


  return (
    <div className=' bg-[#213045]'>
       {/* //Match Name */}
        
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden min-h-screen bg-[#213045] relative">
        <div className="mx-auto max-w-3xl">
          <p className='text-white text-sm m-3 font-Roboto'>5 september 18:05</p>
          <div className='border-b-2 my-3'>
          <Flexwrapper className="text-white text-sm font-Roboto text-center px-4 py-1" >
          <p className='truncate'>Manchester United </p>
          <p className='truncate text-yellow-600 text-lg'>Vs</p>
          <p  className='truncate'>F.c Baracelona</p>
        </Flexwrapper>
          <div className="flex items-center justify-between px-4 py-2 mb-5 gap-6">
    
          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out'
          >
           WIN
          </button>
          
          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out'
          >
            DRW
          </button>

          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out capitalize'
          >
            WIN
          </button>
        </div>
        </div>
          <div className='border-b-2 my-3'>
          <Flexwrapper className="text-white text-sm font-Roboto text-center px-4 py-1" >
          <p className='truncate'>Manchester United </p>
          <p className='truncate text-yellow-600 text-lg'>Vs</p>
          <p  className='truncate'>F.c Baracelona</p>
        </Flexwrapper>
          <div className="flex items-center justify-between px-4 py-2 mb-5 gap-6">
    
          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out'
          >
           WIN
          </button>
          
          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out'
          >
            DRW
          </button>

          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out capitalize'
          >
            WIN
          </button>
        </div>
        </div>
          <div className='border-b-2 my-3'>
          <Flexwrapper className="text-white text-sm font-Roboto text-center px-4 py-1" >
          <p className='truncate'>Manchester United </p>
          <p className='truncate text-yellow-600 text-lg'>Vs</p>
          <p  className='truncate'>F.c Baracelona</p>
        </Flexwrapper>
          <div className="flex items-center justify-between px-4 py-2 mb-5 gap-6">
    
          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out'
          >
           WIN
          </button>
          
          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out'
          >
            DRW
          </button>

          <button
            className='flex-grow text-white py-1 px-2 rounded-lg border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out capitalize'
          >
            WIN
          </button>
        </div>
        </div>


        <div className='absolute md:w-auto md:left-0 md:right-0 md:mx-72 bottom-0 w-full my-4 px-4'>
        <button className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2"> submit</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TeamSelect