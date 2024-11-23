import { Outlet, Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <nav>
                {/* Links for nested routes */}
                <Link to="details">Details</Link> | <Link to="settings">Settings</Link> | <Link to="/profile/1">User 1</Link> | <Link to="/profile/2">User 2</Link> | <Link to="/profile/3">User 3</Link>
            </nav>
            {/* Nested routes will render here */}
            <Outlet />
        </div>
    );
};

export default Profile;