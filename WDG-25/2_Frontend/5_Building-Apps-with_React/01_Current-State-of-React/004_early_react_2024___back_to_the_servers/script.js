import React, { Suspense, use, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

const Post = ({ promise, setTodoId }) => {
  const data = use(promise);

  return (
    <div className="p-4 bg-gray-100 border rounded space-y-2">
      <p className="font-medium">Fetched this data:</p>
      <pre className="bg-white p-2 rounded text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
      <button
        onClick={() => setTodoId(Math.floor(Math.random() * 100) + 1)}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
      >
        Fetch different data
      </button>
    </div>
  );
};

const SearchForm = ({ setTodoId }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const q = e.target.elements.query.value;
    if (!q) return;
    setTodoId(q);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSearch} className="flex space-x-2 items-center">
      <input
        type="text"
        name="query"
        placeholder="Search for Todo"
        aria-label="Search for todo"
        className="border px-3 py-2 rounded w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        👀
      </button>
    </form>
  );
};

const Loading = () => (
  <div className="h-48 flex items-center justify-center text-gray-600">
    <p className="text-lg">Loading...</p>
  </div>
);

const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="p-4 bg-red-100 border border-red-400 rounded">
      <p className="font-bold text-red-700">Something went wrong:</p>
      <pre className="text-red-600 text-sm overflow-x-auto mt-2">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
      >
        Reset
      </button>
    </div>
  );
};

const App = () => {
  const [todoId, setTodoId] = useState(42);

  const somePromise = fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  ).then((res) => {
    if (res.status === 404) throw new Error('Todo not found');
    if (!res.ok) throw new Error('Fetch failed');
    return res.json();
  });

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 text-gray-800">
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={() => {
          setTodoId(42);
        }}
      >
        <Suspense fallback={<Loading />}>
          <Post promise={somePromise} setTodoId={setTodoId} />
        </Suspense>
      </ErrorBoundary>
      <SearchForm setTodoId={setTodoId} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
