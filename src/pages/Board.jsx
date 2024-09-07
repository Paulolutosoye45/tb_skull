import React from "react";
import MaxWidthScreen from "../components/MaxWidthScreen";
import Flexwrapper from "../components/Flexwrapper";
import { BiSolidChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router";
import { BsPersonCircle } from "react-icons/bs";

function Board() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };
  return (
    <div>
      <MaxWidthScreen>
        <Flexwrapper className="p-4">
          <BiSolidChevronLeft
            className="text-4xl cursor-pointer text-white"
            onClick={() => handleNav()}
          />
          <h4 className="capitalize text-2xl font-medium font-Inter text-white">
            leader board
          </h4>
          <div>
            <BsPersonCircle fontSize={'2rem'} color="white" />
          </div>
        </Flexwrapper>
        <div className="mx-auto px-4 font-Inter bg-white rounded-t-3xl h-[90vh] overflow-y-auto">
            {/* <Flexwrapper className="capitalize text-white px-4 my-3  font-medium">
                <p className="pb-3 text-left">User ID</p>
                <p className="pb-3 text-left">City</p>
                <p className="pb-3 text-left">Score</p>
            </Flexwrapper> */}
            <Flexwrapper className="font-Inter rounded-xl  transition-shadow duration-300">
                    <p className="py-4 px-6 text-gray-800">1</p>
                    <p className="py-2 px-6 text-gray-800">6564226982</p>
                    <p className="py-4 px-6 text-gray-800 ">300</p>
            </Flexwrapper>
            <Flexwrapper className="font-Inter rounded-xl  transition-shadow duration-300">
                    <p className="py-4 px-6 text-gray-800">2</p>
                    <p className="py-2 px-6 text-gray-800">6564226982</p>
                    <p className="py-4 px-6 text-gray-800 ">300</p>
            </Flexwrapper>

</div>       
      </MaxWidthScreen>
    </div>
  );
}

export default Board;
