import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { id } = useParams(); // Extract dynamic "id" from the URL

    return (
        <div>
            <h1>User Profile</h1>
            <p>Welcome, User {id}!</p>
        </div>
    );
};

export default UserProfile;