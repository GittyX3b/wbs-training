import './index.css';

import { useState } from 'react';

/* -----------------------------------------
 * ❌ This version uses direct state updates
 * ---------------------------------------*/
const SettingValueDirectly = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <div className="p-6 bg-white rounded shadow space-y-2">
      <h3 className="text-lg font-bold">Setting value directly</h3>
      <p className="text-sm text-gray-600">
        Try increasing the counter by 3 using 3 calls to{' '}
        <code>setCounter(counter + 1)</code>
      </p>
      <p className="text-2xl font-semibold text-yellow-700">{counter}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        +
      </button>
    </div>
  );
};

/* -----------------------------------------
 * ✅ This version uses the updater function
 * ---------------------------------------*/
const PassingAnUpdater = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="p-6 bg-white rounded shadow space-y-2">
      <h3 className="text-lg font-bold">Passing an updater</h3>
      <p className="text-sm text-gray-600">
        Try increasing the counter by 3 using 3 calls to{' '}
        <code>setCounter(prev =&gt; prev + 1)</code>
      </p>
      <p className="text-2xl font-semibold text-yellow-700">{counter}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        +
      </button>
    </div>
  );
};

/* -----------------------------------------
 * Root
 * ---------------------------------------*/
const App = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans space-y-8">
      <SettingValueDirectly />
      <PassingAnUpdater />
    </main>
  );
};

export default App;
