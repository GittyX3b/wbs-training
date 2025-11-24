import './index.css';

import { useEffect, useState } from 'react';

/* -----------------------------------------
 * Effect runs on every render
 * ---------------------------------------*/
const EveryRender = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('Effect runs on every render');
  });

  return (
    <div className="p-4 bg-white rounded shadow space-y-2">
      <h3 className="text-lg font-bold text-yellow-700">On every render</h3>
      <button
        onClick={() => setCounter1((prev) => prev + 1)}
        className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        Increase first counter: {counter1}
      </button>
      <button
        onClick={() => setCounter2((prev) => prev + 1)}
        className="ml-2 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        Increase second counter: {counter2}
      </button>
    </div>
  );
};

/* -----------------------------------------
 * Effect runs only on first mount
 * ---------------------------------------*/
const FirstRender = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('Only on first mount');
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow space-y-2">
      <h3 className="text-lg font-bold text-green-700">On first render</h3>
      <button
        onClick={() => setCounter1((prev) => prev + 1)}
        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Increase first counter: {counter1}
      </button>
      <button
        onClick={() => setCounter2((prev) => prev + 1)}
        className="ml-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Increase second counter: {counter2}
      </button>
    </div>
  );
};

/* -----------------------------------------
 * Effect runs on mount + when counter1 changes
 * ---------------------------------------*/
const BasedOnVariableChange = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('Runs on mount and when counter1 changes');
  }, [counter1]);

  return (
    <div className="p-4 bg-white rounded shadow space-y-2">
      <h3 className="text-lg font-bold text-blue-700">On counter1 changing</h3>
      <button
        onClick={() => setCounter1((prev) => prev + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increase first counter: {counter1}
      </button>
      <button
        onClick={() => setCounter2((prev) => prev + 1)}
        className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increase second counter: {counter2}
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
      <h2 className="text-2xl font-bold text-center mb-6">
        useEffect Dependency Array
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <EveryRender />
        <FirstRender />
        <BasedOnVariableChange />
      </div>
    </main>
  );
};

export default App;
