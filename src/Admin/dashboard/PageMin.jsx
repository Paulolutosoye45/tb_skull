import React, { useState } from "react";
import { BiArrowBack, BiLeftArrow } from "react-icons/bi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import ColFlex from "../../components/ColFlex";
import { Link } from "react-router-dom";

function PageMin() {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden  bg-gray-900 min-h-screen">
        <div className="mx-auto max-w-2xl relative">
          <div className="flex justify-between items-center py-4 bg-yellow-600 px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer lg:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setSideBar(!sidebar)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                style={{ fontSize: "4rem" }}
              />
            </svg>
            <p className="text-white capitalize font-josefin text-base font-medium xl:text-2xl">
              admin
            </p>
            <div className=" hidden xl:block"></div>
          </div>
          {/* <div className="bg-white text-indigo-800 w-[50%] min-h-screen absolute top-0">
            <div className="float-end p-4 ">
              <FaDownLeftAndUpRightToCenter className="text-3xl " />
            </div>
            <div></div>
          </div> */}

          <div className="m-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-500 hover:bg-gradient-to-l capitalize animate-gradient">
              welcome admin
            </h1>
          </div>

          <div className="grid grid-cols-1 divide-y divide-gray-600 text-center rounded-xl border-2 border-gray-600 mx-3 bg-gray-800 shadow-lg my-16">
            <div className="text-white font-Roboto text-2xl font-bold capitalize p-6 hover:bg-gray-700 transition duration-300 ease-in-out rounded-t-xl">
              <Link to='/admin/team' className="hover:text-yellow-400">create match</Link>
            </div>
            <div className="text-white font-Roboto text-2xl font-bold capitalize p-6 hover:bg-gray-700 transition duration-300 ease-in-out">
              <Link to='/admin/viewmatches' className="hover:text-yellow-400">view match</Link>
            </div>
            <div className="text-white font-Roboto text-2xl font-bold capitalize p-6 hover:bg-gray-700 transition duration-300 ease-in-out rounded-b-xl">
              <Link to='/admin/updatematch' className="hover:text-yellow-400">update match</Link>
            </div>
            <div className="text-white font-Roboto text-2xl font-bold capitalize p-6 hover:bg-gray-700 transition duration-300 ease-in-out rounded-b-xl">
          <Link  to="/admin/questions" className="hover:text-yellow-400">question and answer </Link>  
            </div>
            <div className="text-white font-Roboto text-2xl font-bold capitalize p-6 hover:bg-gray-700 transition duration-300 ease-in-out rounded-b-xl">
          <Link  to="/admin/updateQuestions" className="hover:text-yellow-400"> update question</Link>  
            </div>
            <div className="text-white font-Roboto text-2xl font-bold capitalize p-6 hover:bg-gray-700 transition duration-300 ease-in-out rounded-b-xl">
          <Link  to="/admin/addclub" className="hover:text-yellow-400">can't find team </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );8
}



export default PageMin;
