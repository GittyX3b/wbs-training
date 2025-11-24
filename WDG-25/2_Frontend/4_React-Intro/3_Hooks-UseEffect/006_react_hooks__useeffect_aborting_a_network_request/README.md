Aborting a Network Request
==========================

A better solution would be using `AbortController` to **actually cancel** the request itself — not just ignore its result.

With `AbortController`, you can:

*   **Stop the request in-flight** before it completes
    
*   Avoid unnecessary network usage and memory overhead
    
*   Reduce risk of side effects or warnings from updating unmounted components
    

This is especially helpful when dealing with real APIs, large responses, or frequent input changes (like search queries).

Here's how it works:

*   Create an `AbortController` inside your `useEffect`
    
*   Pass its `signal` to `fetch`
    
*   Call `controller.abort()` in the cleanup to cancel the request if it's no longer needed
    

This approach gives you tighter control and cleaner cancellations than the "ignore flag" pattern.

🧪 Just like before, you can see it in action using your browser's developer tools — canceled requests will be logged to the console.