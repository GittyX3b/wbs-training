# Creating elements

JavaScript provides several methods for creating and adding new elements to the DOM.

The two primary approaches are using the `document.createElement` method and inlining HTML with template strings. Both approaches have their use cases, and understanding their differences is important for effective DOM manipulation.

### `document.createElement` Method

1.  **`document.createElement(tagName)`**:

    - Creates an element with the specified tag name.
    - Returns a new element node.

2.  **`element.appendChild(child)`**:

    - Adds a child element to the specified parent element.

3.  **`element.setAttribute(name, value)`**:

    - Sets an attribute on the specified element.

4.  **`element.textContent`**:

    - Sets the text content of an element.

### Template Strings

- **Template Strings**:
  - Use backticks (\`\`) to define a string that can contain embedded expressions and multiline content.
  - Can be used to create HTML content directly within a string.

### Comparison

1.  **Creating Elements with `document.createElement`**:

    - More explicit and readable.
    - Provides programmatic control over each element and attribute.
    - Better suited for dynamic content where elements need to be manipulated before being added to the DOM.

2.  **Creating Elements with Template Strings**:

    - More concise and easier to write for simple HTML structures.
    - Convenient for adding multiple elements or complex HTML structures in one go.
    - Less control over individual elements before adding to the DOM.
