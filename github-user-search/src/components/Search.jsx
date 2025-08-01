import { useState } from "react";
import { advancedSearchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError("");
    setResults([]);

    const data = await advancedSearchUsers({ username, location, minRepos });

    if (data && data.items?.length > 0) {
      setResults(data.items);
    } else {
      setError("Looks like we cant find matching users");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">
          Advanced GitHub User Search
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Search
        </button>
      </form>

      
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      
      {error && <p className="mt-4 text-red-500">{error}</p>}

      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mb-2"
            />
            <h3 className="text-lg font-bold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-1"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
