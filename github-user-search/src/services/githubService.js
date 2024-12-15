import axios from 'axios';

// Set the base URL for GitHub API requests
const BASE_URL = 'https://api.github.com/search/users?q';

// Fetch GitHub API key from the environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;  // Use the VITE_ prefix

// Fetch user data based on advanced search criteria
export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    // Start building the query string
    let query = `${username}`;  // Start with the username

    // Add location to the search query if provided
    if (location) {
      query += ` location:${location}`;
    }

    // Add minimum repository count to the search query if provided
    if (minRepos > 0) {
      query += ` repos:>${minRepos}`;
    }

    // Add pagination support (GitHub API supports `page` and `per_page`)
    const perPage = 30;  // Adjust per page number if needed
    const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,  // Authentication with token
      },
    });

    // Return the list of matching users
    return response.data.items;
  } catch (error) {
    // Throw an error with the error message or fallback message
    throw new Error(error.response ? error.response.data.message : "An error occurred");
  }
};
