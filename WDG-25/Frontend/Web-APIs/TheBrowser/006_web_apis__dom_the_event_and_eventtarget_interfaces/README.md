# The Event and EventTarget Interfaces

The `EventTarget` interface is a fundamental part of the DOM API, providing the methods necessary to handle events. It is implemented by various interfaces, including `Element`, `Document`, and `Window`, making them capable of being targets for events.

### Key Features of the `EventTarget` Interface

1.  **Event Handling**:

    - The `EventTarget` interface allows objects to receive notifications (events) when something happens (e.g., user interactions, network events).

2.  **Methods**:

    - `addEventListener(type, listener)`: Registers an event handler for the specified event type.
    - `removeEventListener(type, listener)`: Removes an event handler previously registered.

### EventTarget Implementations

1.  **Element**:

    - All HTML elements (`<div>`, `<button>`, `<p>`, etc.) implement the `EventTarget` interface.
    - Example: `element.addEventListener('click', handler);`

2.  **Document**:

    - The `document` object itself can be an event target.
    - Example: `document.addEventListener('copy', handler);`

3.  **Window**:

    - The `window` object can also receive and handle events.
    - Example: `window.addEventListener('resize', handler);`
