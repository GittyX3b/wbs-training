import './index.css';

const App = () => {
  let counter = 0;

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center space-x-6 border-2 border-dashed border-blue-500">
        <button
          className="text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition"
          onClick={() => {
            counter--;
            console.log(counter);
          }}
        >
          -
        </button>
        <span className="text-4xl font-semibold w-20 text-center select-none">
          {counter}
        </span>
        <button
          className="text-3xl font-bold w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
          onClick={() => {
            counter++;
            console.log(counter);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
