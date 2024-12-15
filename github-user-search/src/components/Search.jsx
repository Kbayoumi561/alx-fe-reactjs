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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading/Error Section */}
      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* User Data Display Section */}
      {userData && !loading && !error && (
        <div className="mt-6">
          {userData.map((user) => (
            <div key={user.id} className="my-6 p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{user.login}</h3>
                  <p className="text-gray-600">{user.location || 'Location not available'}</p>
                  <p className="text-gray-500">Repositories: {user.public_repos}</p>
                </div>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Visit Profile
              </a>
            </div>
          ))}
          <div className="mt-6">
            <button
              onClick={handleLoadMore}
              className="w-full py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;