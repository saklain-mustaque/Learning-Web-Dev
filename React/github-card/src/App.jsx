import { useState, useEffect } from 'react';
import GithubCard from './components/GithubCard';

const App = () => {
  const [initialUsers, setInitialUsers] = useState([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [initialError, setInitialError] = useState(null);

  const [searchedUser, setSearchedUser] = useState(null); // Will hold a single user object or null
  const [usernameInput, setUsernameInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  
  const initialUsernames = ['IbrahimBaAta', 'saklain-mustaque', 'tarikh-mohsin'];

  useEffect(() => {
    const fetchInitialUsers = async () => {
      try {
        const userPromises = initialUsernames.map(username =>
          fetch(`https://api.github.com/users/${username}`).then(res => res.json())
        );
        const initialUsersData = await Promise.all(userPromises);
        setInitialUsers(initialUsersData);
      } catch (err) {
        setInitialError("Could not load initial profiles.");
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchInitialUsers();
  }, [initialUsernames]);

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!usernameInput.trim()) {
      setSearchError("Please enter a GitHub username.");
      setSearchedUser(null); 
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchedUser(null); 

    try {
      const response = await fetch(`https://api.github.com/users/${usernameInput.trim()}`);
      
      if (response.status === 404) throw new Error("User not found.");
      if (!response.ok) throw new Error("An error occurred while fetching the data.");

      const newUser = await response.json();
      setSearchedUser(newUser); 
      setUsernameInput(''); 

    } catch (err) {
      setSearchError(err.message);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        GitHub Profile Viewer
      </h1>

      <h2 className="text-3xl font-bold mb-4 text-gray-700">Examples</h2>
      {isInitialLoading && <p className="text-xl">Loading examples...</p>}
      {initialError && <p className="text-xl text-red-500">{initialError}</p>}
      <div className="flex flex-wrap justify-center w-full">
        {initialUsers.map(user => (
          <GithubCard key={user.id} user={user} />
        ))}
      </div>

      <hr className="w-full max-w-4xl my-8 border-t-2 border-gray-300" />

      <h2 className="text-3xl font-bold mb-4 text-gray-700">Search for a User</h2>
      <form onSubmit={handleSearch} className="w-full max-w-sm mb-4">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="bg-transparent w-full text-gray-700 mr-3 py-1 px-2"
            type="text"
            placeholder="e.g., torvalds"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <button
            className="cursor-pointer flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            type="submit"
            disabled={isSearching}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      <div className="mt-4 h-96 flex items-center justify-center">
        {isSearching && <p className="text-xl">Searching...</p>}
        {searchError && <p className="text-xl text-red-500">{searchError}</p>}
        {searchedUser && <GithubCard user={searchedUser} />}
      </div>
    </div>
  );
};

export default App;