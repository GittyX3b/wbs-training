import './index.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white">
    <div className="space-x-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/about" className="hover:underline">
        About
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
    </div>
  </nav>
);

const Home = () => <div className="p-4">This is the Home page.</div>;
const About = () => <div className="p-4">This is the About page.</div>;
const Contact = () => <div className="p-4">This is the Contact page.</div>;

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;
