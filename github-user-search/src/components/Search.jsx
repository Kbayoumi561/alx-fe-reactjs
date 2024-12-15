// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      // If the error is related to "Not Found", show a custom error message
      if (error.message === 'Not Found') {
        setError("Looks like we can't find the user");
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <h3>{userData.name || userData.login}</h3> {/* Display user name or login */}
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;