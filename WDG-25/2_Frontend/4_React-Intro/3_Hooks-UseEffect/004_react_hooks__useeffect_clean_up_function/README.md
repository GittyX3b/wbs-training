Clean up function
=================

The function you pass to `useEffect` can return another function — a **cleanup function**.

React will call this cleanup function:

*   When the component **unmounts**
    
*   Or **before** re-running the effect again (if dependencies change)
    

This helps you safely tear down side effects like:

*   `setInterval`, `setTimeout`
    
*   `addEventListener`
    
*   API subscriptions or sockets
    

In this example, we’re tracking the **window width** using an event listener. Without cleanup, the listener would stay active **even after the component is removed**, potentially causing memory leaks or unwanted updates.

#### React Strict Mode: Why you might see double logs

In development mode, React may **intentionally run effects twice** (mount → unmount → mount again) to help you catch side effects that aren’t safely handled. This is part of **Strict Mode** and doesn't happen in production.

### What's Happening

*   When `Tracker` mounts: `addEventListener` is set up
    
*   When you click **"Hide Tracker"**:
    
    *   React unmounts `Tracker`
        
    *   `useEffect`'s cleanup function runs → removes listener and logs cleanup
        
*   When you click **"Show Tracker"** again:
    
    *   The effect runs fresh — setting everything back up