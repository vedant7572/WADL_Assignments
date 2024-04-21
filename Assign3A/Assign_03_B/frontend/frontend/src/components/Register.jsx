// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/api/users/register', {
                username,
                email,
                password
            });
            console.log('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error.response.data.message);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mb-4 p-2 border rounded" />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
            </form>
        </div>
    );
};

export default Register;
