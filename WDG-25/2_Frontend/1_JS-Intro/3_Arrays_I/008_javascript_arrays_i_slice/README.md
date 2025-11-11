Slice
=====

The `.slice()` method is used to create a shallow copy of a portion of an array into a new array object. It does not modify the original array but returns a new array containing the selected elements.

This method provides a way to extract a subarray from an existing array based on specified start and end indices.

#### Practical Use:

*   **Subarray Extraction:**
    *   Ideal for creating a subset of an array based on specific indices, which can be useful for tasks like pagination or segmenting data.
*   **Immutable Operations:**
    *   Since `.slice()` does not modify the original array, it is useful in functional programming paradigms where immutability is preferred, allowing safe extraction of array segments without side effects.