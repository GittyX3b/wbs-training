import './index.css';

/* -----------------------------------------
 * Presentational components
 * ---------------------------------------*/
const Header = () => (
  <header className="py-6 text-center">
    <h1 className="text-3xl font-extrabold tracking-tight">
      {appState.siteTitle}
    </h1>
    <p className="text-lg text-pink-600 font-medium">{appState.tagline}</p>
  </header>
);

const Hero = () => (
  <section className="relative">
    <img
      src={appState.coverImage.url}
      alt={appState.tagline}
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-40" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
      <p className="max-w-xl text-xl md:text-2xl font-semibold">
        {appState.heroCopy}
      </p>
      <CTAButton />
    </div>
    <p className="absolute bottom-1 right-3 text-xs text-white">
      <a
        href={appState.coverImage.creditUrl}
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        {appState.coverImage.creditText}
      </a>
    </p>
  </section>
);

const CTAButton = () => (
  <button className="mt-6 px-6 py-3 rounded-lg bg-pink-600 text-white hover:bg-pink-700 shadow">
    {appState.ctaText}
  </button>
);

const FeatureCard = ({ feature }) => (
  <div className="p-6 rounded-lg shadow bg-white">
    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    <p className="text-gray-700">{feature.copy}</p>
  </div>
);

const FeatureList = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
      {appState.features.map((f) => (
        <FeatureCard key={f.id} feature={f} />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center text-sm text-gray-500">
    {appState.footerCopy}
  </footer>
);

/* -----------------------------------------
 * Root component — UI = f(appState)
 * ---------------------------------------*/
const App = () => (
  <div className="font-sans text-gray-900 antialiased">
    <Header />
    <main>
      <Hero />
      <FeatureList />
    </main>
    <Footer />
  </div>
);

export default App;

/* -----------------------------------------
 * appState: single source of truth
 * ---------------------------------------*/
const appState = {
  siteTitle: 'GlamPop Bubblegum',
  tagline: 'Bubble flavour that never fades.',
  heroCopy:
    "Meet the world's first AI-enhanced bubblegum — flavour precision tuned in real-time, just for you.",
  ctaText: 'Chew the future',
  coverImage: {
    url: 'https://images.pexels.com/photos/13017023/pexels-photo-13017023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    creditUrl: 'https://www.pexels.com/@cristianossilva/',
    creditText: 'Photo by Cristian Ossilva on Pexels',
  },
  features: [
    {
      id: 1,
      title: 'AI-adjusted flavour beads',
      copy: 'Tiny sensors respond to your chewing style and release flavour exactly when you need it.',
    },
    {
      id: 2,
      title: 'Personalized taste profiles',
      copy: "Machine learning adapts the gum's flavour to your preferences over time.",
    },
    {
      id: 3,
      title: 'Zero fade, zero waste',
      copy: 'The flavour never dulls — and neither does the fun. One piece, infinite joy.',
    },
  ],
  footerCopy: '© 2025 GlamPop Inc. All rights reserved.',
};
