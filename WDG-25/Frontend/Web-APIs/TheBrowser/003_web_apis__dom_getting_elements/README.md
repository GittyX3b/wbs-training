# Getting elements

When working with the DOM (Document Object Model), JavaScript provides several methods to select and interact with elements. Two primary approaches are the `getElement...` methods and the `querySelector...` methods. These methods differ in their syntax, the type of collections they return, and whether those collections are live (dynamic) or static.

### `getElement...` Methods

1.  **`getElementById(id)`**:
    - Returns the element with the specified `id`.
    - Returns a single element.
2.  **`getElementsByClassName(className)`**:
    - Returns a live `HTMLCollection` of all elements with the specified class name.
3.  **`getElementsByTagName(tagName)`**:
    - Returns a live `HTMLCollection` of all elements with the specified tag name.

### `querySelector...` Methods

1.  **`querySelector(selector)`**:
    - Returns the first element that matches the specified CSS selector.
    - Returns a single element.
2.  **`querySelectorAll(selector)`**:
    - Returns a static `NodeList` of all elements that match the specified CSS selector.

### Live vs. Static Collections

- **Live Collections (`HTMLCollection`)**:

  - Automatically update when the document changes.
  - Methods: `getElementsByClassName`, `getElementsByTagName`.

- **Static Collections (`NodeList`)**:

  - Do not update when the document changes.
  - Method: `querySelectorAll`.
