import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const SimpleMostComponent = () => {
  return (
    <p className="text-blue-600 font-semibold">
      This component is purely presentational 🌌
    </p>
  );
};

const ComponentWithProps = ({ date }) => {
  return (
    <p>
      It is <strong>{date.toString()}</strong>
    </p>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
    >
      Counter: {count}
    </button>
  );
};

const FetchingComponent = ({ initialTodo }) => {
  const [todoId, setTodoId] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId || initialTodo}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Fetch error:', err));

    return () => alert('Deps changed, effect ran again');
  }, [todoId, initialTodo]);

  return (
    <div className="p-4 bg-gray-100 border rounded space-y-2">
      <p className="font-medium">Fetched this data:</p>
      <pre className="bg-white p-2 rounded text-sm overflow-x-auto">
        {data && JSON.stringify(data, null, 2)}
      </pre>
      <button
        onClick={() => setTodoId(Math.floor(Math.random() * 100) + 1)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
      >
        Fetch different data
      </button>
    </div>
  );
};

const Reservation = () => {
  const [formState, setFormState] = useState({
    isGoing: true,
    numberOfGuests: 2,
  });

  const handleInputChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting:\n${JSON.stringify(formState, null, 2)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow rounded space-y-4"
    >
      <fieldset className="space-y-3">
        <legend className="text-lg font-bold">Reservation</legend>

        <label className="flex items-center space-x-2">
          <span>Is going:</span>
          <input
            name="isGoing"
            type="checkbox"
            checked={formState.isGoing}
            onChange={handleInputChange}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
        </label>

        <label className="block">
          <span className="block mb-1">Number of guests:</span>
          <input
            name="numberOfGuests"
            type="number"
            value={formState.numberOfGuests}
            onChange={handleInputChange}
            className="border px-3 py-2 rounded w-full"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

// Entry point to our application
function App() {
  return (
    <main className="p-6 space-y-8 max-w-3xl mx-auto text-gray-800">
      <SimpleMostComponent />
      <ComponentWithProps date={new Date()} />
      <Counter />
      <FetchingComponent initialTodo={42} />
      <Reservation />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
