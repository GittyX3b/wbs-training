JS try/catch block
==================

Did you uncomment the line in the previous example? did everything crash in the preview window? The `try...catch` statement is your friend.

The `try...catch` statement in JavaScript is a way to handle errors that may occur in a block of code. It allows you to "try" to execute code and "catch" any errors that are thrown during the execution. Here’s how it works in a very basic way:

*   **Try Block:** You write the code that might cause an error inside the `try` block. This is where you put the operations that you suspect might fail at some point, such as fetching data from a server or working with user input.
    
*   **Catch Block:** If an error occurs in the `try` block, JavaScript stops executing the code in that block and moves to the `catch` block. You can specify what should happen when an error occurs inside the `catch` block. This often includes logging the error or displaying a message to the user.
    

So instead of letting the entire page die a miserable dead, handle the errors in an elegant way. We will cover more complex strategies for this in the future.