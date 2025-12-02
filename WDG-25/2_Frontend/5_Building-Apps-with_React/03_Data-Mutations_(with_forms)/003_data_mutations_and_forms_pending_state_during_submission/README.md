Pending state during submission
===============================

In React 19, when you pass an `async function` to the `action` prop of a `<form>`, React tracks the submission state automatically. You can access this state using the new `[useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)()` hook.

The `useFormStatus()` hook provides live feedback about the status of a form submission. Specifically, it returns:

*   `pending`: `true` while the form is submitting, `false` when idle
    
*   Other fields like `data`, `method`, and `action` are also available for advanced use cases
    

This lets you:

*   Disable the submit button while the request is in progress
    
*   Swap button labels like "Submit" → "Submitting..."
    
*   Prevent accidental double submissions
    
*   Provide responsive UI feedback without managing state manually
    

Traditionally, we had to manually manage loading state with `useState`. But with `useFormStatus()`, React handles that for you — cleanly and automatically, inside a transition-aware system.

The `useFormStatus` Hook must be called from a component that is rendered inside a `<form>`, in this cause, our button component.