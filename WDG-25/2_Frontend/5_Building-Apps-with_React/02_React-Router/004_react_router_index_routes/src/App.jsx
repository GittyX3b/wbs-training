import './index.css';

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router';

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
    <nav className="space-x-4 mb-4">
      <Link to="/dashboard">Home</Link>
      <Link to="/dashboard/settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

const Home = () => <div className="p-4">Welcome to the homepage.</div>;
const DashboardHome = () => (
  <div>This is the default dashboard view (index route).</div>
);
const DashboardSettings = () => (
  <div>Here you can change your dashboard settings.</div>
);

const App = () => (
  <BrowserRouter basename="wbs-live-examples-target">
    <Navbar />
    <div className="container mx-auto mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
