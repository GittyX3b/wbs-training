import './index.css';

/* -------------------------------------------------
 * Tiny playground: click, key, and submit events
 * ------------------------------------------------*/
const App = () => {
  /* click */
  const handleClick = (e) => {
    console.log('Clicked button — SyntheticEvent:', e);
  };

  /* key press */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      alert(`Pressed Enter with value: "${e.target.value}"`);
    }
  };

  /* form submit */
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    const input = e.target.elements.message.value; // Get the value of the input named 'message'
    alert(`Form submitted 🎉: ${input}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 font-sans p-6">
      <div className="w-full max-w-md space-y-8 bg-white rounded-lg shadow p-8">
        <h3 className="text-2xl font-bold text-center">Event Playground</h3>
        {/* click event */}
        <button
          onClick={handleClick}
          className="w-full py-2 bg-red-400 text-white rounded hover:bg-red-700"
        >
          Click me (and check the console)
        </button>
        {/* key event */}
        <input
          type="text"
          placeholder="Type something and press Enter"
          onKeyDown={handleKeyDown}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {/* submit event */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="message"
            type="text"
            placeholder="Type something and hit Enter or submit"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-700"
          >
            Submit form
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
