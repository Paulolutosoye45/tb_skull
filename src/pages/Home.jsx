import MaxWidthScreen from "../components/MaxWidthScreen"
import { BiDollarCircle } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import Flexwrapper from "../components/Flexwrapper";
import { Link } from "react-router-dom";
import { useState, useRef , useEffect} from "react";
import MatchList from "../components/MatchList";

const Home = () => {
  useEffect(() => {
    // const telegram = window.Telegram?.WebApp;

    // if (telegram) {
    //   const user = telegram.initDataUnsafe.user;
    //   console.log("User Info:", user);
    //   telegram.ready();
    // } else {
    //   console.error("Telegram WebApp is not available");
    // }

    // console.log(crypto.randomUUID())
  }, []);
  return (
        <MaxWidthScreen>
            <Flexwrapper className="bg-[#213045] py-3 px-2">
                  <p className="capitalize font-bold text-xl text-yellow-300 truncate">rFP</p>
                  <Flexwrapper className="gap-2">
                    {/* <button className="flex justify-center items-center bg-red-900 rounded-3xl text-white pr-3 "><BiDollarCircle  fontSize={'1.7rem'}  color='f9e05f' className="mr-2"/> <p className="text-sm">30.23</p></button> */}
                    <button className="rounded-full bg-yellow-300 px-3 p-[3px]  text-sm subpixel-antialiased font-semibold hover:opacity-60">6564226982</button>
                    <div className="cursor-pointer"><BsPersonCircle  fontSize={'1.8rem'} color="yellow"/></div>
                  </Flexwrapper>
            </Flexwrapper>
            <Flexwrapper className="px-2 py-2 font-medium font-sans text-xl  text-yellow-500 border-y border-b-black">
                  <p className="uppercase">today's matches</p>
                  {/* <Link className="no-underline">View all</Link> */}
            </Flexwrapper>
            {/* <Matches /> */}
            <MatchList/>

        </MaxWidthScreen>
  )
}

export default Home