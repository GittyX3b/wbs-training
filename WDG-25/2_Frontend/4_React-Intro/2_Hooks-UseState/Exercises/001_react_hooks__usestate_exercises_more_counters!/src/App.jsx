import "./index.css";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCounter((p) => p + 1)}>+</button>
      <span>{counter}</span>
      <button onClick={() => setCounter((p) => p && p - 1)}>-</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>More Counters!</h1>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
