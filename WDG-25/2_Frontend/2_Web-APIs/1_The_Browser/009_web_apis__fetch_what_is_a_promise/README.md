What is a Promise?
==================

A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is an object representing the eventual completion or failure of an asynchronous operation, i.e. an operation that is fired, completed in the background and eventually delivers its results.

A `Promise` is in one of these states:

*   _pending_: initial state, neither fulfilled nor rejected.
*   _fulfilled_: meaning that the operation was completed successfully.
*   _rejected_: meaning that the operation failed.

![](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

When a promise is fulfilled the .then method will call the associated callback with the value. In opposition, if a promise is rejected, you can catch an error.