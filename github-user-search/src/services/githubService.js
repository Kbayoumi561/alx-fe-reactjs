// src/services/githubService.js
import axios from 'axios';

// Set the base URL for GitHub API requests
const BASE_URL = 'https://api.github.com/users/';

// Fetch GitHub API key from the environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;  // Use the VITE_ prefix

// Fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,  // Authentication with token
      },
    });
    return response.data;   // Return the user data
  } catch (error) {
    throw new Error(error.response.data.message);  // Throw an error with the error message
  }
};

// Optional: You can also keep the searchUser function if you need it for other purposes
export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,  // Authentication with token
      },
    });
    return response.data;   // Return the user data
  } catch (error) {
    throw new Error(error.response.data.message);  // Throw an error with the error message
  }
};