// src/services/githubService.js
import axios from 'axios';

// Set the base URL for GitHub API requests
const BASE_URL = 'https://api.github.com/users/';

// Fetch GitHub API key from the environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;  // Use the VITE_ prefix

// API call to search for a user
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