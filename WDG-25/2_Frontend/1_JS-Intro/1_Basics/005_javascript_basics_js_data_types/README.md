JS Data Types
=============

In JavaScript, data types are the classifications we give to different kinds of data that we use in programming. Understanding these is crucial as they affect what operations can be performed on data. Here are the fundamental data types in JavaScript:

1.  **String**
    
    *   Represents textual data. It's how you work with text in JavaScript. Strings are enclosed in single quotes (' '), double quotes (" "), or backticks (\` \`).
    *   Example: `let greeting = "Hello, world!";`
2.  **Number**
    
    *   Represents both integer and floating-point numbers. JavaScript has a single number type, and it can handle numbers of virtually any size until a certain limit.
    *   Example: `let age = 25;`
3.  **BigInt**
    
    *   An extension of the Number type that can handle integers of arbitrary size. Useful when dealing with very large numbers that Number cannot safely represent.
    *   Example: `let largeNumber = 1234567890123456789012345678901234567890n;`
4.  **Boolean**
    
    *   Represents a logical entity and can have two values: `true` and `false`. Useful in decision-making operations.
    *   Example: `let isJavaScriptFun = true;`
5.  **Undefined**
    
    *   A variable that has not been assigned a value has the type `undefined`.
    *   Example: `let items;` // items is undefined
6.  **Null**
    
    *   Represents the intentional absence of any object value. It is used to indicate that a variable should hold "nothing" or "no value".
    *   Example: `let user = null;`
7.  **Symbol**
    
    *   Introduced in ECMAScript 2015, symbols are unique and immutable data types and may be used as identifiers for object properties. Each time you create a symbol, it is completely unique.
    *   Example: `let sym = Symbol('a unique identifier');`
8.  **Object**
    
    *   Represents instances of classes, arrays, and complex data structures. An object in JavaScript is a collection of properties, where each property is a key-value pair.
    *   Example: `let car = {make: 'Toyota', model: 'Corolla', year: 2005};`