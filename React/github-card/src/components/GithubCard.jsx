
const GithubCard = ({ user }) => {
  const { 
    login, 
    avatar_url, 
    followers, 
    public_repos, 
    created_at, 
    updated_at 
  } = user;
  

  return (
    <div className="card w-72 bg-gray-800 text-slate-100 rounded-lg shadow-lg p-4 flex flex-col text-center m-4">
      
      <div className="name text-lg font-bold border-b border-gray-600 pb-2 mb-3">
        {login}
      </div>

      <div className="avatar w-24 h-24 rounded-full mx-auto overflow-hidden my-3">
        <img 
          src={avatar_url} 
          alt={`${login}'s avatar`} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="follower-count my-3">
        <h3 className="text-base">
          Followers: {followers}<br />
          Public Repos: {public_repos}
        </h3>
      </div>

      <p className="text-sm text-gray-400 mt-auto">
        Created At: {new Date(created_at).toLocaleDateString()}<br />
        Updated At: {new Date(updated_at).toLocaleDateString()}<br />
        <a 
          href={`https://github.com/${login}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 mt-2 inline-block"
        >
          View Profile
        </a>
      </p>
    </div>
  );
};

export default GithubCard;