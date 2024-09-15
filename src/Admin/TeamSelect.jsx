import React, { useContext, useMemo, useState } from "react";
import Flexwrapper from "../components/Flexwrapper";
import UserContext from "../context/UserContext";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";
import TeamSelectList from "./TeamSelectList";

const TeamSelect = () => {
  const { matchDetails } = useContext(UserContext);
  const [selections, setSelections] = useState([]);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin");
  };

  const handleChange = (selection) => {
    const result = selections.find((item) => item.id === selection.id);
    if (!result) {
      setSelections((state) => [...state, selection]);
      return;
    }

    setSelections((state) =>
      state.map((item) => {
        if (item.id === selection.id) {
          return selection;
        }

        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setSelections((state) => state.filter((item) => item.id !== id));
  };
  const isPastMatchTime = (matchSrt) => {
    const matchDate = new Date(matchSrt);
    return new Date() > matchDate;
  };

  const pastMatchTimes = useMemo(() => {
    return matchDetails.reduce((acc, match) => {
      acc[match.id] = isPastMatchTime(match.matchStartTime);
      return acc;
    }, {});
  }, [matchDetails]);
  console.log(selections)
  return (
    <div className=" bg-[#213045]">
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

          {matchDetails.length > 0 ? (
            matchDetails.map((match) => (
              <TeamSelectList
                match={match}
                key={match.id}
                pastMatchTimes={pastMatchTimes}
                handleChange={handleChange}
                handleRemove={handleRemove}
              />
            ))
          ) : (
            <p className="text-white leading-6 text-lg p-2 font-josefin font-bold">
              No match to view
            </p>
          )}
          {selections.length > 0 ? (
            <div className=" md:w-auto md:left-0 md:right-0 md:mx-72 bottom-0 w-full my-4 px-4">
              <button className="w-full bg-[#f4f4f4] border-2 text-blue-700  font-medium rounded-lg text-base capitalize px-4 py-2">
                {" "}
                submit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TeamSelect;
