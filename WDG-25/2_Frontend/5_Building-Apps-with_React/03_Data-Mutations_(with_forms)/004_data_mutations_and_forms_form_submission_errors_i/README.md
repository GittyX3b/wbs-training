Form submission errors I
========================

In React, an Error Boundary is a special component that catches JavaScript errors in the component tree below it, preventing the entire app from crashing. Instead of letting the error break the UI, it renders a fallback UI.

React recommends using the community package [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary) to implement error boundaries more easily. It provides a flexible `<ErrorBoundary>` component along with helpful tools like `resetErrorBoundary()` for retry logic.

We wrap the form in an `<ErrorBoundary>` and pass it a `FallbackComponent`. If the `action` function throws an error (e.g. simulating a server crash), the fallback UI is shown with:

*   A styled error message
    
*   The actual error details
    
*   A Retry button that resets the boundary and gives the user another chance to submit
    

Using a full error boundary to handle form submissions is sometimes overkill, especially if you need per-field error feedback or more control over the UI.

However, it can be a valid option for:

*   Simple forms where a single error fallback is acceptable
    
*   Catching unexpected issues from server actions or mutations
    
*   Ensuring the app remains stable and user-friendly
    

For for granular control, next we'll talk about `useActionState`