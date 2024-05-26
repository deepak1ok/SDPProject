// import React, { createContext, useState ,useEffect} from 'react';

// Create the UserContext
// export const UserContext = createContext();

// Create the UserProvider component
// export const UserProvider = ({ children }) => {
// Define the state for user data
// const [user,setUser]=useState(JSON.parse(localStorage.getItem("token")));

//     useEffect(() => {

//     const user=localStorage.getItem("token");

//     setUser(user);
//   }, []);

// Define any other functions or state variables related to user context

// Provide the user context value to the children components
//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

import React, { createContext, useState, useEffect } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  // Define the state for user data
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = localStorage.getItem("token");

    // Check if userData is not null or undefined
    if (userData !== null && userData !== undefined) {
      try {
        // Parse the user data and set it in state
        setUser(JSON.parse(userData));
      } catch (error) {
        // Handle parsing error (e.g., invalid JSON)
        console.error("Error parsing user data:", error);
        // Reset user state
        setUser(null);
      }
    } else {
      // Handle case where userData is null or undefined
      console.error("User data is null or undefined");
      // Reset user state
      setUser(null);
    }
  }, []);

  // Provide the user context value to the children components
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
