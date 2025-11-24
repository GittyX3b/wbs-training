import "./index.css";

import { useEffect, useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log(
      "Effect runs on first render, and again every time counter1 changes."
    );
  }, [counter1]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8 font-sans">
      <div className="bg-white p-6 rounded-lg shadow text-center space-y-4">
        <h2 className="text-xl font-bold">useEffect Anatomy</h2>
        <p className="text-gray-600 text-sm max-w-sm mx-auto">
          Open the console and observe when the effect runs. It tracks only
          changes to{" "}
          <code className="bg-gray-200 px-1 rounded">yellow counter1</code>.
        </p>
        <button
          onClick={() => setCounter1((prev) => prev + 1)}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Increase counter: {counter1}
        </button>
        <button
          onClick={() => setCounter2((prev) => prev + 1)}
          className="m-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Increase counter: {counter2}
        </button>
      </div>
    </main>
  );
};

export default App;
