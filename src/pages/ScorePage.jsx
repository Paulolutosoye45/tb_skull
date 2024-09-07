import React from 'react'
import Flexwrapper from '../components/Flexwrapper'
import { BiSolidChevronLeft } from 'react-icons/bi'
import MaxWidthScreen from '../components/MaxWidthScreen'
import { useNavigate } from 'react-router'

function ScorePage() {
    const navigate = useNavigate()
    const handleNav = () => {
      navigate(-1)
    }
  return (
    <div>
        <MaxWidthScreen>
            <Flexwrapper className="p-2">
                <BiSolidChevronLeft className=" text-4xl cursor-pointer text-white" onClick={() => handleNav()}/>
            </Flexwrapper>
            <h1 className='text-3xl text-white'>question and answer</h1>
        </MaxWidthScreen>
    </div>
  )
}

export default ScorePage
