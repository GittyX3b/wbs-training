Splice and ToSpliced
====================

The `.splice()` method is used to add, remove, or replace elements in an array at a specific index. It modifies the original array and returns an array containing the deleted elements, if any.

This method is highly versatile, providing the ability to manipulate array content dynamically by specifying the start index, the number of elements to remove, and optionally, the elements to add.

If you don't want to mofidy the original array, you can use `.toSpliced()` which returns a spliced version of the array keeping the original intact.  
  

#### Practical Use:

*   **Dynamic Collection Management:**
    *   Allows for dynamic addition, removal, or replacement of elements in an array, making it useful for managing collections where elements need to be updated frequently.
*   **Complex Data Manipulation:**
    *   Useful in scenarios where specific elements need to be altered or adjusted within an array, such as updating user data in an application or modifying configurations in a settings array.