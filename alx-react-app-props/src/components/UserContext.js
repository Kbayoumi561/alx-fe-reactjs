import React, { createContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a Provider component
const UserProvider = ({ children }) => {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};

// Export both UserContext and UserProvider
export { UserContext, UserProvider };
export default UserContext; // Add this default export