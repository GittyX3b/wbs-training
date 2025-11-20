Rendering Lists
===============

#### Why lists matter

UI often mirrors an array of data – products in a shop, messages in a chat, songs in a playlist, movies in a streaming platform, Pokémon in a Pokédex.

React can loop over that array and return a **collection of elements** that render as a cohesive grid, list, or gallery.

#### Mapping data to JSX

Because JSX is just JavaScript, the array method `.map()` is the go-to pattern. It takes each data item, runs a callback, and returns a brand-new array filled with JSX elements. Hand that array back to React and it paints every item.

#### The `key` prop

Every sibling element in a list needs a `key`, a stable identifier that React uses during diffing. A good key comes from your data (product ID, database PK, Pokémon number). Avoid the array index – if items are added or removed the index shifts and React can mix up stateful components.

This snippet shows two common patterns:

*   **`PokeGrid`** maps over the entire `starters` array, producing a responsive grid of cards styled with Tailwind utilities.
    
*   A quick inline `filter().map()` chain renders a smaller list without creating a whole new component.
    

React treats each returned array as normal JSX, so you can nest, style, or transform lists as freely as any other markup — just remember the `key`.