What is React?
==============

React is an open-source JavaScript library, originally developed by Facebook, that helps developers build dynamic, highly interactive user interfaces for web and native applications. Instead of manipulating the browser’s DOM directly, React introduces a “virtual DOM”: an in-memory representation of the interface that React efficiently updates and reconciles whenever data changes, leading to smooth, performant rendering.

Its component-based architecture lets you break complex UIs into small, reusable pieces making large projects easier to reason about, test, and maintain. React’s declarative syntax means you describe what the UI should look like for a given state, and React handles the underlying updates, freeing you from cumbersome, imperative DOM code. 

A vast ecosystem of tools, hooks, and community-maintained libraries has grown around React, making it a popular foundation for everything from simple websites to sophisticated, production-grade applications.

When you open a web page built with React, you’re looking at a user-interface that behaves like a **mathematical function**. Feed it some application state and it deterministically returns the markup the browser should display.

Whenever state changes, React invokes the function again, and it quietly swaps only the pieces of the real DOM that need updating.

That, in one sentence, is the React philosophy: **state in, declarative UI out, diff-and-patch under the hood**. We can then say that in React, the UI is a function of your state. 

### State: a single source of truth

In this snippet, the entire application state is captured in a plain JavaScript object named `appState`. It holds an array of `users`, each with an `online` flag.

You can change the values of the properties or add new user entries and React will pass the new value of your state to the function that determines your UI. 

In React, these functions are called **Components**

### Components: pure, reusable functions

Every visual fragment in React is expressed as a **component**, just a JavaScript function that returns markup. 

In this example, the `App` component is the entry point for the entire application, it returns a basic layout and whatever markup `UserList` returns.

`UserList` returns a header counting how many users are online and then a list of `UserRow` items, as many as users in our state.

`UserRow` simply returns the name of the user but decorated accordingly to its status.

This predictable behaviour occurs because React embraces a declarative approach to programming and becuase all of our functions, i.e. our components, are pure functions, meaning that for the same input, the output will always be the same and they have no side-effects performing unwated mutations.

### Declarative rendering & the Virtual DOM

Traditional DOM scripting is _imperative_: “find this `<div>`, create a `<span>`, append it here…”. React flips that flow. You describe _what_ the DOM should look like for a given state, React figures out _how_ to make the browser match that description. It does so by compiling the markup output of every component into a lightweight **virtual DOM**—a plain-JS object graph mirroring the intended HTML structure.

Each time `App` is re-invoked, React builds a new virtual tree, diffs it against the previous one, generates the smallest set of real-DOM mutations required to reach the new shape, and applies them in batches. In practice, that means toggling Grace Hopper from offline to online updates exactly one `<li>` node; the rest of the list remains untouched, saving expensive reflows and repaints. For this to work, state updates need to be informed to React so it can keep track of these changes, we'll talk more about this soon!