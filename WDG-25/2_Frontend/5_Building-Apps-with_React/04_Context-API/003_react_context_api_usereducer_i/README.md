useReducer I
============

Let’s consider a simple e-commerce example that manages a shopping cart. The app displays a list of products and a cart, allowing users to add and remove items and view the cart’s contents. State is managed using the `useState` hook.

#### The Cart State

The cart is represented as a single state object with the following structure:

*   **user**: A string representing the current user.
    
*   **items**: An array containing the items added to the cart.
    
*   **total**: A formatted string showing the total price of all items.
    
*   **itemCount**: The total number of items in the cart.
    

#### Managing Cart Actions

Several functions are defined to handle cart operations. These functions demonstrate how managing a composite state object can quickly become verbose and complex.

##### **Adding an Item to the Cart**

The `addToCart` function performs the following steps:

1.  **Check if Product Exists**  
    It looks for the product in the existing `items` array.
    
2.  **Update Quantity or Add New Item**
    
    *   If the product is already in the cart, its quantity is incremented.
        
    *   Otherwise, it is added to the cart with a quantity of `1`.
        
3.  **Recalculate Totals**  
    The total price and item count are recalculated based on the updated cart items.
    
4.  **Set New State**  
    The new state object is returned and passed to `setCart`.
    

##### **Removing an Item from the Cart**

The `removeFromCart` function handles removal:

1.  **Find Product**  
    It searches for the product to be removed in the `items` array.
    
2.  **Update or Remove**
    
    *   If the product’s quantity is greater than 1, it is decremented.
        
    *   If it's 1, the product is removed entirely.
        
3.  **Recalculate Totals**  
    The item count and total price are recalculated after the update.
    
4.  **Set New State**  
    The updated state is set using `setCart`.
    

##### **Emptying the Cart**

The `emptyCart` function resets the cart to:

*   An empty `items` array
    
*   A `total` of €0.00
    
*   An `itemCount` of 0
    

### A Word on Complexity

As you can see, managing a compound state object like this introduces a fair bit of complexity:

*   Every action requires handling multiple dependent properties (items, totals, counts).
    
*   Functions become verbose and repetitive.
    
*   These functions are redefined on every render, which technically affects performance (although in this small case it’s negligible).
    
*   Only the `setCart` function maintains a stable identity across renders.
    

To simplify logic and better manage this kind of complex, interrelated state, React offers a more powerful hook: `useReducer`.

It provides a way to centralize state transitions into a single reducer function, making it easier to manage and test.

We'll refactor this example using `useReducer` in the next section.