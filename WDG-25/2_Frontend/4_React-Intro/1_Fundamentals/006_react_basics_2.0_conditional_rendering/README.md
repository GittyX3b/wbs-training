Conditional Rendering
=====================

#### React shows the right UI for the current data

Whenever state or props change, React evaluates your components again. Inside those components you can branch in plain JavaScript—`if`, `? :`, `&&`, `switch`—and return different JSX. No special syntax is required; a component just needs to hand React a tree, any tree, on every render.

#### Common patterns

*   `if … return …` for early exits or clearer multi-line blocks
    
*   `condition ? A : B` when you need a quick inline toggle
    
*   `condition && A` for “show this only when true”
    
*   `switch` for more than two possibilities
    

The four mini-components each choose a different branching style, but all deliver ordinary JSX back to React. Change the demo data, reload the frame, and watch the UI adjust—proof that conditional rendering is simply JavaScript plus React’s automatic re-rendering.