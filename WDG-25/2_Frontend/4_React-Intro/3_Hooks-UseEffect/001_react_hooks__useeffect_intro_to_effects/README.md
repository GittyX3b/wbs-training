Intro to Effects
================

#### Effects allow your component to “reach out”

Unlike click handlers (which respond to user input), effects run as a result of **rendering**. You can use them to:

*   Fetch external data (like our Pokémon list)
    
*   Set up timers or event listeners
    
*   Talk to browser APIs or third-party scripts
    

#### Why the `ignore` flag in this example?

When the component unmounts before the fetch completes, we skip calling `setState` using the `ignore` variable to avoid warnings and unnecessary updates. You can find more on this over [here](https://react.dev/reference/react/useEffect#fetching-data-with-effects)

#### Multiple states at work

*   `loading` tracks the async operation
    
*   `error` gives users feedback
    
*   `pokemon` stores the final result
    

This is a clean, real-world use case for `useEffect` to _Fetch-on-Render_  and the pattern works well whether you're calling APIs, setting up a chart library, or syncing the page title.

Our `sleep` function is there to allow you to confirm that the loading indicator shows and to teach you how to to implement a sleep function in JavaScript with Promises!