import "./index.css";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter((p) => p + 1)}>+</button>
      <span>{counter}</span>
      <button onClick={() => setCounter((p) => p && p - 1)}>-</button>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
