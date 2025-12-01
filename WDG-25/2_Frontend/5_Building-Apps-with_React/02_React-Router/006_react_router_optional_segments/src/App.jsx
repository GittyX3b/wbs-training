import './index.css';

import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <span className="text-xl font-bold">MyApp</span>
      <div className="space-x-4">
        <Link to="/categories" className="hover:underline">
          Default
        </Link>
        <Link to="/en/categories" className="hover:underline">
          EN
        </Link>
        <Link to="/es/categories" className="hover:underline">
          ES
        </Link>
        <Link to="/de/categories" className="hover:underline">
          DE
        </Link>
      </div>
    </div>
  </nav>
);

const Categories = () => {
  const { lang } = useParams();

  const content = lang
    ? categoriesByLanguage[lang] || {
        title: 'Unsupported Language',
        categories: [`No categories available for: ${lang}`],
      }
    : defaultContent;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {content.categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<div>Welcome!</div>} />
      <Route path=":lang?/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;

const categoriesByLanguage = {
  en: {
    title: 'Product Categories',
    categories: ['Electronics', 'Books', 'Clothing', 'Home & Kitchen'],
  },
  es: {
    title: 'Categorías de Productos',
    categories: ['Electrónica', 'Libros', 'Ropa', 'Hogar y Cocina'],
  },
  de: {
    title: 'Produktkategorien',
    categories: ['Elektronik', 'Bücher', 'Kleidung', 'Haushalt & Küche'],
  },
};

const defaultContent = {
  title: 'Default Product Categories',
  categories: ['Electronics', 'Books', 'Clothing', 'Sports'],
};
