import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import './Profile.css'; 

export default function Profile() {
    const token = localStorage.getItem('authToken');
    const [userData, setUserData] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        if (token) {
            axios.get('http://localhost:5000/api/myInfo', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching user info:', error);
                    setError('Failed to load user information. Please try again.');
                });
        } else {
            setError('No token found. Please log in again.');
        }
    }, [token]);

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                {error ? (
                    <h2 className="error-message">{error}</h2>
                ) : (
                    <div className="profile-card">
                        
                        <h2 className="profile-title">User Profile</h2>
                        
                        <div className='profile-detail'>
                            <strong>CRN (cust ref no.):</strong> <span>{userData._id}</span>
                        </div>
                        <div className="profile-detail">
                            <strong>Name:</strong> <span>{userData.name || 'N/A'}</span>
                        </div>
                        <div className="profile-detail">
                            <strong>Email:</strong> <span>{userData.email || 'N/A'}</span>
                        </div>
                        <div className="profile-detail">
                            <strong>Mobile Number:</strong> <span>{userData.mobile || 'N/A'}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
