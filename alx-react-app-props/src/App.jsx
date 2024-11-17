import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './context/UserContext'; // Import UserProvider

function App() {
    return (
        // Wrap the ProfilePage inside the UserProvider
        <UserProvider>
            <ProfilePage />
        </UserProvider>
    );
}

export default App;