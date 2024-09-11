import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

function MatchPanel({ leaguesClubs, setShow, setLeaguesClubs }) {
  const submithandler = () => {
    setShow(false);
  };

  const filterLeaguesClubsById = (filterId) => {
    const filteredClubs = leaguesClubs.filter((club) => club.idT !== filterId);
    setLeaguesClubs(filteredClubs);
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen">
        <div className="mx-auto max-w-3xl">
          <div className="p-4 flex items-center font-josefin font-medium my-3">
            <FaArrowLeft
              className="text-2xl text-white cursor-pointer hover:text-gray-300"
              onClick={submithandler}
            />
            <p className="uppercase text-white text-center font-bold flex-grow">
              View Matches
            </p>
          </div>

          <div className="flex flex-col space-y-4 p-4">
            {leaguesClubs.map((item) => (
              <div
                key={item.idT}
                className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-md shadow-lg"
              >
                <div className="flex flex-col">
                  {item.teamA.map((clubs) => (
                    <p key={clubs.id} className="font-medium">
                      {clubs.cts}
                    </p>
                  ))}
                </div>

                <div className="text-2xl font-medium text-yellow-500 mx-4">
                  vs
                </div>

                <div className="flex flex-col">
                  {item.teamB &&
                    item.teamB.map((clubs) => (
                      <p key={clubs.id} className="font-medium">
                        {clubs.cts}
                      </p>
                    ))}
                </div>
                <div
                  className="text-2xl font-medium text-red-800 mx-4 cursor-pointer"
                  onClick={() => filterLeaguesClubsById(item.idT)}
                >
                  x
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto my-7 w-3/4 md:w-6/12">
            <button className="w-full bg-[#f4f4f4] border-2 text-blue-700 font-medium rounded-lg text-base capitalize px-4 py-2">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchPanel;
