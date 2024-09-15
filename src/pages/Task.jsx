import React from "react";
import MaxWidthScreen from "../components/MaxWidthScreen";
import { FaArrowLeft } from "react-icons/fa6";
import ColFlex from "../components/ColFlex";
import tele from "../../public/access/Telegram-icon.png";
import X from "../../public/access/X.avif";
import { FaChevronRight } from "react-icons/fa6";

function Task() {
  return (
    <div>
      <MaxWidthScreen>
        <div className="p-4 flex items-center font-josefin font-medium my-3">
          <FaArrowLeft className="text-2xl text-white " />
          <p className="uppercase text-xl leading-none  text-white text-center font-bold flex-grow">
            Tasks
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-white text-lg font-Roboto font-medium">Tasks</h2>
          <p className="text-white text-base  my-2 font-Roboto">
            Do tasks and earn more
          </p>
          <div>
            <ColFlex className="mt-7 pb-20">
              <div className="flex justify-between  items-center w-full p-4  py-3 glass rounded-xl mb-2.5 shadow-lg border-0 hover:opacity-80 cursor-pointer">
                <div className="flex gap-3 items-center flex-grow">
                  <div>
                    <img
                      src={tele}
                      alt="Telegram Icon"
                      className="w-16 rounded-full"
                    />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-white text-lg  font-Roboto">
                      Join our TG Channel
                    </h2>
                    <p className="text-white text-sm  font-Inconsolata font-light">
                      +2,000 Members
                    </p>
                  </div>
                  <div></div>
                </div>
                <FaChevronRight className="text-white text-base" />
              </div>
              <div className="flex justify-between  items-center w-full p-4  py-3 glass rounded-xl mb-2.5 shadow-lg border-0 hover:opacity-80 cursor-pointer">
                <div className="flex gap-3 items-center flex-grow">
                  <div>
                    <img
                      src={X}
                      alt="Telegram Icon"
                      className="w-16 rounded-full"
                    />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-white text-lg  font-Roboto">
                      Follow us on X!
                    </h2>
                    <p className="text-white text-sm  font-Inconsolata font-light">
                      +1,000 Members
                    </p>
                  </div>
                  <div></div>
                </div>
                <FaChevronRight className="text-white text-base" />
              </div>
            </ColFlex>
          </div>
        </div>
      </MaxWidthScreen>
    </div>
  );
}

// {/* Image or icon can be added here */}
//                 {/* <div><img src={tele} alt="Telegram Icon" className="w-6 h-6" /></div> */}
//                 <div className="flex justify-between items-center">

//                 <div>
//                   <h2 className="text-white text-lg font-inter font-semibold">
//                     Join our TG Channel
//                   </h2>
//                   <p className="text-white text-sm font-inter font-light">
//                     +2,000 Members
//                   </p>
//                 </div>
//                 <FaChevronRight className="text-white text-xl" />
//                </div>

export default Task;
