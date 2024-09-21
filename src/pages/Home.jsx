import MaxWidthScreen from "../components/MaxWidthScreen";
import { BiDollarCircle, BiSolidChevronLeft } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import Flexwrapper from "../components/Flexwrapper";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import MatchList from "../components/MatchList";
import UserContext from "../context/UserContext";
import { FaArrowLeft } from "react-icons/fa6";

const Home = () => {
  const { users, referralCode } = useContext(UserContext);
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
      <div className="p-4 flex items-center font-josefin font-medium my-3">
        <FaArrowLeft className="text-2xl text-white " />
        <p className="uppercase  text-white text-center font-bold flex-grow">
          today's matches
        </p>
      </div>
      <Flexwrapper className="bg-[#213045] p-4">
        <p className="capitalize font-josefin font-normal  text-xl text-white truncate">
          rFP
        </p>
        <Flexwrapper className="gap-2 ">
          {/* <button className="flex justify-center items-center bg-red-900 rounded-3xl text-white pr-3 "><BiDollarCircle  fontSize={'1.7rem'}  color='f9e05f' className="mr-2"/> <p className="text-sm">30.23</p></button> */}
          <button className="rounded-xl bg-[#d4fd00] px-3 py-1  text-base subpixel-antialiased font-medium font-josefin text-[#213045] hover:opacity-60 border-0 outline-0">
          {users?.name}
          </button>
          <Link to="profile" className="cursor-pointer">
            <BsPersonCircle fontSize={"1.8rem"}  />
          </Link>
        </Flexwrapper>
      </Flexwrapper>
      <div className="mt-7">
      <Flexwrapper className="px-2 py-2 font-oswald  text-xl  text-white  border-b-black">
        <p className="text-base font-medium font-josefin pl-4 ">Match updates</p>
        {/* <Link className="no-underline">View all</Link> */}
      </Flexwrapper>
      <MatchList />
      </div>
    </MaxWidthScreen>
  );
};

export default Home;
