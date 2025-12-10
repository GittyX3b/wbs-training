// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the initial value of a piece of state called count
// Render buttons to increase, decrease and reset

import { useState } from "react";

type CounterProps = {
  initialCount: number;
};

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <p>Initial count: {initialCount}</p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </>
  );
};

export default Counter;
