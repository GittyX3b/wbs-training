Bonus: async/await
==================

The `async` and `await` keywords provide a more readable and concise way to write asynchronous code. They are built on top of promises.

*   **`async` function**: Declaring a function with the `await` keyword makes it return a promise. Inside an `async` function, you can use the `await` keyword.
*   **`await` expression**: The `await` keyword can only be used inside an `await` function or at the top level of a `module`. It pauses the execution of the `async` function and waits for the promise to resolve or reject. Once the promise resolves, it returns the result. If the promise rejects, `await` throws an error.

### **Benefits of Async and Await**

1. **Readability**: Code using `async` and `await` is easier to read and write compared to chained promises or nested callbacks.  
2. **Error Handling**: You can use standard `try`/`catch` to handle errors, making error handling straightforward.  
3\. **Debugging**: Debugging is simpler because the code appears more synchronous, making it easier to follow the execution flow.

### Conclusion

The `async` and `await` syntax in JavaScript simplifies working with asynchronous operations. By understanding and utilizing these keywords, you can write more readable, maintainable, and efficient asynchronous code.