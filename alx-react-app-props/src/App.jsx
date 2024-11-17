import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './context/UserContext'; // Import UserProvider

function App() {
    return (
        <UserProvider>
            <ProfilePage />
        </UserProvider>
    );
}

export default App;