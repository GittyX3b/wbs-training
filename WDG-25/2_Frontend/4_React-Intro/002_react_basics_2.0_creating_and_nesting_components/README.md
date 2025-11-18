Creating and nesting components
===============================

### Components as pure functions

React components are the fundamental building blocks of a React application. They encapsulate logic, markup, and even style into reusable pieces that can be combined to build complex user interfaces.

When naming a component, it's important to note that it HAS to start with an uppercase!

Once again we are encapsulating all of the app data into `appState`. Given the same `appState`, our components, always return identical markup. This purity:

*   keeps components predictable and testable
    
*   makes them easy to reuse in other places of our app 
    
*   eliminates hidden dependencies—UI is a straight function of state
    

Whenever possible, we should strive for creating components as pure functions.

### Composition builds hierarchy

`App` doesn’t know _how_ the hero or feature cards render; it just nests them in the right order. That tree-of-components mirrors the final DOM

<App>  
 ├─ <Header>  
 ├─ <main>  
 │   ├─ <Hero>  
 │   └─ <FeatureList>  
 └─ <Footer>  
  

### No imperative DOM calls

There’s **zero** `document.createElement` or `appendChild`. Our markup describes the ideal DOM; React’s diffing engine reconciles it with reality. This is the declarative paradigm React embraces.