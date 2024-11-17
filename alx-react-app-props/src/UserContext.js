import React, { createContext } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Provide the UserContext to the app
export const UserProvider = ({ children }) => {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};