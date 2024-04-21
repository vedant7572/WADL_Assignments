// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/users/profile/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error.response.data.message);
            }
        };

        // Check if userId is defined before making the request
        if (userId) {
            fetchUserProfile();
        }
    }, [userId]); // Include userId in the dependency array

    const handleLogout = () => {
        // Implement logout logic here, such as clearing user data from local storage or sending logout request to the server
        // For demonstration, we'll just reload the page
        window.location.reload();
    };

    // if (!user) {
    //     return <div className="bg-gray-100 min-h-screen flex justify-center items-center">Loading...</div>;
    // }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button onClick={handleLogout} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Logout</button>
            </div>
        </div>
    );
};

export default Profile;
