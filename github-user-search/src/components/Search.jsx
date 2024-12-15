// src/components/Search.jsx
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setUserData([]);
    setPage(1); // Reset to first page

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (error) {
      if (error.message === 'Not Found') {
        setError("Looks like we cant find the user");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle loading more users
  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const nextPage = page + 1;
      const data = await fetchUserData(username, location, minRepos, nextPage);
      setUserData((prevData) => [...prevData, ...data]);
      setPage(nextPage);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div>
          {userData.map((user) => (
            <div key={user.id} className="my-4">
              <img src={user.avatar_url} alt={user.login} width={100} />
              <h3>{user.login}</h3>
              <p>{user.location || 'Location not available'}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                Visit Profile
              </a>
            </div>
          ))}
          <button
            onClick={handleLoadMore}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;