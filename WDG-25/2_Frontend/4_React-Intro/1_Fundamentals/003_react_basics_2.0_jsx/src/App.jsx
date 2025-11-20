import './index.css';

/* -------------------------------------------------
 * Two equivalent components:
 *   1. Written with JSX (concise, readable)
 *   2. Written with plain React.createElement calls
 * ------------------------------------------------*/

/* 1. Friendly, declarative JSX -------------------- */
const WithJSX = () => (
  <section className="rounded-lg p-6 bg-white shadow space-y-4">
    <h2 className="text-xl font-semibold text-pink-700">Hello there! 👋</h2>
    <button
      className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
      onClick={() => console.log('clicked from JSX')}
    >
      Click me (JSX)
    </button>
  </section>
);

/* 2. Verbose createElement ------------------------ */
const WithCreateElement = () =>
  React.createElement(
    'section',
    { className: 'rounded-lg p-6 bg-gray-100 shadow space-y-4' },
    React.createElement(
      'h2',
      { className: 'text-xl font-semibold text-gray-800' },
      'Hello there! 👋',
    ),
    React.createElement(
      'button',
      {
        className: 'px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800',
        onClick: () => console.log('clicked from createElement'),
      },
      'Click me (createElement)',
    ),
  );

/* Root component to showcase both versions -------- */
const App = () => (
  <main className="p-8 space-y-8 font-sans">
    <h1 className="text-2xl font-bold text-center mb-4">
      JSX vs React.createElement
    </h1>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="mb-2 font-medium text-pink-600">✅ With JSX</p>
        <WithJSX />
      </div>

      <div>
        <p className="mb-2 font-medium text-gray-600">🔧 Without JSX</p>
        <WithCreateElement />
      </div>
    </div>
  </main>
);

export default App;
