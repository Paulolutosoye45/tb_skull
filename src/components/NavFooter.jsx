import React from "react";
import { PiSoccerBall } from "react-icons/pi";
import { IoStatsChartOutline } from "react-icons/io5";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import Flexwrapper from "./Flexwrapper";
import { Link } from "react-router-dom";
import ColFlex from "./ColFlex";

const NavFooter = () => {
   
  return (
    <div className="absolute bottom-0  w-full">
      <div className="bg-[#2a3645] py-2 px-3  transition-all  lg:mx-8 font-Roboto">
        <Flexwrapper className="px-8">
          <Link to="/">
            <ColFlex>
              <PiSoccerBall
                fontSize={"1.5rem"}
                className="text-[#979494] md:font-size:1.9rem"
              />
              <h6 className="text-sm md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                games
              </h6>
            </ColFlex>
          </Link>
          <Link to="/score">
            <ColFlex>
              <TbRosetteDiscountCheck
                fontSize={"1.5rem"}
                className="text-[#979494] md:font-size:1.9rem"
              />
              <h6 className="text-sm md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                score
              </h6>
            </ColFlex>
          </Link>
          <Link to="/dashboard">
            <ColFlex>
              <IoStatsChartOutline
                fontSize={"1.3rem"}
                className="text-[#979494] md:font-size:1.7rem"
              />
              <h6 className="text-sm md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                leader
              </h6>
            </ColFlex>
          </Link>
          <Link to="/profile">
            <ColFlex>
              <BsPersonCircle
                fontSize={"1.5rem"}
                className="text-[#979494] md:font-size:1.9rem"
              />
              <h6 className="text-sm md:text-lg capitalize font-oswald font-semibold text-[#979494]">
                profile
              </h6>
            </ColFlex>
          </Link>
        </Flexwrapper>
      </div>
    </div>
  );
};

export default NavFooter;
