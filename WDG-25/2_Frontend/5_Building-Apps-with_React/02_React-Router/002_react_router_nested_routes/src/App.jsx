import './index.css';

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        MyApp
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
      </div>
    </div>
  </nav>
);

const DashboardLayout = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
    <div className="flex space-x-4 mb-4">
      <Link to="/dashboard" className="text-blue-600 hover:underline">
        Overview
      </Link>
      <Link to="/dashboard/settings" className="text-blue-600 hover:underline">
        Settings
      </Link>
    </div>
    <Outlet />
  </div>
);

const Home = () => (
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-4">Welcome to my app</h2>
  </div>
);
const DashboardOverview = () => <div>Dashboard Overview</div>;
const DashboardSettings = () => <div>Dashboard Settings</div>;

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container mx-auto mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
