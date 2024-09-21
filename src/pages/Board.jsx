import React, { useContext, useEffect, useState } from "react";
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import BoardList from "./BoardList";
import Monthly from "./Monthly";

function Board() {
  const { arrLeaderBoard } = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState("leader board");

  const today = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[today.getMonth()];

  useEffect(() => {
    arrLeaderBoard
}, []);

  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };
  const toggleOption = () => {
    setSelectedOption((prevOption) =>
      prevOption === "leader board"
        ? (<p className="text-base font-josefin">{currentMonth} LeaderBoard</p>)
        : "leader board"
    );
  };

  return (
    <div className="bg-[#213045]">
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden min-h-screen">
        <div className="mx-auto max-w-3xl">
          <div className="max-w-xl mx-auto">
            <Flexwrapper className="p-4 my-3  border-b-2 border-gray-700 ">
              <FaArrowLeft
                className="text-2xl cursor-pointer text-white"
                onClick={() => handleNav()}
              />
              <Menu as="div" className="flex-grow px-4 relative">
                <div className="flex justify-between items-center text-white">
                  <MenuButton className="flex w-full justify-between rounded-md px-3 py-2 text-base font-semibold capitalize text-white">
                    {selectedOption}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-7 w-7 text-white"
                    />
                  </MenuButton>

                  {/* SVG Icon next to the Menu */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-7 w-7 ml-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </div>

                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition duration-100 ease-out">
                  <div className="py-1">
                    <MenuItem>
                      <div
                        className="text-base font-semibold  block px-4 py-2  bg-gray-100 text-gray-900"
                        onClick={toggleOption}
                      >
                        {selectedOption === "leader board"
                          ? currentMonth
                          : "Leader Board"}
                      </div>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </Flexwrapper>
             <div className="px-1">
            <div className="mx-auto  pt-5 px-2 font-Inter bg-[#f5f6f8] rounded-t-3xl  overflow-y-auto relative  pb-24  h-screen">
              {selectedOption === "leader board" ? (
                arrLeaderBoard.map((item) => <BoardList ar={ar} item={item} key={item.position} />)
              ) : (
                <Monthly />
              )}
            </div>
            </div>
            <div className="fixed bottom-2 left-0 right-0 mx-4 bg-[#213045] py-2 px-3 rounded-xl shadow-lg z-10 md:mx-28 xl:mx-72 md:w-auto">
              <Flexwrapper className="px-4 py-2 justify-between score">
                <NavLink to="/" className="text-white">
                  <ColFlex>
                    <PiSoccerBall
                      fontSize={"1.5rem"}
                      className="text-[#979494] tts"
                    />
                    <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                      Games
                    </h6>
                  </ColFlex>
                </NavLink>
                <NavLink to="/question" className="text-white">
                  <ColFlex>
                    <BsFillPatchQuestionFill
                      fontSize={"1.5rem"}
                      className="text-[#979494] tts"
                    />
                    <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                      q/a
                    </h6>
                  </ColFlex>
                </NavLink>
                <NavLink to="/dashboard" className="text-white">
                  <ColFlex>
                    <IoStatsChartOutline
                      fontSize={"1.3rem"}
                      className="text-[#979494] tts"
                    />
                    <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                      Leader
                    </h6>
                  </ColFlex>
                </NavLink>
                <NavLink to="/profile" className="text-white">
                  <ColFlex>
                    <BsPersonCircle
                      fontSize={"1.5rem"}
                      className="text-[#979494] tts"
                    />
                    <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                      Profile
                    </h6>
                  </ColFlex>
                </NavLink>
                <NavLink to="/tasks" className="text-white">
                  <ColFlex>
                    <TfiViewListAlt
                      fontSize={"1.5rem"}
                      className="text-[#979494] tts"
                    />
                    <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                      Tasks
                    </h6>
                  </ColFlex>
                </NavLink>
              </Flexwrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
