Events
======

### Objective

Build a small **uncontrolled mini-survey form** and practice attaching event handlers and inline validation **without using React state**.

### Instructions

*   **Add Elements**: Inside the `App` component, create a `<form>` that contains:
    
    *   **Name** – text input
        
    *   **Age** – number input ([we recommend this approach to number inputs](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/))
        
    *   **Favorite Color** – `<select>` with at least three color options
        
    *   **Would you recommend our site?** – checkbox (`Yes` / `No`)
        
    *   **Submit** button
        
*   **Labels:** Inputs should have labels for accessibility.
*   **Assign Events**: Attach a single `handleSubmit` function to the form’s `onSubmit` event.
    
*   **Implement the Handler**:
    
    *   Call `event.preventDefault()`.
        
    *   Read the field values via `event.target.elements` , you can pass a `name` attribute to your inputs and even the button so you can access them by name, e.g. `event.target.elements.color` or `event.target.elements.age`
        
    *   Validate inside the handler (JavaScript Form Validation)
        
        *   Name is not empty
        *   Name must be at least **2 characters** long.
            
        *   Age is not empty
        *   Age must be **between 5 and 120**.
            
    *   If any validation fails:
        
        *   Show an alert with sensible feedback.
            
        *   If validation succeeds:
            
            *   `console.log()` an object containing all collected values.
                
            *   Show `alert("Thanks for completing the survey!")`.
                
            *   Reset the form
                
*   **Bonus**: Disable the button as soon as possible within from within the handler. If validations fail, re-enable it for subsequent submissions. If validations succeed, set a timer for **3 seconds** before re-enabling it (use `setTimeout`) to simulate processing.