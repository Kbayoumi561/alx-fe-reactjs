import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            alert('All fields are required.');
            return;
        }
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
                    value={formData.username} // Required for controlled components
                    onChange={handleChange} // Required for controlled components
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email} // Required for controlled components
                    onChange={handleChange} // Required for controlled components
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password} // Required for controlled components
                    onChange={handleChange} // Required for controlled components
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;