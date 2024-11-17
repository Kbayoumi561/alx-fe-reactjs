import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserContext } from './components/UserContext'; // Import UserContext

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // Context value

    return (
        // Use UserContext.Provider directly and pass the value
        <UserContext.Provider value={userData}>
            <ProfilePage />
        </UserContext.Provider>
    );
}

export default App;