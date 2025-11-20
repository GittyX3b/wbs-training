import './index.css';

import { useState } from 'react';

/* -----------------------------------------
 * Toggle theme state in the parent
 * ---------------------------------------*/
const ThemeToggle = ({ theme, setTheme }) => {
  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

/* -----------------------------------------
 * Applies a theme-specific style
 * ---------------------------------------*/
const ThemeBox = ({ theme }) => {
  const isDark = theme === 'dark';
  const boxStyles = isDark
    ? 'bg-gray-800 text-white'
    : 'bg-gray-100 text-gray-900';

  return (
    <div className={`p-4 rounded shadow ${boxStyles}`}>
      <p>
        This box is in <strong>{theme}</strong> mode.
      </p>
    </div>
  );
};

/* -----------------------------------------
 * Text that visually adapts to theme
 * ---------------------------------------*/
const ThemedQuote = ({ theme }) => {
  return (
    <blockquote
      className={`italic border-l-4 pl-4 ${
        theme === 'dark'
          ? 'border-yellow-400 text-yellow-100'
          : 'border-yellow-500 text-yellow-800'
      }`}
    >
      “Design is intelligence made visible.”
    </blockquote>
  );
};

/* -----------------------------------------
 * Root component — theme shared down
 * ---------------------------------------*/
const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <main
      className={`min-h-screen p-8 font-sans transition-colors ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-md mx-auto space-y-6">
        <h3
          className={`text-2xl font-bold text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Shared State: Theme Toggle
        </h3>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <ThemeBox theme={theme} />
        <ThemedQuote theme={theme} />
      </div>
    </main>
  );
};

export default App;
