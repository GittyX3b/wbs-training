Form submission errors II
=========================

`useActionState` is a new hook introduced in React 19 that allows your component to track and update local state based on the result of a form submission.

It’s designed for situations where you want to:

*   Persist feedback from your form action (e.g. validation errors)
    
*   Display status or result of the most recent submission
    
*   Avoid manually managing `useState` or `useReducer`
    

Instead of passing your `action` function directly to the `<form>`, you "wrap" it with `useActionState`. This gives you:

1.  The latest state returned from that action (e.g. errors, success message, etc.)
    
2.  A form action function that you assign to your form’s `action` attribute
3.  The status of the action
    

When you use `useActionState`, your original action function gets called with two arguments instead of one:

`const actionFunction = async (previousState, formData) => { ... }`

*   `previousState`: the last known result of the action (starts as your `initialState`)
    
*   `formData`: the current form submission payload
    

This allows your action function to read the last result (e.g. old errors) and return a new one.

`useActionState` is especially useful when you want:

*   Granular, per-field error feedback in forms
    
*   Status info to persist after submission
    
*   Declarative, localized handling without external state