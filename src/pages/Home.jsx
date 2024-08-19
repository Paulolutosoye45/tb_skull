import MaxWidthScreen from "../components/MaxWidthScreen"
import { BiDollarCircle } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Flexwrapper from "../components/Flexwrapper";
import { Link } from "react-router-dom";
// import Big_Match_Man_City_vs_Man_United from '../../public/Big_Match_Man_City_vs_Man_United.jgp'
 import arsenal from '../../public/arsenal.png'
 import man_u from '../../public/man_u.png'
import ColFlex from "../components/ColFlex";
import { PiFootballFill } from "react-icons/pi";
import { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Home = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [marked, setMarked] = useState(false);

  // Handle button click
  const handleClick = (buttonId) => {
    setMarked(!marked)
    setSelectedButton(buttonId);
  };
  console.log(marked)
  return (
        <MaxWidthScreen>
           <Flexwrapper className="bg-green-800 py-3 px-2">
            <p className="capitalize font-bold text-xl text-yellow-300 truncate">placeit</p>
            <Flexwrapper className="gap-2">
              <button className="flex justify-center items-center bg-red-900 rounded-3xl text-white pr-3 "><BiDollarCircle  fontSize={'1.7rem'}  color='green' className="mr-2"/> <p className="text-sm">30.23</p></button>
              <button className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</button>
              <div><BsPersonCircle  fontSize={'1.8rem'} color="yellow"/></div>
            </Flexwrapper>
           </Flexwrapper>
           <div>
             {/* <img src={Big_Match_Man_City_vs_Man_United} alt="" /> */}
           </div>
           <Flexwrapper className="px-2 py-2 font-medium text-xl text-white border-y border-b-black">
            <p>TopEvent</p>
            <Link className="no-underline">View all</Link>
           </Flexwrapper>

           {/* slider */}
           <div className="overflow-hidden border-y border-b-black">
           <Flexwrapper className="gap-1 my-2 overflow-y-scroll">
           <button className="flex justify-center items-center bg-red-900 rounded-3xl text-white pr-3 "><BiDollarCircle  fontSize={'1.7rem'}  color='green' className="mr-2"/> <p className="text-sm">30.23</p></button>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           </Flexwrapper>
          </div>

          {/* matches */}
           <div className="m-2 rounded-xl bg-[#FFFF00]">
             <Flexwrapper className="px-2 py-2">
             <ColFlex className=" text-center basis-[30%] py-3">
             <div className="px-2">
                 <img src={man_u} alt="" className="rounded-xl  bg-[#FFFF00]  w-20 aspect-auto" />
             </div>
                  <h3 className="break text-sm capitalize py-2">barcelona</h3>
                  <button className="rounded-lg bg-black text-white px-3 py-1 text-sm subpixel-antialiased font-semibold"  onClick={() => handleClick('win1')}>{marked === 'win1' ? (<IoCheckmarkDoneSharp className='mx-auto'/>): 'win'}</button>
               </ColFlex>
               <ColFlex className=" mt-7 gap-4 text-center basis-[30%]">
                <div className="p-2">
                  <FaArrowRightArrowLeft fontSize={'1.9rem'} className="mx-auto rounded-xl  bg-[#FFFF00]  w-20 aspect-auto "/>
                </div>
                {/* <h3 className="pb-3">to draw</h3> */}
                <button className=" rounded-lg bg-black text-white px-3 py-1 text-sm subpixel-antialiased font-semibold" onClick={() => handleClick('draw')}>{selectedButton === 'draw' ? (<IoCheckmarkDoneSharp className='mx-auto'/>): 'draw'}</button>
               </ColFlex>
               <ColFlex className=" text-center basis-[30%]">
             <div className="px-2">
                 <img src={man_u} alt="" className="rounded-xl  bg-[#FFFF00]  w-20 aspect-auto" />
             </div>
                  <h3 className="break text-sm capitalize py-2">athletic club</h3>
                  <button className="rounded-lg bg-black text-white px-3 py-1 text-sm subpixel-antialiased font-semibold" onClick={() => handleClick('win2')}>{selectedButton === 'win2' ? (<IoCheckmarkDoneSharp className="mx-auto"/>): 'win'}</button>
               </ColFlex>
             </Flexwrapper>
           </div>
           <div className="bg-yellow-300 w-20 aspect-auto  fixed bottom-7 inset-x-80 py-2 px-2 rounded-md"> 
         <PiFootballFill fontSize={'3rem'}/>
     </div>
        </MaxWidthScreen>
  )
}

export default Home