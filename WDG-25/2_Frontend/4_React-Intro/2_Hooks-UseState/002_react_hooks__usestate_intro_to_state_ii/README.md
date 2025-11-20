Intro to state II
=================

### What is State?

*   A special kind of variable with a stable identity across renders. Meaning, that for as long as the component that holds it is in the DOM, the variable reference will be kept by React.
*   Setting a new value, triggers a re-render, this is how React gets all magical and stuff.

We can now summarise the way React operates our components:

*   Triggering a re-render ⇒ Setting state
*   React calls yours components with new data ⇒ Rendering
*   React determines changes if any ⇒ Reconciliation
*   React applies the resulting markup to the DOM using the same old DOM API⇒ Committing

In modern React, in order to set state, we use a special kind of function called `useState`. This function belongs to a very special kind of function called `hooks` . React has some built-in hooks for you to use but you can also create custom ones as long as you play by ✨[The Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) ✨

Now it works! All is good

⚠️ You’ll notice trying to log the value of the state from within the event handler will feel like being a step behind. This is because [calling the `set` function doesn’t change state in the running code](https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value)