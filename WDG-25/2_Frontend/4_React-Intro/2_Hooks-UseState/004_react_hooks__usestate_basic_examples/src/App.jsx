import './index.css';

import { useState } from 'react';

/* -----------------------------------------
 * Text input with live preview
 * ---------------------------------------*/
const MyInput = () => {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="p-4 bg-white rounded shadow space-y-2">
      <input
        value={text}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
      <p className="text-sm text-gray-600">
        {text ? `You typed: ${text}` : 'Type something!'}
      </p>
      <button
        onClick={() => setText('')}
        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm"
      >
        Reset
      </button>
    </div>
  );
};

/* -----------------------------------------
 * Checkbox with boolean state
 * ---------------------------------------*/
const MyCheckbox = () => {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <div className="p-4 bg-white rounded shadow space-y-2">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
          className="form-checkbox"
        />
        <span>I liked this</span>
      </label>
      <p className="text-sm text-gray-600">
        You {liked ? 'liked' : 'did not like'} this.
      </p>
    </div>
  );
};

/* -----------------------------------------
 * Two inputs using separate pieces of state
 * ---------------------------------------*/
const Form = () => {
  const [name, setName] = useState('Anoj');
  const [age, setAge] = useState(42);

  return (
    <div className="p-4 bg-white rounded shadow space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
      />
      <button
        onClick={() => setAge(age + 1)}
        className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
      >
        Increment age
      </button>
      <p className="text-sm text-gray-700">
        Hello, {name}. You are {age}.
      </p>
    </div>
  );
};

/* -----------------------------------------
 * Root component
 * ---------------------------------------*/
const App = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans space-y-8">
      <h2 className="text-2xl font-bold text-center">
        Basic State Examples in React
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <MyInput />
        <MyCheckbox />
        <Form />
      </div>
    </main>
  );
};

export default App;
