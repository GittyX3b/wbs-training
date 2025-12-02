useReducer II
=============

In computer science, a **reducer** is a concept used to combine or "reduce" multiple elements into a single result, such as computing the total number of items in a cart or the total cost of those items.

In JavaScript, you're likely familiar with `Array.prototype.reduce()`, which takes a **reducer function**: a function that receives an accumulated value and the current value, and returns the next accumulated value.

React’s `useReducer` hook takes this same idea and applies it to state management. A **reducer** in React is a function that receives the **current state** and an **action**, then returns the **new state**.

### What’s New in This Version?

This is the same shopping cart example as before, but now it's implemented with `useReducer`.

### Reducer Structure

The `cartReducer` function defines exactly how the cart should respond to different **action types**:

*   **`ADD_TO_CART`**:  
    Adds a new product if it's not already in the cart, or increments the quantity if it is.
    
*   **`REMOVE_FROM_CART`**:  
    Decrements the quantity of an item. If the quantity reaches zero, the item is removed entirely.
    
*   **`EMPTY_CART`**:  
    Clears all items from the cart and resets totals.
    

The reducer includes a helper function `recalculateCart()` to update derived values like total price and item count consistently after any change to the `items` array.

Every case returns a **new state object**, which is critical for React to detect changes and re-render appropriately.

### How `useReducer` Works

`useReducer` takes two arguments:

`const [state, dispatch] = useReducer(reducerFunction, initialState);`

*   `state`: The current value of the state.
    
*   `dispatch`: A function you call to trigger a state update. You provide it with an **action object**:
    

`dispatch({ type: 'ACTION_TYPE', payload: optionalData });`

This approach **separates state logic from UI logic**, making your code more predictable and maintainable.

### Why Use It?

Using `useReducer` instead of `useState` is especially helpful when:

*   State logic is **complex** or **interdependent**.
    
*   You want a clear **history of actions**.
    
*   You want to **centralize** state transitions into one place.
    

Also, unlike inline functions in `useState`\-based approaches, the `dispatch` function has a **stable identity across renders**, making it ideal for passing down via props or context.

While this approach doesn't reduce lines of code, it gives you:

*   Better **structure**.
    
*   Clearer **state transition logic**.
    
*   Greater **scalability** and **maintainability**—especially as the app grows.
    

This reducer-based pattern becomes even more powerful when paired with the **Context API**, which we’ll explore in the next step.