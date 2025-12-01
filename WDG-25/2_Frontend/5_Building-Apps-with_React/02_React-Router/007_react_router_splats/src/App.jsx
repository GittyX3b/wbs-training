import './index.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white">
    <Link to="/" className="hover:underline mr-4">
      Home
    </Link>
    <Link to="/unknown/path" className="hover:underline">
      Broken Link
    </Link>
  </nav>
);

const Home = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">Welcome to MyApp</h2>
    <p>This is the homepage. Try visiting a route that doesn't exist.</p>
  </div>
);

const NotFound = () => (
  <div className="p-4 text-center">
    <img
      src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
      alt="404 Not Found"
      className="mx-auto mb-4 max-w-sm"
    />
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
