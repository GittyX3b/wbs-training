import './index.css';

import { useEffect, useState } from 'react';

/* -----------------------------------------
 * Tracker component sets up a window listener
 * ---------------------------------------*/
const Tracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    console.log('📡 Tracker mounted and listening for resize');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('🧹 Cleanup: listener removed on unmount');
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow text-center space-y-2">
      <h3 className="text-lg font-bold text-yellow-700">
        Window Width Tracker
      </h3>
      <p className="text-gray-700">Resize the window:</p>
      <p className="text-3xl font-mono text-yellow-600">{width}px</p>
    </div>
  );
};

/* -----------------------------------------
 * Alternate component with no effect
 * ---------------------------------------*/
const Placeholder = () => {
  return (
    <div className="bg-white p-6 rounded shadow text-center space-y-2">
      <h3 className="text-lg font-bold text-gray-700">Placeholder Component</h3>
      <p className="text-gray-600">Nothing to track here.</p>
    </div>
  );
};

/* -----------------------------------------
 * Root component — toggles between the two
 * ---------------------------------------*/
const App = () => {
  const [showTracker, setShowTracker] = useState(true);

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans space-y-6">
      <div className="text-center">
        <button
          onClick={() => setShowTracker((prev) => !prev)}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          {showTracker ? 'Hide Tracker' : 'Show Tracker'}
        </button>
      </div>

      <div className="max-w-md mx-auto">
        {showTracker ? <Tracker /> : <Placeholder />}
      </div>
    </main>
  );
};

export default App;
