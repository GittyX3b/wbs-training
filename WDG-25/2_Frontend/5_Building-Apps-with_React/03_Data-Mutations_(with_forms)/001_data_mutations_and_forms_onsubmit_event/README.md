onSubmit Event
==============

HTML forms were designed to send data to a server and navigate away — that’s the default. But in modern apps, we often want to intercept form submission to:

*   Validate inputs
    
*   Stay on the same page
    
*   Show custom feedback
    
*   Send the data manually via JavaScript (e.g. `fetch`)
    

React (and JavaScript in general) allows us to take control by using the `onSubmit` event and calling `event.preventDefault()`. This stops the form from reloading or navigating, letting JavaScript become responsible for what happens next.

React 19 introduces new abstractions to streamline this with first-class support for data mutations. With features like form actions, new hooks for data mutations, and even enhanced support for server-side data workflows, React will offer more declarative and ergonomic ways to manage side effects like form submissions and API interactions.

A data mutation is any operation where your app sends data out to change something:

*   Submitting a contact form
*   Sending a chat message
*   Creating or deleting a database record
*   Triggering an API call