Sharing state
=============

#### React’s data flow is top-down

In React, **state lives in a parent** and is passed down to children as **props**. Siblings can’t directly talk to each other—but they can receive shared data or setters from their mutual parent.

This model ensures that your app’s behavior stays predictable and traceable: state updates flow **from the top**, and components update **in response to data**, not in isolation.

#### Why this matters

In this example:

*   The `App` component owns a single piece of state: `theme` (`'light'` or `'dark'`)
    
*   A toggle button **updates** that state
    
*   Multiple components **read** that state and change their appearance accordingly
    
*   All state updates and effects are still unidirectional: **top-down via props**