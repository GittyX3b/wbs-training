import './index.css';

import { useState } from 'react';

/* -----------------------------------------
 * Demonstrates multiple pieces of state in one component
 * ---------------------------------------*/
const WithMoreThanOnePieceOfState = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('hello');

  return (
    <div className="bg-white p-4 rounded shadow text-center space-y-2">
      <p className="text-lg font-medium">
        Count: <span className="text-yellow-700">{count}</span>
      </p>
      <p className="text-sm text-gray-600">Message: "{message}"</p>
      <div className="space-x-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Increase
        </button>
        <button
          onClick={() => setMessage('world')}
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          Change Message
        </button>
      </div>
    </div>
  );
};

/* -----------------------------------------
 * Demonstrates local, isolated state per component instance
 * ---------------------------------------*/
const ProofOfLocality = ({ label }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded shadow">
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        −
      </button>
      <span className="w-6 text-center font-semibold">{counter}</span>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        +
      </button>
      <div>{label}</div>
    </div>
  );
};

/* -----------------------------------------
 * Root component rendering everything
 * ---------------------------------------*/
const App = () => {
  return (
    <main className="p-8 font-sans space-y-8 bg-gray-50 min-h-screen">
      <section className="space-y-4">
        <h2 className="text-xl font-bold">
          You can have more than one piece of state in your components
        </h2>
        <WithMoreThanOnePieceOfState />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">
          Every instance of{' '}
          <code className="bg-gray-200 px-1 rounded">ProofOfLocality</code> has
          its own piece of state
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProofOfLocality label="First Instance" />
          <ProofOfLocality label="Second Instance" />
          <ProofOfLocality label="Third Instance" />
          <ProofOfLocality label="Fourth Instance" />
        </div>
      </section>
    </main>
  );
};

export default App;
