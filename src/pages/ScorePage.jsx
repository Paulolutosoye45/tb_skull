import React from 'react'
import Flexwrapper from '../components/Flexwrapper'
import MaxWidthScreen from '../components/MaxWidthScreen'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

function ScorePage() {
    const navigate = useNavigate()
    const handleNav = () => {
      navigate(-1)
    }
  return (
    <div>
        <MaxWidthScreen>
        <div className="p-4 flex items-center font-josefin font-medium my-3">
        <FaArrowLeft className="text-2xl text-white "  onClick={handleNav}/>
        <p className="uppercase  text-white text-center font-bold flex-grow">
          question and answer
        </p>
      </div>
        </MaxWidthScreen>
    </div>
  )
}

export default ScorePage
