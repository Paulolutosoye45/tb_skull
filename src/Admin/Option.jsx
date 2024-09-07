import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import MaxWidthScreen from "../components/MaxWidthScreen";
import Flexwrapper from "../components/Flexwrapper";
import ucl3 from '../../public/access/ucl3.png'
import la_Liga from '../../public/access/la-liga-logo.jpg'
import pllp from '../../public/access/Premier-League-logo.png'

function Option() {
    return (
        <div>
            <div className='mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen'>
                <div className="mx-auto max-w-3xl">
                <div className="p-4">
                    <FaArrowLeft className="text-white text-2xl" />
                    <h2 className="text-white capitalize font-oswald font-medium text-2xl m-4 ml-2 ">team a</h2>
                    <Flexwrapper className="overflow-x-scroll gap-3">
                        <div className="border-0 outline-0 my-3">
                            <img src={ucl3} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0">
                            <img src={la_Liga} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0 my-3">
                            <img src={pllp} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0">
                            <img src={ucl3} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0 my-3">
                            <img src={la_Liga} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0">
                            <img src={pllp} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                    </Flexwrapper>
                    <h2 className="text-white capitalize font-oswald font-medium text-2xl m-2 ml-2 ">select team</h2>
                    <button  className="w-full border-[#e7d3d3] border-2 text-white  font-medium rounded-lg text-sm capitalize px-4 py-3  flex  justify-between items-center"> select team<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                      <div className="border-2 rounded-lg  my-5  w-full h-52 overflow-hidden"></div>
                </div>
                <div className="px-4 py-2">
                    <h2 className="text-white capitalize font-oswald font-medium text-2xl m-4 ml-2 ">team b</h2>
                    <Flexwrapper className="overflow-x-scroll gap-3">
                        <div className="border-0 outline-0 my-3">
                            <img src={ucl3} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0">
                            <img src={la_Liga} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0 my-3">
                            <img src={pllp} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0">
                            <img src={ucl3} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0 my-3">
                            <img src={la_Liga} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                        <div className="border-0 outline-0">
                            <img src={pllp} className="max-w-20 h-20 object-cover rounded-lg" alt="" />
                        </div>
                    </Flexwrapper>
                    <h2 className="text-white capitalize font-oswald font-medium text-2xl m-2 ml-2 ">select team</h2>
                    <button  className="w-full border-[#e7d3d3] border-2 text-white  font-medium rounded-lg text-sm capitalize px-4 py-3  flex  justify-between items-center"> select team<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                    <div className="border-2 my-5 rounded-lg  w-full h-52 overflow-hidden"></div>
                </div>
                <div className="px-6 my-7">
                <button className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2">continue</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Option;
