One or more pieces of state
===========================

#### Managing multiple pieces of state

In React, you can call `useState` as many times as needed. Each call gives you a new state variable and its own update function. For example, you might have one for a counter and another for a text label. These states are entirely independent and scoped to the component they live in.

#### Component-level encapsulation

Each instance of a component maintains its own state. In the example above, we render multiple instances of `ProofOfLocality`, and each counter works on its own. Clicking a button in one component has no effect on the others.

This **locality** is one of React’s biggest strengths—it lets you build isolated, predictable, and reusable components that don’t interfere with each other unless you explicitly connect them.