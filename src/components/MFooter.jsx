import React, { useEffect } from 'react'
import { PiSoccerBall } from "react-icons/pi";

const  MFooter = (props) => {
    const {selections,selectionCount,totalPicks} = props
    // console.log('selection', selections)
    //  console.log('selectionCount', selectionCount)
    //   console.log('totalPicks', totalPicks)
  return (
    <form action="">
    <div
        className=" bg-yellow-300 w-20 aspect-auto  fixed bottom-7 -right-4 py-2 px-2 rounded-md font-mono">
        <div
            className="relative"> 
            <div
             className="absolute -top-6  -left-6 bg-red-700 h-10 text-center px-4 py-2 text-white  rounded-full text-base font-bold"
             >
                 {selectionCount}
            </div>
            <PiSoccerBall  fontSize={'3rem'}/>
        </div>
    </div>
    </form>
  )
}
export default MFooter