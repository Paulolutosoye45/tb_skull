// MatchList.js
import { useContext, useEffect, useState } from 'react';
import MatchesComp from './MatchesComp';
import UserContext from '../context/UserContext';
import MFooter from './MFooter';



const MatchList = () => {
const { matchDetails } = useContext(UserContext);
const [selections, setSelections] = useState([]);
const [selectionCount, setSelectionCount] = useState(0);
const [totalPicks, setTotalPicks] = useState(0);

const handleSelection = (matchId, team) => {
  const existingSelectionIndex = selections.findIndex(
    (selection) => selection.matchId === matchId
  );
  let updatedSelections;
  if (existingSelectionIndex !== -1) {
    const selectedTeam = selections[existingSelectionIndex].pickedTeam;
    if (selectedTeam === team) {
      updatedSelections = selections.filter(
        (selection) => selection.matchId !== matchId
      );
    } else {
      updatedSelections = selections.map((selection, index) =>
        index === existingSelectionIndex
          ? { ...selection, pickedTeam: team }
          : selection
      );
    }
  } else {
    updatedSelections = [
      ...selections,
      { matchId, pickedTeam: team },
    ];
  }

  setSelections(updatedSelections);
};

const isSelected = (matchId, team) => {
  const selectedMatch = selections.find(
    (selection) => selection.matchId === matchId
  );
  return selectedMatch?.pickedTeam === team;
};


useEffect(() => {
  setSelectionCount(selections.length);

  // Calculate the total number of picks (count each button click)
  const picks = selections.reduce((acc, selection) => acc + 1, 0);
  setTotalPicks(picks);
}, [selections]);

return (
  <div>
    {matchDetails.map((match) => (
      <div key={match.matchId} className="m-2 rounded-xl font-mono bg-[#213045] shadow-lg">
        <div className="flex items-center justify-between px-4 py-2 gap-6">
          <button
             onClick={() => handleSelection(match.matchId, match.teamA)}
             className={`flex-grow bg-[#213045] text-white font-bold py-3 px-6 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)]  transition-all duration-300 ease-in-out ${
               isSelected(match.matchId, match.teamA)
                 ? 'bg-[#32CD32] border-none'
                 : ''
             }`}
          >
            {match.teamACode}
          </button>
          <button
            onClick={() => handleSelection(match.matchId, match.teamDraw)}
            className={`flex-grow bg-[#213045] text-white font-bold py-3 px-6 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)]  transition-all duration-300 ease-in-out ${
              isSelected(match.matchId, match.teamDraw)
                ? 'bg-[#32CD32] border-none'
                : ''
            }`}
          >
            Draw
          </button>
          <button
            onClick={() => handleSelection(match.matchId, match.teamB)}
            className={`flex-grow bg-[#213045] text-white font-bold py-3 px-6 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)]  transition-all duration-300 ease-in-out ${
              isSelected(match.matchId, match.teamB)
                ? 'bg-[#32CD32] border-none'
                : ''
            }`}
          >
            {match.teamBCode}
          </button>
        </div>
        {selectionCount > 0 &&
         <MFooter
            selections={selections} 
            selectionCount={selectionCount} 
            totalPicks={totalPicks} 
           />}
      </div>
     ))}

 </div>
);
}
export default MatchList;
