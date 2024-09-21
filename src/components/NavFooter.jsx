import React from "react";
import { PiSoccerBall } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import Flexwrapper from "./Flexwrapper";
import { Link, NavLink } from "react-router-dom";
import { BsFillPatchQuestionFill } from "react-icons/bs"
import { TfiViewListAlt } from "react-icons/tfi";
import ColFlex from "./ColFlex";

const NavFooter = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 mx-4 bg-white py-1 px-3 rounded-xl shadow-lg z-10 md:mx-28 xl:mx-72 md:w-auto">
      <div className="bg-white py-2 px-3 w-full rounded-xl transition-all font-Roboto">
        <Flexwrapper className=" md:px-8 justify-between team">
          <NavLink to="/">
            <ColFlex>
              <PiSoccerBall
                fontSize={"1.5rem"}
                className="text-[#979494] md:text-[1.9rem] tt"
              />
              <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                Games
              </h6>
            </ColFlex>
          </NavLink>
          <NavLink to="/question">
            <ColFlex>
              <BsFillPatchQuestionFill
                fontSize={"1.5rem"}
                className="text-[#979494] md:text-[1.9rem] tt"
              />
              <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                q/a
              </h6>
            </ColFlex>
          </NavLink>
          <NavLink to="/dashboard">
            <ColFlex>
              <IoStatsChartOutline
                fontSize={"1.3rem"}
                className="text-[#979494] md:text-[1.7rem] tt"
              />
              <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                Leader
              </h6>
            </ColFlex>
          </NavLink>
          <NavLink to="/profile">
            <ColFlex>
              <BsPersonCircle
                fontSize={"1.5rem"}
                className="text-[#979494] md:text-[1.9rem tt"
              />
              <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                Profile
              </h6>
            </ColFlex>
          </NavLink>
          <NavLink to="/tasks">
            <ColFlex>
              <TfiViewListAlt 
                fontSize={"1.5rem"}
                className="text-[#979494] md:text-[1.9rem tt"
              />
              <h6 className="text-xs md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                Tasks
              </h6>
            </ColFlex>
          </NavLink>
        </Flexwrapper>
      </div>
    </div>
  );
};

export default NavFooter;
