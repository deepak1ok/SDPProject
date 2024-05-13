import React, { createContext, useState ,useEffect} from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
    // Define the state for user data
    const [user,setUser]=useState(localStorage.getItem("token"));

//     useEffect(() => {

//     const user=localStorage.getItem("token");

//     setUser(user);
//   }, []);

    // Define any other functions or state variables related to user context

    // Provide the user context value to the children components
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};