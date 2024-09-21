import React, { useEffect, useState } from "react";
import Flexwrapper from "../components/Flexwrapper";

function TeamSelectList({match, pastMatchTimes, handleChange, handleRemove }) {
  const [selectedItem, setselectedItem] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleSelection = (id) => {
    if (id === selectedItem) {
      setselectedItem(null);
      handleRemove(id);
      return;
    }
    setselectedItem(id);
    handleChange({ ...match,  id });
  };

  

  const isSelected = (id) => {

    return id === selectedItem;
  };


  useEffect(() => {
    setselectedItem(match.selectedMatch);
  }, []);

  return (
    <div>
  <div className="border-b-2 border-gray-700 my-6 pb-4">
          <>
    <Flexwrapper className="text-white text-sm font-Roboto text-center px-4 py-2">
      <p className="truncate text-lg font-bold text-gray-300 w-28">
        {match.teamAName}
      </p>
      <p className="truncate text-yellow-500 text-2xl font-semibold my-1">
        Vs
      </p>
      <p className="truncate text-lg font-bold text-gray-300 w-28">
        {match.teamBName}
      </p>
    </Flexwrapper>
    
    <div className="flex items-center justify-between px-4 py-2 mb-5 gap-4">
      <input
        checked={isChecked} // Ensure isChecked corresponds to the correct match
        onChange={handleCheckboxChange} // Connect checkbox logic to handle state
        onClick={() => handleSelection(match.id)} // Call selection handler with match id
        disabled={pastMatchTimes[match.id]} // Disable checkbox if match time has passed
        type="checkbox"
        className={`w-5 h-5 accent-yellow-500 cursor-pointer transition-transform transform hover:scale-110  ${
          pastMatchTimes[match.id]
            ? "accent-red-500 cursor-not-allowed" // Adjust disabled styles
            : ""
        }`}
        style={{ display: 'inline-block' }} 
      />

          {/* <button
            className={`flex-grow text-white py-2 px-3 rounded-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out ${
              pastMatchTimes[match.id] ? "border-3 border-red-700" : ""
            }`}
            disabled={pastMatchTimes[match.id]}
          >
            {match.teamACode}
          </button>

          <button
            className={`flex-grow text-white py-2 px-3 rounded-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out ${
              pastMatchTimes[match.id] ? "border-3 border-red-700" : ""
            }`}
            disabled={pastMatchTimes[match.id]}
          >
            DRAW
          </button>

          <button
            className={`flex-grow text-white py-2 px-3 rounded-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out capitalize ${
              pastMatchTimes[match.id] ? "border-3 border-red-700" : ""
            }`}
            disabled={pastMatchTimes[match.id]}
          >
            {match.teamBCode}
          </button> */}
        </div>
        </>
      </div>
    </div>
  );
}

export default TeamSelectList;
