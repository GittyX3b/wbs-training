import './index.css';

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          MyApp
        </Link>
        <div className="flex space-x-4">
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
      </div>
    </nav>
  );
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Outlet />
      </div>
    </>
  );
};

const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
const Contact = () => {
  return <div>Contact</div>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
