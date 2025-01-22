// src/api.js
import axios from 'axios';

// Base API URL (you can change this to your backend API URL)
const API_URL = 'http://localhost:5000/api/';

// Register a new user
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);
  return response.data;
};

// Login a user
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  return response.data;
};

// Get user profile (protected route)
export const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
