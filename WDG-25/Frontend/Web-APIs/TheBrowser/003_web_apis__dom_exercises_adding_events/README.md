# Adding events

### Objective

In this exercise, you will practice attaching events to elements using JavaScript. You will also explore the differences between `addEventListener` and `onEvent` properties.

### Instructions

1.  **HTML Structure**:
    - Use the provided HTML structure which includes three buttons and an empty `ul` element.
2.  **JavaScript Tasks**:
    - Attach an event to the first button to create a new `li` in the `ul` with a random task from the provided array.
      - Make sure you scroll to the last task so the last one is always visible!
    - Attach an event to the second button to display an alert with a custom message.
    - Attach an event to the third button to output a custom message to the console.

What would happen if instead of `element.addEventListener('click', listener)` you would  do `element.onclick = listener`? What are the differences?

Answer DN:

- eventlistener are more flexible
- eventlistener allow multiple calls on same element
- eventlistener are removable
- eventlistener require more code

- onclick is simple (less code)
- onclick is nor really removable (just by setting to null)
- onclick can only used once per type and element (last one in code overwrites the rest))
