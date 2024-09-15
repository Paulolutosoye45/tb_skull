import axios from "axios";
import { createContext, useEffect, useState } from "react";

const TeamContext = createContext();
export default TeamContext;

export const TeamProvider = ({ children }) => {
  const [teamLeague, setTeamLeague] = useState([]);
  const [seeClubs, setseeClubs] = useState([]);

  const fetchTeams = async () => {
    try {
      // Ensure the URL is correctly formatted
      const teamResponse = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/getallteams`);
      const teamResult = teamResponse.data;
      setTeamLeague(teamResult.teams);
    } catch (error) {
      console.error('Error fetching data:', error.response || error.message);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const LeagueContext = {
    teamLeague,
    seeClubs,
    setseeClubs,
  };

  return (
    <TeamContext.Provider value={LeagueContext}>
      {children}
    </TeamContext.Provider>
  );
};
