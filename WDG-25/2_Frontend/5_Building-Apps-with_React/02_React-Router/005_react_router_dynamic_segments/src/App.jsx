import './index.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  useParams,
} from 'react-router';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        MyApp
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/users" className="hover:underline">
          Users
        </Link>
      </div>
    </div>
  </nav>
);

const MainLayout = () => (
  <>
    <Navbar />
    <div className="container mx-auto mt-4">
      <Outlet />
    </div>
  </>
);

const Home = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-2">Welcome to the homepage</h2>
    <p>This is a simple demo of dynamic segments in React Router.</p>
  </div>
);

const Users = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.slug}>
            <Link
              to={`/users/${user.slug}`}
              className="text-blue-600 hover:underline"
            >
              View {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.slug === slug);

  return (
    <div>
      {user ? (
        <>
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-700 mb-1">
            <strong>Role:</strong> {user.role}
          </p>
          <p className="text-gray-600 mb-4">{user.bio}</p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">User Not Found</h2>
          <p>
            No user matched the slug: <strong>{slug}</strong>
          </p>
        </>
      )}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 text-sm text-blue-600 hover:underline"
      >
        ← Go Back
      </button>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Outlet />}>
          <Route index element={<Users />} />
          <Route path=":slug" element={<UserDetail />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

export const users = [
  {
    slug: 'ada-lovelace',
    name: 'Ada Lovelace',
    role: 'Mathematician & Programmer',
    bio: 'Known for writing the first algorithm intended to be executed by a machine. Considered the first computer programmer.',
  },
  {
    slug: 'alan-turing',
    name: 'Alan Turing',
    role: 'Computer Scientist',
    bio: 'Father of theoretical computer science and artificial intelligence. Developed the concept of the Turing machine.',
  },
  {
    slug: 'grace-hopper',
    name: 'Grace Hopper',
    role: 'Computer Programmer & Rear Admiral',
    bio: "Pioneer of computer programming. Developed the first compiler and was instrumental in COBOL's creation.",
  },
  {
    slug: 'linus-torvalds',
    name: 'Linus Torvalds',
    role: 'Software Engineer',
    bio: 'Creator of the Linux kernel and Git version control system.',
  },
  {
    slug: 'margaret-hamilton',
    name: 'Margaret Hamilton',
    role: 'Software Engineer',
    bio: 'Led the software engineering team for NASA’s Apollo missions. Coined the term "software engineering."',
  },
];
