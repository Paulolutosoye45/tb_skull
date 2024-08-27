// UserContext.js
import { createContext, useState, useEffect } from 'react';

// Create the UserContext
const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [matchDetails, setMatchDetails] = useState([]);

  // Fetch data on mount and populate context
  // https://6168e618-1fcc-4496-9e38-d30f10cb37c4.mock.pstmn.io/matches
  useEffect(() => {
    fetch("http://localhost:1200/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setUsers(result);
        if (result.length > 0) {
          setMatchDetails(result[0].matchDetails || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Passing down context data
  const contextData = {
    users,
    setUsers,
    matchDetails,
    setMatchDetails,
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
};
