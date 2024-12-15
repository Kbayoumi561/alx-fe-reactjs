// src/services/githubService.js
import axios from 'axios';

// Set the base URL for GitHub API requests
const BASE_URL = 'https://api.github.com/search/users';

// Fetch GitHub API key from the environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;  // Use the VITE_ prefix

// Fetch user data based on advanced search criteria
export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `${username}`;  // Start with the username

    // Add location to the search query if provided
    if (location) {
      query += ` location:${location}`;
    }

    // Add minimum repository count to the search query if provided
    if (minRepos > 0) {
      query += ` repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}?q=${query}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,  // Authentication with token
      },
    });

    return response.data.items;   // Return the list of matching users
  } catch (error) {
    throw new Error(error.response.data.message);  // Throw an error with the error message
  }
};