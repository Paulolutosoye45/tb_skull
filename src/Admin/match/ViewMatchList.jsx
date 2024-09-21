import React, { useEffect, useState } from "react";
import Flexwrapper from "../../components/Flexwrapper";

function ViewMatchList({ match, handleChange, handleRemove }) {
  const [selectedItem, setselectedItem] = useState(null);

  const handleSelection = (id) => {
    if (id === selectedItem) {
      setselectedItem(null);
      handleRemove(match.id);
      return;
    }
    setselectedItem(id);
    handleChange({ ...match, selectedMatch: id });
  };

  const isSelected = (id) => {
    return id === selectedItem;
  };
  // const handleisSelected = (id) => {
  //   return id === sele;
  // };

  useEffect(() => {
    setselectedItem(match.selectedMatch);
  }, []);

  return (
    <div>
        {!match.isSelected ? (
      <div className="border-b-2 border-gray-700 my-6 pb-4">
            <Flexwrapper className="text-white text-sm font-Roboto text-center px-4 py-2">
              <p className="truncate text-base font-bold text-gray-300 w-28">
                {match.teamAName}
              </p>
              <p className="truncate text-yellow-500 text-2xl font-semibold my-1">
                Vs
              </p>
              <p className="truncate text-base font-bold text-gray-300 w-28">
                {match.teamBName}
              </p>
            </Flexwrapper>

            <div className="flex items-center justify-between px-4 py-2 mb-5 gap-4">
              {/* Team A Button */}
              <button
                onClick={() => handleSelection(match.teamA)}
                className={`flex-grow text-white py-2 px-3 rounded-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out ${
                  isSelected(match.teamA) ? "bg-[#32CD32] border-none" : ""
                }`}
              >
                {match.teamACode}
              </button>

              {/* Draw Button */}
              <button
                onClick={() => handleSelection(match.teamDrawId)}
                className={`flex-grow text-white py-2 px-3 rounded-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out ${
                  isSelected(match.teamDrawId) ? "bg-[#32CD32] border-none" : ""
                }`}
              >
                DRAW
              </button>

              {/* Team B Button */}
              <button
                onClick={() => handleSelection(match.teamB)}
                className={`flex-grow text-white py-2 px-3 rounded-lg border-2 hover:shadow-xl transition-all duration-300 ease-in-out capitalize ${
                  isSelected(match.teamB) ? "bg-[#32CD32] border-none" : ""
                }`}
              >
                {match.teamBCode}
              </button>
            </div>
          </div>
        ): null}
    </div>
  );
}

export default ViewMatchList;
