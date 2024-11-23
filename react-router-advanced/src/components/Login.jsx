import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <p>Please log in to access the profile page.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default Login;