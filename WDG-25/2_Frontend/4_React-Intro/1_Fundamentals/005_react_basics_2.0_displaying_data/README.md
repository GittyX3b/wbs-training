Displaying Data
===============

#### JSX is JavaScript-friendly

JSX looks like HTML but it is not. It allows for adding data in the markup. Curly braces let you “escape back” into JavaScript so that you can embed a variable or compute a value. 

#### Embedding expressions

A source URL, an uppercase transformation, even a quick maths equation can sit inside `{ }`. React evaluates each expression before touching the real DOM, so the UI always shows the latest value.

#### Passing data with props

Components are plain functions, so they accept arguments. In React those arguments are called **props** and they arrive as a single object. Destructure what you need and embed it the same way you would a local variable.

This snippet shows every common way to display data in React:

*   simple values like `user.name`
    
*   computed strings such as the alt text in `Avatar`
    
*   array mapping for the list of tags
    
*   props flowing through each nested component
    

All powered by one plain JavaScript object and a handful of curly-braced expressions.