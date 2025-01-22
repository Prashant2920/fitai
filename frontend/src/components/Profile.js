// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      {profile ? (
        <div>
          <p>Welcome, User {profile.userId}</p>
          {/* Render more profile data here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
