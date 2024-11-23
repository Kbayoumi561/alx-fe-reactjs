import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '', // State for username
        email: '',    // State for email
        password: '', // State for password
    });

    const handleChange = (event) => {
        const { name, value } = event.target; // Update form data dynamically
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username} // Ensure this value is explicitly present
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email} // Ensure this value is explicitly present
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password} // Ensure this value is explicitly present
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;