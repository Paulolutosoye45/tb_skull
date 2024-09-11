import { useState, useEffect, useContext, useMemo } from 'react';
import MatchesComp from './MatchesComp';
import UserContext from '../context/UserContext';
import MFooter from './MFooter';
import Flexwrapper from './Flexwrapper';

const MatchList = () => {
  const { matchDetails } = useContext(UserContext);
  const [selections, setSelections] = useState([]);
  const [selectionCount, setSelectionCount] = useState(0);
  const [totalPicks, setTotalPicks] = useState(0);
  const [picked, setPicked]=useState(false)
  const handleSelection = (id, team, isSelectedmatch) => {
    let updatedSelections;
    if (isSelectedmatch === team) {
      updatedSelections = selections.filter((selection) => selection.id !== id);
  
      const updatedMatchDetails = matchDetails.map(match => 
        match.id === id ? { ...match, selectedMatch: null } : match
      );
  
      console.log('Filtered out the selected match', updatedMatchDetails);
    } else {
      const existingSelectionIndex = selections.findIndex(
        (selection) => selection.id === id
      );

      if (existingSelectionIndex !== -1) {
        const selectedTeam = selections[existingSelectionIndex].selectedMatch;
  
        if (selectedTeam === team) {
          // If the same team is already selected, remove the selection
          updatedSelections = selections.filter((selection) => selection.id !== id);
        } else {
          // Otherwise, update the selection with the new team
          updatedSelections = selections.map((selection) =>
            selection.id === id ? { ...selection, selectedMatch: team } : selection
          );
        }
      } else {
        // If no selection exists, add the new selection
        updatedSelections = [
          ...selections,
          { id, selectedMatch: team },
        ];
      }
    }
  
    // Update the state with the new selections
    setSelections(updatedSelections);
  };
  
  
  const isSelected = (id, team, isSelectedmatch) => {
    let existingSelection = selections.find((selection) => selection.id === id);
     if (isSelectedmatch  === team ) {
      return  isSelectedmatch === team;
     }

      return existingSelection?.selectedMatch === team;
  };
  

 const handlePicked = (team, selectedMatch) => {
  // Check if selectedMatch has a value
  if (team === selectedMatch) {
    return true; // Return true if selectedMatch exists
  } else {
    return false;
  }
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
  
  useEffect(() => {
    setSelectionCount(selections.length);
    setTotalPicks(selections.length);
  }, [selections, setSelectionCount, setTotalPicks]);
  

  return (
    <div className='pb-20'>
  {matchDetails.length > 0 ? (
    matchDetails.map((match) => (
      <div
        key={match.id}
        className="m-2 rounded-xl p-4 font-Roboto bg-[#213045] shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)]"
      >
        {/* Match Name
        <Flexwrapper className="text-white text-sm font-Roboto text-center px-7 pt-2" >
          <p className='truncate'>{match.teamAName}</p>
          <p  className='truncate'>{match.teamBName}</p>
        </Flexwrapper> */}
        
        <div className="flex items-center justify-between px-4 py-2 mb-5 gap-6">
          <button
            disabled={pastMatchTimes[match.id]}
            onClick={() => handleSelection(match.id, match.teamA, match.selectedMatch)}
            className={`flex-grow text-white py-1 px-2 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${
              isSelected(match.id, match.teamA, match.selectedMatch)
                ? 'bg-[#32CD32] border-none'
                : ''
            } 
            ${pastMatchTimes[match.id] ? 'border-4 border-red-700' : ''}`}
          >
            {match.teamACode}
          </button>
          
          <button
            disabled={pastMatchTimes[match.id]}
            onClick={() => handleSelection(match.id, match.teamDrawId, match.selectedMatch)}
            className={`flex-grow text-white py-1 px-2 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${
              isSelected(match.id, match.teamDrawId, match.selectedMatch)
                ? 'bg-[#32CD32] border-none'
                : ''
            } 
            ${pastMatchTimes[match.id] ? 'border-4 border-red-700' : ''}`}
          >
            DRW
          </button>

          <button
            disabled={pastMatchTimes[match.id]}
            onClick={() => handleSelection(match.id, match.teamB, match.selectedMatch)}
            className={`flex-grow text-white py-1 px-2 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${
              isSelected(match.id, match.teamB, match.selectedMatch)
                ? 'bg-[#32CD32] border-none'
                : ''
            }
            ${pastMatchTimes[match.id] ? 'border-4 border-red-700' : ''}`}
          >
            {match.teamBCode}
          </button>
        
        </div>
        
        {selectionCount > 0 && (
          <MFooter
            selections={selections}
            selectionCount={selectionCount}
            totalPicks={totalPicks}
          />
        )}
      </div>
    ))
  ) : (
    <p className="text-white leading-6 text-lg p-2 font-josefin font-bold">No match available</p>
  )}
</div>

  );
};

export default MatchList;
