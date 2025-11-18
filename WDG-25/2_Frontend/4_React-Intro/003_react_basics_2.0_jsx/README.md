JSX
===

JSX (JavaScript XML) is a **syntax extension** that lets you embed HTML-like tags directly inside JavaScript. Browsers can’t read JSX, but your build tool **transpiles** it into plain JavaScript before it ever reaches production code.

`<h2>Hello!</h2>` 

becomes

`React.createElement("h2", null, "Hello!");`

a simple function call that React understands.

### Why bother? Three practical wins

JSX

Plain createElement

**Readable**: markup looks like the resulting HTML.

Verbose nest-after-nest calls.

**Declarative**: easier to see structure at a glance.

Structure buried in function arguments.

**DX super-powers**: syntax highlighting, linting, TS types for props.

Harder to scan, autocomplete is limited.

In the snippet you can visually compare a tidy 6-line JSX component with its 16–line `createElement` twin.

### JSX ≠ HTML

Remember, JSX still follows JavaScript rules:

*   Use `className` instead of `class`.
    
*   Wrap adjacent elements in a parent (`<>...</>`).
    
*   Embed expressions with curly braces `{}`.