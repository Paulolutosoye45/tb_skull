import React, { useContext, useState } from "react";
import Flexwrapper from "../components/Flexwrapper";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { BsFillPatchQuestionFill, BsPersonCircle } from "react-icons/bs";
import { PiSoccerBall } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import ColFlex from "../components/ColFlex";
import { FaArrowLeft } from "react-icons/fa6";
import ar from "../../public/access/360-camera.png";
import UserContext from "../context/UserContext";
import { TfiViewListAlt } from "react-icons/tfi";

function Board() {
  const { users} = useContext(UserContext);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#213045]">
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden min-h-screen">
        <div className="mx-auto max-w-3xl">
          <div className="max-w-xl mx-auto">
            <Flexwrapper className="p-4 my-3">
              <FaArrowLeft
                className="text-2xl cursor-pointer text-white"
                onClick={() => handleNav()}
              />
              <p className="capitalize text-xl font-medium font-Inter text-white">
                leader board
              </p>
              <div>
                <BsPersonCircle fontSize={"2rem"} color="white" />
              </div>
            </Flexwrapper>
            {/* <div className="mx-auto  pt-5 px-2 font-Inter bg-[#f5f6f8] rounded-t-3xl  overflow-y-auto relative min-h-screen pb-24">
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full bg-yellow-600 p-[2px]"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
              <Flexwrapper className="font-josefin rounded-xl transition-shadow duration-300    p-4 my-2 shadow-[0px_6px_10px_rgba(0,0,0,0.3),0_2px_3px_rgba(0,0,0,0.25)]">
                <Flexwrapper className="flex items-center space-x-2">
                  <p>1</p>
                  <img
                    src={ar}
                    alt="Profile"
                    className="w-5 h-5 rounded-full"
                  />
                  <p className="font-semibold">{users?.name}</p>
                </Flexwrapper>
                <p className="font-semibold">300</p>
              </Flexwrapper>
            </div>
          </div>{" "}
          <div className="fixed bottom-2 left-0 right-0 mx-4 bg-[#213045] py-2 px-3 rounded-xl shadow-lg z-10 md:mx-28 xl:mx-72 md:w-auto">
      <Flexwrapper className="px-4 py-2 justify-between score">
        <NavLink to="/" className="text-white">
          <ColFlex>
            <PiSoccerBall fontSize={"1.5rem"} className="text-[#979494] tts" />
            <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
              Games
            </h6>
          </ColFlex>
        </NavLink>
        <Link to="" className="text-white">
          <ColFlex>
            <BsFillPatchQuestionFill fontSize={"1.5rem"} className="text-[#979494] tts" />
            <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
              q/a
            </h6>
          </ColFlex>
        </Link>
        <NavLink to="/dashboard" className="text-white">
          <ColFlex>
            <IoStatsChartOutline fontSize={"1.3rem"} className="text-[#979494] tts" />
            <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
              Leader
            </h6>
          </ColFlex>
        </NavLink>
        <NavLink to="/profile" className="text-white">
          <ColFlex>
            <BsPersonCircle fontSize={"1.5rem"} className="text-[#979494] tts" />
            <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
              Profile
            </h6>
          </ColFlex>
        </NavLink>
        <NavLink to="/tasks" className="text-white">
          <ColFlex>
            <TfiViewListAlt fontSize={"1.5rem"} className="text-[#979494] tts" />
            <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
              Tasks
            </h6>
          </ColFlex>
        </NavLink>
      </Flexwrapper> */}
    </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
