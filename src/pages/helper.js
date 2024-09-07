export const storeUserIdInSession = (userId) => {
    sessionStorage.setItem('userId', userId);
  };

  export const retrieveUserIdFromSession = () => {
    return sessionStorage.getItem('userId');
  };