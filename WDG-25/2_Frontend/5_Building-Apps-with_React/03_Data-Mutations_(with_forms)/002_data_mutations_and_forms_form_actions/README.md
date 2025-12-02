Form Actions
============

In React 19, forms gain first-class support for data mutations via a new feature: the ability to pass an async function directly to the `action` prop of a `<form>`.

This `action` function:

*   Receives the submitted `FormData` object
    
*   Can perform validations, API requests, or other side effects
    
*   Can be asynchronous (`async`) to support delayed operations like server calls or simulations
    
*   Does not require you to call `preventDefault()` manually — React handles it for you
    

When using an `action` function:

*   React automatically prevents the browser from navigating
    
*   It manages the execution order of the submission
    
*   It wraps updates inside a "transition", which means:
    
    *   The DOM stays responsive
        
    *   Transitions can be interrupted if new updates come in
        
    *   You don’t block rendering or lock up the UI
        

*   Upon submission, the form is automatically reset, clearing all uncontrolled fields
    

This default reset behavior is aligned with native HTML, but it’s important to note. If you want fine-grained control (e.g. preserving some inputs), you’ll need to opt into controlled components.