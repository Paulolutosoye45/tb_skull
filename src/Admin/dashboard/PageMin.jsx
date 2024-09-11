import React, { useState } from "react";
import { BiArrowBack, BiLeftArrow } from "react-icons/bi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";

function PageMin() {
    const [sidebar, setSideBar]=useState(false)
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
              style={{fontSize:'4rem'}}
              />
          </svg>
              <p className="text-white capitalize font-josefin text-base font-medium xl:text-2xl">admin</p>
             <div className=" hidden xl:block">
                link 
             </div>
     </div>
             <div className="bg-white text-indigo-800 w-[50%] min-h-screen absolute top-0">
                <div className="float-end p-4 ">
                    <FaDownLeftAndUpRightToCenter className="text-3xl "/>
                </div>
                <div>
                  
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default PageMin;
