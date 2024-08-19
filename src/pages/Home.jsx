import MaxWidthScreen from "../components/MaxWidthScreen"
import { BiDollarCircle } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Flexwrapper from "../components/Flexwrapper";
import { Link } from "react-router-dom";
import { PiFootballFill } from "react-icons/pi";
import { useState, useRef , useEffect} from "react";

const Home = () => {
  console.log('hello')
  console.log('image here')
  useEffect(() => {
    const telegram = window.Telegram?.WebApp;

    if (telegram) {
      // Access user information
      const user = telegram.initDataUnsafe.user;
      console.log("User Info:", user);

      // Trigger Telegram functions
      telegram.ready();
    } else {
      console.error("Telegram WebApp is not available");
    }
  }, []);
  return (
        <MaxWidthScreen>
           <Flexwrapper className="bg-[#4d52cb] py-3 px-2">
            <p className="capitalize font-bold text-xl text-yellow-300 truncate">placeit</p>
            <Flexwrapper className="gap-2">
              <button className="flex justify-center items-center bg-red-900 rounded-3xl text-white pr-3 "><BiDollarCircle  fontSize={'1.7rem'}  color='f9e05f' className="mr-2"/> <p className="text-sm">30.23</p></button>
              <button className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</button>
              <div><BsPersonCircle  fontSize={'1.8rem'} color="yellow"/></div>
            </Flexwrapper>
           </Flexwrapper>
           {/* <div className="m-2 rounded-xl bg-[#f0b433]">
             <img src={Big_Match} alt="" />
             <Flexwrapper></Flexwrapper>
           </div> */}
           <Flexwrapper className="px-2 py-2 font-medium text-xl bg-[#4d52cb] text-white border-y border-b-black">
            <p>TopEvent</p>
            <Link className="no-underline">View all</Link>
           </Flexwrapper>
           {/* slider */}
           {/* <div className="overflow-hidden border-y border-b-black p-2">
           <Flexwrapper className="gap-1 my-2 overflow-y-scroll">
           <button className="flex justify-center items-center bg-red-900 rounded-3xl text-white pr-3 "><BiDollarCircle  fontSize={'1.7rem'}  color='f9e05f' className="mr-2"/> <p className="text-sm">30.23</p></button>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           <Link className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold">Deposit</Link>
           </Flexwrapper>
          </div> */}

          {/* matches */}
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className="m-2 rounded-xl  font-sans bg-[#272a2f]">
             <div className=" flex  items-center justify-between px-4 py-2">
             <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 antialiased">
                  rm
             </div>
               </div>
               <div className="">
                <div className="bg-red-500 text-white uppercase font-extrabold py-4 px-2  text-lg rounded-full hover:bg-red-700 transition duration-300 suantialiased">
                  draw
                </div>
               </div>
            <div className="">
             <div className="bg-blue-500 text-white uppercase font-extrabold py-4 px-4  text-2xl rounded-full hover:bg-blue-700 transition duration-300 subpixel-antialiased">
                 mun
              </div>
              </div>
             </div>
           </div>
           <div className=" bg-yellow-300 w-20 aspect-auto  fixed bottom-7 -right-4 py-2 px-2 rounded-md font-mono">
           <div className="relative"> 
            <div className="absolute -top-6  -left-6 bg-red-700 h-10 text-center px-4 py-2 text-white  rounded-full text-base font-bold">5</div>
            <PiFootballFill fontSize={'3rem'}/>
          </div>
           </div>
            
        </MaxWidthScreen>
  )
}

export default Home