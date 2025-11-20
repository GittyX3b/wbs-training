Events
======

#### Events are just functions

In React you attach an event handler by adding a camel-cased prop such as `onClick`, `onChange`, or `onSubmit` to any JSX element. Instead of a string (`"doSomething()"`) you pass a **function reference**. React then calls that function with a **SyntheticEvent** object that normalises quirks across browsers.

#### Why SyntheticEvent matters

The event you log in the console isn’t the raw `MouseEvent` or `InputEvent` from the browser—it’s React’s lightweight wrapper. It mirrors the native event’s API but guarantees the same shape everywhere, so your code behaves predictably on Chrome, Firefox, Safari, and friends.

#### Common patterns

*   Define the handler once (`const handleClick = () => { … }`) and reference it: `onClick={handleClick}`.
    
*   Arrow functions inline (`onClick={() => doSomething(c => c + 1)}`) are fine for small one-liners.
    
*   Call `e.preventDefault()` inside `onSubmit` handlers to stop the browser’s page reload.