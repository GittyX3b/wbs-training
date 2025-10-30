JS Objects
==========

"Everything in JavaScript is an object..."

...well, except for the 7 primitives: string, number, bigint, boolean, undefined, symbol and null. But it doesn't sound as cool. 

Let's settle with "(almost) Everything in JavaScript is an object"  
  
JavaScript objects are incredibly versatile and fundamental to much of JavaScript programming. They are used to store collections of data and more complex entities.

 In the context of JavaScript, the simplest and most direct way to create an object is by using object literals. Object literals are defined using curly braces `{}`, with an optional list of properties.

### Understanding Object Literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces. Properties are defined as key-value pairs, and the key (or name) and value are separated by a colon.

### Properties

*   **Keys** are usually strings (or Symbols), but if they are not in a string format, they will be converted to a string.
*   **Values** can be any data type, including numbers, strings, arrays, functions, and even other objects.

Accessing properties in a JavaScript object is straightforward but versatile, allowing several methods to retrieve and manipulate the data stored within. Here are the primary ways you can access properties in an object:

### 1\. Dot Notation

Dot notation is the most common and direct method to access the value of a property. It involves using a dot (`.`) followed by the property name. This method is clean and easy to read, and it's typically used when you know the name of the property and it follows JavaScript naming conventions (i.e., it doesn’t start with a number, doesn't contain spaces or special characters other than `_` and `$`).

### 2\. Bracket Notation

Bracket notation allows you to access a property using a string that represents the property name. This method is especially useful in two scenarios: when the property name is stored in a variable, and when the property name contains characters that aren’t legal in JavaScript identifiers (like spaces or hyphens) or is dynamically determined (like numbers at the start).