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
  // Retrieve user ID from session
  const userVar = retrieveUserIdFromSession();

  const fetchData = async (userIds) => {
    const userId = userVar || userIds;
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/bot/usergames`, {
        userId,
      });
     
      const result = response.data;
      setUsers(result);
      setMatchDetails(result.matchDetails || []);
    } catch (error) {
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
    matchDetails,
    setMatchDetails,
    referralCode,
    setReferralCode,
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
};
