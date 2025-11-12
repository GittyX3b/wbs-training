Constructor Functions
=====================

#### Objective

Learn how to initialize objects using constructor functions in JavaScript and understand how to define properties and methods within a constructor function.

#### Instructions

1.  Create a constructor function called `Book`.
2.  The `Book` constructor function should initialize the following properties:
    *   `title`: a string representing the title of the book.
    *   `author`: a string representing the author of the book.
    *   `pages`: a number representing the total pages in the book.
    *   `isRead`: a boolean indicating if the book has been read or not.
3.  Add a method named `summary` to the prototype of the `Book` constructor. This method should return a string summarizing the book details in the format:
    *   `"Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]"`.

**Tip:** To add a method to a prototype using a constructor function, you need to do:

    YourObject.prototype.methodName = function(){}