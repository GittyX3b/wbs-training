Removing data
=============

To manage the data stored in `localStorage` or `sessionStorage`, you might need to remove specific items or clear all stored data. This can be done using the `removeItem` and `clear` methods.

#### Methods Overview

1.  **`removeItem(key)`**:
    
    *   **Description**: Removes the key-value pair associated with the specified key.
    *   **Usage**: This method takes one argument, the key of the item you want to remove.
    *   **Example**: `localStorage.removeItem('myKey');`
2.  **`clear()`**:
    
    *   **Description**: Clears all key-value pairs stored in `localStorage`.
    *   **Usage**: This method does not take any arguments.
    *   **Example**: `localStorage.clear();`

  
Open the browser's developer tools and inspect the Application Storage and the Console!