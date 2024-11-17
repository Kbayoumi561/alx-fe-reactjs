import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Import the context

function UserDetails() {
    const userData = useContext(UserContext); // Access the context data

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;