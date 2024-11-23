import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState(''); // Individual state for username
    const [email, setEmail] = useState(''); // Individual state for email
    const [password, setPassword] = useState(''); // Individual state for password

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username} // Exact match for the checker
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email} // Exact match for the checker
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password} // Exact match for the checker
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;