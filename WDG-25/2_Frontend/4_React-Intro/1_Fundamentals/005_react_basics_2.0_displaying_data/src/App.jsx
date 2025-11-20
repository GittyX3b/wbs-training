import './index.css';

const user = {
  name: 'Max Mustermann II',
  avatar:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=160',
  email: 'ava@example.com',
  location: 'Berlin, Germany',
  bio: 'Full-stack developer, coffee enthusiast, and amateur photographer.',
  tags: ['React', 'Node.js', 'Tailwind CSS'],
  followers: 840,
  following: 176,
};

/* -----------------------------------------
 * Presentational pieces
 * ---------------------------------------*/
const Avatar = ({ src, name }) => (
  <img
    src={src}
    alt={`${name}'s avatar`}
    className="w-32 h-32 rounded-full object-cover border-4 border-yellow-600"
  />
);

const Tag = ({ label }) => (
  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
    {label}
  </span>
);

const Stats = ({ followers, following }) => (
  <p className="text-gray-700">
    <strong>{followers}</strong> followers · <strong>{following}</strong>{' '}
    following
  </p>
);

const UserCard = ({ user }) => (
  <article className="max-w-md mx-auto p-6 bg-white rounded-lg shadow space-y-4">
    <div className="flex flex-col items-center space-y-3">
      <Avatar src={user.avatar} name={user.name} />
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.location}</p>
    </div>

    <p className="text-gray-800">{user.bio}</p>

    <div className="flex flex-wrap gap-2">
      {user.tags.map((tag) => (
        <Tag key={tag} label={tag} />
      ))}
    </div>

    <Stats followers={user.followers} following={user.following} />

    <button className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 text-brown-900 font-semibold rounded">
      Follow
    </button>
  </article>
);

/* -----------------------------------------
 * Root component renders the card
 * ---------------------------------------*/
const App = () => (
  <main className="p-8 font-sans bg-gray-50 min-h-screen flex items-center justify-center">
    <UserCard user={user} />
  </main>
);

export default App;
