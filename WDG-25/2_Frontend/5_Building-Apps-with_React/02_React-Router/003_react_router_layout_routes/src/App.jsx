import './index.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from 'react-router';

// ----- Layouts -----
const MainLayout = () => (
  <>
    <nav className="bg-gray-800 text-white p-4">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link to="/about" className="mr-4">
        About
      </Link>
      <Link to="/admin">Admin</Link>
    </nav>
    <div className="p-4">
      <Outlet />
    </div>
  </>
);

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <aside className="w-48 bg-blue-100 p-4">
        <h2 className="text-lg font-bold mb-4">Admin Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin" className="block text-blue-800 hover:underline">
            Dashboard
          </Link>
          <Link
            to="/admin/settings"
            className="block text-blue-800 hover:underline"
          >
            Settings
          </Link>
        </nav>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 text-sm text-blue-600 hover:underline"
        >
          ← Go Back
        </button>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

// ----- Pages -----
const Home = () => <div>Welcome to the site!</div>;
const About = () => <div>About us</div>;
const Dashboard = () => <div>Admin Dashboard</div>;
const Settings = () => <div>Admin Settings</div>;

// ----- App -----
const App = () => (
  <BrowserRouter basename="wbs-live-examples-target">
    <Routes>
      {/* Main layout for public pages */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Admin layout for admin-specific pages */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
