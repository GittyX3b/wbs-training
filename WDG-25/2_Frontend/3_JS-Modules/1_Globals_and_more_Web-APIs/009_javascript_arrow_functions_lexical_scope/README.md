Lexical Scope
=============

Consider the `instructor` object.

Since we know the `this` keyword refers to the current object, we can assume

that `this` in the `sayHello` method, refers to the current object, meaning, when calling the method, `this` refers to instructor and we can retrieve the name property.

Works like a charm.  
  

Now pay attention to the invocation of the `teach` method in line 15... what happened to Garrett?

If you uncomment line 10, you'll see `this` is undefined... but why?

  

Because `this` refers now to the global scope. In our case, since this code is running in a JS Module (ESM) the global value of `this` is `undefined`, in a regular non-module script, `this` refers to the `Window`!

For a function declaration or function expressions created with the `function` keyword, the value of `this` depends upon where the function is called and not where the function is declared. For instance, the `sayHello` is directly called by the `instructor` object, but the anonymous function passed to the `forEach` is called internally by the `forEach` method where the value of `this` binds to the global scope.  
  
But arrow functions have what is called as **lexical scope**: the value of `this` binds to the scope that surrounds the function when it's declared, keeping that reference wherever it's called!  
  
Remove the `function` keyword on line 8 and add an `=>` between the parentheses and the  curly braces. Everything works as expected.