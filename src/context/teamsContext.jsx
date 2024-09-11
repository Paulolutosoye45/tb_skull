import axios from "axios";
import { createContext, useEffect, useState } from "react";

  const TeamContext = createContext()
  export default TeamContext;

  export const TeamProvider = ({children}) => {
    const [teamLeague, setTeamLeague]=useState([])
    const [seeClubs, setseeClubs]=useState([])
  const fetchTeams =  async () => {
    try {
          const teamResponse = await axios.post('https://1247-102-88-82-150.ngrok-free.app/api/admin/getallteams')
          const teamResult = teamResponse.data
          setTeamLeague(teamResult.teams)
    } catch (error) {
        console.error('Error fetching data:', error.response || error.message);
    }
  }

  useEffect(()=> {
    fetchTeams()
  },[])
  
  const LeagueContext = {
    teamLeague,
    seeClubs,
    setseeClubs,
  }
  
  return (
    <TeamContext.Provider value={LeagueContext}>
         {children}
    </TeamContext.Provider>
  )
}