Network request example
=======================

When your `useEffect` fetches data, React can’t cancel requests already sent — but you can **ignore outdated responses** using a cleanup function.

By setting an `ignore = true` flag in the cleanup, you ensure that **only the response of the last request you sent is allowed to update the state**, even if earlier fetches are still in flight.

This avoids race conditions where:

*   Older responses **arrive after** newer ones
    
*   State might otherwise be overwritten by **stale data**
    

**⚠️** You can confirm this by inspecting the Network tab in your browser’s developer tools. You’ll see that every fetch is sent, but only the latest one updates the UI.

This pattern is useful for demonstration and learning purposes. In a **real-world application**, you'd typically **debounce** or **throttle** frequent requests

💡 In development mode, React may run effects **twice** (due to Strict Mode). This helps expose bugs in cleanup logic. But don’t worry — in production, only a single effect runs.