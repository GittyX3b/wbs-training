Context API Intro
=================

The **Context API** in React is a built-in mechanism for passing **data**—of any kind—from a wrapping parent component to deeply nested components, without the need to manually pass props at each intermediate level. This eliminates a common problem in component hierarchies known as **prop drilling**, where props are passed through several layers of components that don't actually use them, just to reach the intended recipient.

In this way, the Context API can be thought of as a form of [**Dependency Injection**](https://en.wikipedia.org/wiki/Dependency_injection): components can declare what context-based data they depend on, and the data is automatically "injected" via the component tree without explicit prop wiring.

More often than not, the Context API is used to share **state**—such as user information, themes, or application settings—across the application. This makes it especially useful in large or deeply nested component trees where managing prop chains would be cumbersome and error-prone.

Here’s an example where the Context API is used to share a `user` object across three levels of components: a parent, a child, and a grandchild. Instead of passing the `user` data down manually through each component, the `GrandChildComponent` accesses it directly from context.

The process works like this:

1.  A context is created to hold the `user` data. This context acts like a global store available to any component within its provider scope.
    
2.  The `App` component wraps its children with the context **provider**, making the `user` data accessible to all descendants.
    
3.  In the `GrandChildComponent`, the `user` data is accessed directly from context either using a special React hook `useContext` or the `use` API, **bypassing any intermediate prop-passing**.
    

This leads to cleaner, more maintainable code. Components consume only the data they need and aren't burdened with forwarding unrelated props. As applications grow in complexity, the Context API becomes an essential pattern for managing **shared or global data** cleanly.