import { useState, useEffect, useContext, useMemo } from 'react';
import MatchesComp from './MatchesComp';
import UserContext from '../context/UserContext';
import MFooter from './MFooter';
import Flexwrapper from './Flexwrapper';
import MatchItem from './MatchItem';

const MatchList = () => {
  const { matchDetails } = useContext(UserContext);
  const [selections, setSelections] = useState([])
  const [Loading, setloading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setloading(false)
      // selections
    }, 2000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(interval);
  }, []);
  const handleChange = (selection) => {
    const result =  selections.find((item) => item.id === selection.id )
    if(!result){
      setSelections((state) => [...state, selection])
      return;
    }
     
        setSelections((state) => state.map((item) => {
           if (item.id === selection.id) {
            return selection;
           }

          return item
        }))
  }

  const handleRemove = (id) => {
     setSelections((state) => state.filter((item) => item.id !== id))
  }
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

  return (
      <div>
       {Loading ? (
            <div className="flex justify-center items-center"><span className="loader flex"></span></div>
      ): (
    <div className='pb-24'>
      {matchDetails.length > 0 ? (
        matchDetails.map((match) => (
          <MatchItem match={match} pastMatchTimes={pastMatchTimes} handleChange={handleChange} handleRemove={handleRemove} key={match.id} />
        ))
      ) : (
        <p className="text-white leading-6 text-lg p-2 font-josefin font-bold">No match available</p>
      )}

      {selections.length > 0 ?  (
          <MFooter
            selections={selections}
            setSelections={setSelections}
          />
        ) : null}
    </div>)}
   </div>
  );
};

export default MatchList;