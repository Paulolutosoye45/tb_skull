import { useEffect, useMemo, useState } from "react";
import Flexwrapper from "./Flexwrapper";


const MatchItem = ({ match, pastMatchTimes, handleChange, handleRemove }) => {
    const [selectedItem, setselectedItem] = useState(null)



    const handleSelection = (id) => {
        if (id === selectedItem) {
            setselectedItem(null)
            handleRemove(match.id)
            return;
        }
        setselectedItem(id)
        handleChange({...match, selectedMatch:id})
    };


    const isSelected = (id) => {
        return id === selectedItem
    };

    useEffect(() => {
        setselectedItem(match.selectedMatch)
    }, [])

    return (
        <div
            key={match.id}
            className="m-2 rounded-xl p-4 font-Roboto bg-[#213045] shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)]"
        >
            <div className="flex items-center justify-between px-4 py-2  gap-6">
                <button
                    disabled={pastMatchTimes[match.id]}
                    onClick={() => handleSelection(match.teamA)}
                    className={`flex-grow text-white py-1 px-2 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${isSelected(match.teamA)
                        ? 'bg-[#32CD32] border-none'
                        : ''
                        }
            ${pastMatchTimes[match.id] ? 'border-4 border-red-700' : ''}`}
                >
                    {match.teamACode}
                </button>

                <button
                    disabled={pastMatchTimes[match.id]}
                    onClick={() => handleSelection(match.teamDrawId)}
                    className={`flex-grow text-white py-1 px-2 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${isSelected(match.teamDrawId)
                        ? 'bg-[#32CD32] border-none'
                        : ''
                        }
            ${pastMatchTimes[match.id] ? 'border-4 border-red-700' : ''}`}
                >
                    DRW
                </button>

                <button
                    disabled={pastMatchTimes[match.id]}
                    onClick={() => handleSelection(match.teamB)}
                    className={`flex-grow text-white py-1 px-2 rounded-3xl border-2 shadow-[0_10px_20px_rgba(0,0,0,0.3),0_6px_6px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out ${isSelected(match.teamB)
                        ? 'bg-[#32CD32] border-none'
                        : ''
                        }
            ${pastMatchTimes[match.id] ? 'border-4 border-red-700' : ''}`}
                >
                    {match.teamBCode}
                </button>

            </div>
            <Flexwrapper className="text-white text-xs  text-center  font-Inconsolata px-7 truncate " >
          <p className='truncate'>{match.teamAName} </p>
          <p className='truncate text-yellow-600 text-lg'>Vs</p>
          <p  className='truncate'>{match.teamBName}</p>
        </Flexwrapper>
        </div>
    )
}

export default MatchItem