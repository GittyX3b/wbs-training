Styling
=======

### Why **`className`** and not **`class`**?

JSX isn’t HTML — it’s **JavaScript that looks like HTML**. But  
`class` is a reserved word in JavaScript (used for declaring ES classes). If we tried:

`<div class="container">…</div>`

the tools that convert JSX into `React.createElement` calls will complain. Most likely it'll work but some silent error could take place.

React’s solution is the `className` attribute, which maps 1-to-1 to the browser’s `class` attribute when the JSX is transpiled. Same story for `htmlFor` (instead of `for`) and `defaultValue` (instead of `value` on uncontrolled inputs).

### Inline Styles

Inline styles in React let you attach a tiny, component-scoped CSS rule right where you need it by passing a plain JavaScript object to the `style` prop—for example, `<button style={{ backgroundColor: '#ff8a00', padding: '0.75rem 1.25rem' }}>`. Because the object lives in JavaScript, you get full programmatic power: computed values, conditional branches, etc. Properties are written in **camelCase** (`backgroundColor`, `fontSize`) and numeric values default to `px` unless you supply a unit string.

Inline styles are perfect for one-off tweaks, but they can’t express pseudo-classes, media queries, or keyframes, and every re-render creates a new object, so large-scale styling is better left to classes (utility frameworks, CSS modules, or traditional stylesheets) for maintainability and performance.