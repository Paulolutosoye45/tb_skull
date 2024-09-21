import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";

function Question() {
    const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin");
  };
 return(
        <div>
          <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden min-h-screen bg-[#213045] relative">
            <div className="mx-auto max-w-3xl">
              <div className="p-4 flex items-center font-josefin font-medium my-3">
                <FaArrowLeft
                  className="text-2xl text-white cursor-pointer hover:text-gray-300"
                  onClick={() => handleNav()}
                />
                <p className="uppercase text-white text-center font-bold flex-grow">
                  View Matches
                </p>
              </div>
              <p className="uppercase text-white  font-josefin text-center font-bold flex-grow">
                  coming soon....
                </p>
              {/* <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white message"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea> */}
            </div>
          </div>
        </div>
 )
}

export default Question;
