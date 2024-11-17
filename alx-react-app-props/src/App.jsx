import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './components/UserContext'; // Adjusted import path

function App() {
    return (
        // Wrap the ProfilePage inside the UserProvider
        <UserProvider>
            <ProfilePage />
        </UserProvider>
    );
}

export default App;