import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './components/UserContext'; // Adjusted path for UserContext

function App() {
    return (
        // Wrap the entire application (or necessary parts) with UserProvider
        <UserProvider>
            <ProfilePage />
        </UserProvider>
    );
}

export default App;