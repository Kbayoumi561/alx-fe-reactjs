import React, { createContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // Data to be shared

    return (
        <UserContext.Provider value={userData}>
            {children} {/* Render child components */}
        </UserContext.Provider>
    );
};

// Export the UserContext for use in other components
export { UserContext };
export default UserContext;
