import React, { useEffect, useState, useContext } from 'react';
import MFooter from './MFooter';
import UserContext from '../context/UserContext';

function MatchesComp(props) {  
  const  {
    matchId,
    teamA,
    teamB,
    teamDraw,
    teamACode,
    teamBCode,
    teamAName,
    teamBName,
    matchTimeStart,
    matchTimeEnd,
    pickedTeam
  } = props
  UserContext
  const [isTeamASelected, setIsTeamASelected] = useState(false);
  const [isTeamBSelected, setIsTeamBSelected] = useState(false);
  const [isTeamDrawSelected, setIsTeamDrawSelected] = useState(false);
  const [clicksId, setClicksId] = useState(0);
    
  // Handle team selection
  const handleId = (teamCol) => {
    if (teamCol === teamA ) { 
      console.log('Team A selected');
      setIsTeamASelected(true);
      setIsTeamBSelected(false);
      setIsTeamDrawSelected(false);
      setClicksId((prevClicks) => prevClicks + 1);
    } else if (teamCol === teamDraw ) {
      console.log('Draw selected');
      setIsTeamASelected(false);
      setIsTeamBSelected(false);
      setIsTeamDrawSelected(true);
      setClicksId((prevClicks) => prevClicks + 1);
    } else if (teamCol ===  teamB) {
      console.log('Team B selected');
      setIsTeamASelected(false);
      setIsTeamBSelected(true);
      setIsTeamDrawSelected(false);
      setClicksId((prevClicks) => prevClicks + 1);
    }
  };

  return (
        <div>
            <div className="m-2 rounded-xl font-mono bg-[#1a1a1a] shadow-lg" key={matchId}>
              <div className="flex items-center justify-between px-4 py-2 gap-6">
                <button
                  className={`flex-grow bg-blue-500 text-white uppercase font-extrabold py-4 text-xl rounded-2xl hover:opacity-60 transition duration-300 antialiased shadow-md ${
                    isTeamASelected ? 'bg-lime-500' : ''
                  }`}
                  onClick={() => handleId(teamA)}
                  disabled={isTeamASelected}
                >
                  {teamACode}
                </button>

                <button
                  className={`flex-grow bg-red-500 text-white uppercase font-extrabold py-4 text-xl rounded-2xl hover:opacity-60 transition duration-300 antialiased shadow-md ${
                    isTeamDrawSelected ? 'bg-lime-500' : ''
                  }`}
                  onClick={() => handleId(teamDraw)} 
                  disabled={isTeamDrawSelected}
                >
                  
                </button>
                <button
                  className={`flex-grow bg-yellow-500 text-white uppercase font-extrabold py-4 text-xl rounded-2xl hover:opacity-60 transition duration-300 antialiased shadow-md ${
                    isTeamBSelected ? 'bg-lime-500' : ''
                  }`}
                  onClick={() => handleId(teamB)}
                  disabled={isTeamBSelected}
                >
                  {teamBCode}
                </button>
              </div>
            </div>
      <MFooter pk={clicksId} />
    </div>
  );
}

export default MatchesComp;
