import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { retrieveUserIdFromSession, storeUserIdInSession } from '../pages/helper';

// Create the UserContext
const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [matchDetails, setMatchDetails] = useState([]);
  const [referralCode, setReferralCode] = useState(null);
  const [arrLeaderBoard, setArrLeaderBoard]= useState([])
  const [arrMonthly, setArrMonthly]=useState([])
  // const [isLoading, setIsLoading]=useState(false)
  // Retrieve user ID from session
  const userVar = retrieveUserIdFromSession();

  const fetchData = async (userIds) => {
    // setIsLoading(true)
    const userId = userVar || userIds;
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/bot/usergames`, {
        userId,
      });
     
      const result = response.data;
      setUsers(result);
      setMatchDetails(result.matchDetails || []);
      setArrLeaderBoard(result.leaderboards || []);
      setArrMonthly(result.monthlyLeaderboards || []);
      // setIsLoading(false)
    } catch (error) {
      // setIsLoading(false)
      console.error('Error fetching data:', error.response || error.message);
    }
  };

  // Extract userId from the URL and session
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userIdParam = urlParams.get('userid');

    if (userIdParam) {
      setReferralCode(userIdParam);
      storeUserIdInSession(userIdParam);
    } else if (userVar) {
      setReferralCode(userVar);
    }
  }, [userVar]);

  // Fetch data when referralCode changes
  useEffect(() => {
    if (referralCode) {
      fetchData(referralCode);
    }
  }, [referralCode]);

  // Passing down context data
  const contextData = {
    users,
    setUsers,
    // isLoading,
    matchDetails,
    setMatchDetails,
    referralCode,
    setReferralCode,
    arrLeaderBoard,
    arrMonthly
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
};
