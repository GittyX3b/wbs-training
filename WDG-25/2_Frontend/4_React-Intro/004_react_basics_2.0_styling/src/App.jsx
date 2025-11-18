import './index.css';

const Logo = () => (
  <span className="text-2xl font-bold tracking-tight text-brown-800">
    <span className="text-yellow-600">☕</span> Roast&nbsp;Lab
  </span>
);

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
    <Logo />

    <nav>
      <ul className="flex space-x-6 text-brown-700 font-medium">
        <li className="hover:text-yellow-700 cursor-pointer">Home</li>
        <li className="hover:text-yellow-700 cursor-pointer">Menu</li>
        <li className="hover:text-yellow-700 cursor-pointer">Contact</li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="relative h-96">
    <img
      src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Barista pouring coffee"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Crafted Coffee, Endless Aroma
      </h1>
      <p className="max-w-xl mb-6 text-lg md:text-xl">
        Enjoy artisan brews perfected by our master roasters.
      </p>
      <button className="px-6 py-3 rounded bg-yellow-600 hover:bg-yellow-700 text-brown-900 font-semibold">
        Browse the Menu
      </button>
    </div>
    <p className="absolute bottom-2 right-3 text-xs text-white opacity-80 z-20">
      Photo by:{' '}
      <a
        href="https://www.pexels.com/@apgpotr/"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Afta Putta Gunawan
      </a>{' '}
      on Pexels
    </p>
  </section>
);

const MenuPreview = () => {
  const menu = [
    { name: 'Vanilla Latte', price: '$4.20' },
    { name: 'Espresso Shot', price: '$2.50' },
    { name: 'Cold Brew', price: '$4.00' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-brown-800">
        Customer Favourites
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        {menu.map((item) => (
          <div
            key={item.name}
            className="p-6 bg-white rounded-lg shadow text-center space-y-2"
          >
            <p className="text-xl font-semibold text-brown-800">{item.name}</p>
            <p className="font-medium text-yellow-700">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center text-sm bg-white text-brown-600">
    © 2025 Roast Lab — Made with love &amp;&nbsp;caffeine
  </footer>
);

const App = () => (
  <div className="font-sans antialiased text-brown-900">
    <Header />
    <Hero />
    <MenuPreview />
    <Footer />
  </div>
);

export default App;
