# Reducer and Context

In this example, the reducer is defined inside a context provider, and state updates are handled by dispatching actions from child components. While we could expose only the `dispatch` function and let components handle the action logic themselves, we’ve chosen to keep everything inside the reducer.

The benefits of organising code like this are not immediatly obvious in this playground do to multi-file limitations (we are working on it). To better understand how this pattern scales, [check this repo out to see a proposed file structure.](https://github.com/GittyX3b/wbs-reducer-context-example)
