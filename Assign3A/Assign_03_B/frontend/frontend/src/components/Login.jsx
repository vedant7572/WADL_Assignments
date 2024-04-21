// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Profile from './Profile'; // Import the Profile component

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/users/login', {
                email,
                password
            });
            console.log('Logged in successfully. Token:', response.data.token);
            setLoggedIn(true); // Set loggedIn state to true upon successful login
        } catch (error) {
            console.error('Error logging in:', error.response.data.message);
        }
    };

    // If user is logged in, redirect to Profile component
    if (loggedIn) {
        return <Profile />;
    }

    // If user is not logged in, render login form
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
            </form>
        </div>
    );
};

export default Login;
