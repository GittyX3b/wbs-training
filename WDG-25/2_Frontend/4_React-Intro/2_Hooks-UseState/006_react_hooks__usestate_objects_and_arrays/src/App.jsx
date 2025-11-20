import './index.css';

import { useState } from 'react';

/* -----------------------------------------
 * Form component using object state
 * ---------------------------------------*/
const Form = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4 max-w-md mx-auto">
      <h3 className="text-xl font-bold">Contact Form</h3>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          First name
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Last name
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </label>
      </div>

      <div className="text-sm text-gray-600 pt-4">
        <p>
          <strong>Preview:</strong>
        </p>
        <p>
          {form.firstName} {form.lastName}
        </p>
        <p>{form.email}</p>
        <p>{form.message}</p>
      </div>
    </div>
  );
};

/* -----------------------------------------
 * Root component
 * ---------------------------------------*/
const App = () => (
  <main className="min-h-screen bg-gray-50 p-8 font-sans">
    <Form />
  </main>
);

export default App;
