import React from "react";
import Flexwrapper from "../components/Flexwrapper";
import MaxWidthScreen from "../components/MaxWidthScreen";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function QuestionPage() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };
  return (
    <div>
      <MaxWidthScreen>
        <div className="p-4 flex items-center font-josefin font-medium my-3">
          <FaArrowLeft className="text-2xl text-white " onClick={handleNav} />
          <p className="uppercase  text-white text-center font-bold flex-grow">
            question and answer
          </p>
        </div>
        <p className="uppercase  text-white text-center font-bold flex-grow">not available</p>
         <div className="pb-20">
          <div className="main p-4 divide-y-2 scrollbar-hide">
            <div className="section py-6">
              <div className="border-2 border-gray-700 text-white font-sans text-base py-3  px-4 min-h-[9rem] rounded-2xl my-4 bg-gray-800">how many doctor does she need?</div>
              <div className="item-section flex flex-col space-y-4">
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="radio" name="answer" id="optionA" className="hidden peer" />
                  <label
                    for="optionA"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="radio" name="answer" id="optionB" className="hidden peer" />
                  <label
                    for="optionB"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="radio" name="answer" id="optionC" className="hidden peer" />
                  <label
                    for="optionC"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
              </div>
            </div>
            <div className="section py-6">
              <div className="border-2 border-gray-700 text-white font-sans text-base py-3  px-4 min-h-[9rem] rounded-2xl my-4 bg-gray-800">how many doctor does she need?</div>
              <div className="item-section flex flex-col space-y-4">
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" id="A" className="hidden peer" />
                  <label
                    for="A"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" id="B" className="hidden peer" />
                  <label
                    for="B"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" id="C" className="hidden peer" />
                  <label
                    for="C"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
              </div>
            </div>
            <div className="section py-6">
              <div className="border-2 border-gray-700 text-white font-sans text-base py-3  px-4 min-h-[9rem] rounded-2xl my-4 bg-gray-800">how many doctor does she need?</div>
              <div className="item-section flex flex-col space-y-4">
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" id="A" className="hidden peer" />
                  <label
                    for="A"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" id="B" className="hidden peer" />
                  <label
                    for="B"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
                <div className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" id="C" className="hidden peer" />
                  <label
                    for="C"
                    className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
                  >
                    Adobe XD
                  </label>
                </div>
              </div>
            </div>

          </div>
        </div> 
      </MaxWidthScreen>
    </div>
  );
}

export default QuestionPage;
