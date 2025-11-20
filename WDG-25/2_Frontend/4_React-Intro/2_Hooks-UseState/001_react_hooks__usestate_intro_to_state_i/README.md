Intro to state I
================

So far we’ve used React as templating engine where we simply describe our markup and then, based on some simple logic, render this or that; but the true power of React resides in changing the UI efficiently based on the data within our application. 

Whether it’s a counter indicating how many items we have in our shopping cart, the values in inputs in a form or data appearing as a result of a network request, React allows us to describe different versions of our UI to render according to our data. 

To do so, React relies on state. A special kind of variable we can declare within our components. Setting a value for this variable doesn’t really change the variable you already have, rather it triggers a re-render.

### Rendering?

Rendering is just React calling your components; remember they are nothing but functions. Consider this example.

When React calls this component for the first time, the output will eventually be reflected in the actual DOM and it should look something like this:

<button>-</button>0<button>+</button>

There are a couple of things to point out from this example:

*   The events are nowhere to be seen.
*   The value of counter was properly added to the markup.
*   Clicking the buttons does nothing at all to change that variable 😭… or does it? check the console! The variable is changing but React is never informed that it should re-render!

Let’s not forget that React is simply an intermediary between your app and the actual DOM!

*   React calls yours components ⇒ Rendering
*   React determines changes if any ⇒ Reconciliation
*   React applies the resulting markup to the DOM using the same old DOM API⇒ Committing

But this only applies to the first time a component renders! What if data needs to change? Enter **state**