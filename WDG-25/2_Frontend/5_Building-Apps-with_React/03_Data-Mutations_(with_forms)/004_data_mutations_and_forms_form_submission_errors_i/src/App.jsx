import './index.css';

import { useFormStatus } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`w-full py-2 rounded text-white ${
        pending
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded">
    <p className="font-semibold">
      There was an error while submitting the form:
    </p>
    <pre className="mt-2 text-sm">{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className="mt-2 px-4 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
    >
      Retry
    </button>
  </div>
);

const App = () => {
  const submitAction = async (formData) => {
    throw new Error('This error was thrown from the action');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <form action={submitAction} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="Leia Organa"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="leia@rebellion.org"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="Tell us how we can help..."
              />
            </div>
            <Submit />
          </form>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
