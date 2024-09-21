import React, { useRef, useState, useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import MaxWidthScreen from "../components/MaxWidthScreen";
import Flexwrapper from "../components/Flexwrapper";
import ucl3 from "../../public/access/ucl3.png";
import la_Liga from "../../public/access/la-liga-logo.jpg";
import pllp from "../../public/access/Premier-League-logo.png";
import frenlg from "../../public/access/french.png";
import German from "../../public/access/German.png";
import Serlg from "../../public/access/Seria.png";
import pencil_ball from "../../public/access/pencil_ball.png";
import teamsContext from "../context/teamsContext";
import MatchPanel from "./MatchPanel";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const teamEmberm = [
  // { id: "champion league", teamLogo: ucl3 },
  { id: "Laliga", teamLogo: la_Liga },
  { id: "PremierShip", teamLogo: pllp },
  { id: "FrenchLeague", teamLogo: frenlg },
  { id: "Bundesliga", teamLogo: German, },
  { id: "SeriaA", teamLogo: Serlg },
  { id: "Others", teamLogo: pencil_ball },
];

const TeamSelection = ({ isDarkened, onSelect, teamDisplay, setOpenModal }) => (
  <>
    <div className="flex justify-between items-center gap-3 overflow-y-scroll scrollbar-hide">
      {teamEmberm.map((teamIcons, index) => (
        <div
          className={`flex-shrink-0 w-20 h-20 ${
            isDarkened === teamIcons.id ? "opacity-100" : "opacity-50"
          } `}
          key={index}
          onClick={() => onSelect(teamIcons.id)}
        >
          <img
            src={teamIcons.teamLogo}
            className={`w-full h-full object-cover rounded-lg ${
              teamIcons.id === "question" ? "" : "" // Add custom background for "question"
            }`}
            alt={teamIcons.id}
          />

        </div>
         ))}
    </div>
    <h2 className="text-white capitalize font-oswald font-medium text-2xl m-2 ml-2 mb-3">
      select team
    </h2>
    <button
      className="w-full md:w-10/12 mx-auto border-[#e7d3d3] border-2 text-white font-medium rounded-lg text-sm capitalize px-4 py-3 flex justify-between items-center"
      onClick={() => setOpenModal((prev) => !prev)}
    >
      {teamDisplay || "select team"}
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
  </>
);

const Modal = ({ openModal, handleTeamName, leagues }) =>
   openModal &&  (
    <div className="border-2 rounded-lg my-5 w-full h-52 md:h-40 overflow-x-auto scrollbar-hide">
      <ul className="cursor-pointer list-none p-0">
        {leagues.length === 0 ? (
          <li className="text-white text-base font-Roboto bg-gray-700 p-3 rounded-lg mb-2 text-center">
            No clubs
          </li>
        ) : (
          leagues.map((items) => (
            <li
              key={items.id}
              className="text-white  hover:text-yellow-400  capitalize text-base font-Roboto bg-gray-800 p-3 rounded-lg mb-2 text-center transition-colors duration-300 ease-in-out"
              onClick={() => handleTeamName(items.id, items.teamName)}
            >
              {items.teamName}
            </li>
          ))
        )}
      </ul>
    </div>
  );
const Option = () => {
  const { teamLeague } = useContext(teamsContext);

  const [state, setState] = useState({
    openModal: false,
    openModal2: false,
    isDarkened: null,
    isDarkened2: null,
    teamDisplay: null,
    teamDisplay2: null,
    leagues: [],
  });
  const [leaguesClubs, setLeaguesClubs] = useState([]);
  const [ClubsA, setClubsA] = useState({});
  const [ClubsB, setClubsB] = useState({});
  const [hrs, setHrs] = useState();
  const [min, setMin] = useState();
  const [show, setShow] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [loading, setloading] = useState(true);

  const divRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setloading(false)
      teamLeague
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChangehrs = (e) => {
    const re = /^\d{0,2}$/;
    
    if (e.target.value === "" || re.test(e.target.value)) {
      setHrs(e.target.value);
    }
  };
  const handleChangeMin = (e) => {
    const re = /^\d{0,2}$/;
    
    if (e.target.value === "" || re.test(e.target.value)) {
      setMin(e.target.value);
    }
  };

  const handleLeague = (clickedId) => {
    try {
      if (!teamLeague || teamLeague === null) {
        throw new Error("Team league data is not available.");
      }
  
      setState((prevState) => ({
        ...prevState,
        isDarkened: clickedId === prevState.isDarkened ? null : clickedId,
        leagues: teamLeague[clickedId] || [], // Ensuring fallback for undefined teamLeague
      }));
    } catch (error) {
      console.error("Error in handleLeague:", error);
      toast.error("an error occur Please try again later.", {
        className: "bg-[#06f6ad] text-white",
        bodyClassName: "text-white font-Roboto",
        progressClassName: "bg-[#FF0000]",
      });
      // You can also display this message in a more user-friendly way in the UI, like a toast notification
    }
  };
  

  const handleTeamName = (id, tName) => {
    setState((prevState) => ({
      ...prevState,
      teamDisplay: tName,
      openModal: false,
    }));

    setClubsA((prevClubsA) => [
      {
        id: id,
        cts: tName,
      },
    ]);
  };

  const handleLeagueB = (clickedId) => {
    try {
      if (!teamLeague || teamLeague === null) {
        throw new Error("Team league data is not available.");
      }
    setState((prevState) => ({
      ...prevState,
      isDarkened2: clickedId === prevState.isDarkened2 ? null : clickedId,
      leagues: teamLeague[clickedId] || [],
    }));
  } catch (error) {
    console.error("Error in handleLeague:", error);
    toast.error("an error occur Please try again later.", {
      className: "bg-[#06f6ad] text-white",
      bodyClassName: "text-white font-Roboto",
      progressClassName: "bg-[#FF0000]",
    });
    // You can also display this message in a more user-friendly way in the UI, like a toast notification
  }
  };

  const handleTeamNameB = (id, tName) => {
    setState((prevState) => ({
      ...prevState,
      teamDisplay2: tName,
      openModal2: false,
    }));

    setClubsB((prevClubsA) => [
      {
        ...prevClubsA,
        id: id,
        cts: tName,
      },
    ]);
  };

  const toggleModal = () => {
    setState((prevState) => ({
      ...prevState,
      openModal: !prevState.openModal,
    }));
  };

  const toggleModal2 = () => {
    setState((prevState) => ({
      ...prevState,
      openModal2: !prevState.openModal2,
    }));
  };
  const setClubsyet = () => {
    if (Object.keys(ClubsA).length > 0 && Object.keys(ClubsB).length > 0) {
      setLeaguesClubs((prev) => {
        if (
          !prev.some(
            (club) =>
              JSON.stringify(club.ClubsA) === JSON.stringify(ClubsA) &&
              JSON.stringify(club.ClubsB) === JSON.stringify(ClubsB)
          )
        ) {
          return [
            ...prev,
            { idT: crypto.randomUUID(), teamA: ClubsA, teamB: ClubsB, hrs, min },
          ];
        }
        return prev;
      });
      setShow(true);
      // console.log(leaguesClubs);
    } else {
      console.log("ClubsA or ClubsB is empty. Cannot add to leaguesClubs.");
      toast.error("team A or team B is empty. Cannot add empty value", {
        className: "bg-[#06f6ad ] text-white",
        bodyClassName: "text-[#ff0000] font-Roboto",
        progressClassName: "bg-[#FF0000]",
      });
    }
  }; 


  const handleClubs = () => {
    if(!min  || !hrs) {
      setTimeError(true)
      return;
    }
    setClubsyet();
  };
  return (
    <div>
        {loading ? (
            <div className="flex justify-center items-center  min-h-screen "><span className="loader flex"></span></div>
      ): (
    <div>
      {!show ? (
        <div className="bg-[#213045]">
          <div className="mx-auto w-full max-w-screen-xl md:px-20 overflow-hidden bg-[#213045] min-h-screen">
            <div className="mx-auto max-w-2xl">
              <div className="p-4"> 
                <h2 className="text-white capitalize font-oswald font-medium text-2xl m-4 ml-2">
                  Home
                </h2>
                <TeamSelection
                  isDarkened={state.isDarkened}
                  onSelect={handleLeague}
                  teamDisplay={state.teamDisplay}
                  setOpenModal={toggleModal} 
                />
                <Modal
                  openModal={state.openModal}
                  handleTeamName={handleTeamName}
                  leagues={state.leagues}
                />
              </div>
              <div className="p-4">
                <h2 className="text-white capitalize font-oswald font-medium text-2xl m-4 ml-2">
                  Away
                </h2>
                <TeamSelection
                  isDarkened={state.isDarkened2}
                  onSelect={handleLeagueB}
                  teamDisplay={state.teamDisplay2}
                  setOpenModal={toggleModal2} // Updated to use the toggle function
                />
                <Modal
                  openModal={state.openModal2}
                  handleTeamName={handleTeamNameB}
                  leagues={state.leagues}
                />
              </div>
              <div className="flex items-center gap-2 py-4 px-3">
                <div className="flex items-center gap-2">
                  <p className="text-white capitalize font-josefin">time:</p>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-center text-white">Hrs</p>
                    <input
                      type="text"
                      value={hrs}
                      onChange={handleChangehrs}
                      className="w-20 outline-none border-none rounded-md text-center bg-gray-800 text-white px-2 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </div>
                <p className="text-white text-xl">:</p>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-center text-white">Min</p>
                    <input
                      type="text"
                      value={min}
                      onChange={handleChangeMin}
                      className="w-20 outline-none border-none rounded-md text-center bg-gray-800 text-white px-2 py-2 shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                    />
                  </div>
                </div>
              </div>
               {timeError ? (<p className="text-red-800  px-4 font-medium text-xl font-oswald ">time is required *</p>) : null}

              <div className="mx-auto my-7 w-3/4 md:w-6/12">
                <button
                  className="w-full bg-[#f4f4f4] border-2 text-blue-700 font-medium rounded-lg text-base capitalize px-4 py-2"
                  onClick={handleClubs}
                >
                  continue
                </button>
              </div>                                         
            </div>
          </div>
        </div>
      ) : (
        <MatchPanel
          leaguesClubs={leaguesClubs}
          setShow={setShow}
          setLeaguesClubs={setLeaguesClubs}
        />
      )}
    </div>
      )}
  </div>
  )
};

export default Option;
