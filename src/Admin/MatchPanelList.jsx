import React, { useEffect, useState } from "react";

const TeamAComponent = ({ clubs, setAid }) => {
  useEffect(() => {
    setAid(clubs.id);
  }, [clubs, setAid]);

  return <p className="font-medium">{clubs.cts}</p>;
};

const TeamBComponent = ({ clubs, setBid }) => {
  useEffect(() => {
    setBid(clubs.id);
  }, [clubs, setBid]);

  return <p className="font-medium">{clubs.cts}</p>;
};


const MatchPanelList = ({ item, handleSubmit, filterOutMatch, filterLeaguesClubsById }) => {


  const [AId, setAid] = useState(null);
  const [BId, setBid] = useState(null);
  const [newMatch, setNewMatch] = useState(null);

  useEffect(() => {
    if (AId && BId) {


      const match = {
        idT: crypto.randomUUID(),
        Hour: item.hrs,
        Minutes: item.min,
        TeamA: AId,
        TeamB: BId,
      };


      setNewMatch(match);
      handleSubmit(match);
    }


  }, [AId, BId, item.hrs, item.min]);


   const handlerRemove =  (itemId) => {

    filterLeaguesClubsById(itemId.idT)

    filterOutMatch(newMatch)
   }


  return (
    <div className="bg-gray-800 text-white rounded-md shadow-lg p-4">
      <p>
        {item.hrs}:{item.min}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {item.teamA.map((clubs) => (
            <TeamAComponent clubs={clubs} setAid={setAid} key={clubs.id} />
          ))}
        </div>

        <div className="text-2xl font-medium text-yellow-500 mx-4">vs</div>

        <div className="flex flex-col">
          {item.teamB.map((clubs) => (
            <TeamBComponent clubs={clubs} setBid={setBid} key={clubs.id} />
          ))}
        </div>

        <div
          className="text-2xl font-medium text-red-800 mx-4 cursor-pointer"
          onClick={() => handlerRemove(item)}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default MatchPanelList;
