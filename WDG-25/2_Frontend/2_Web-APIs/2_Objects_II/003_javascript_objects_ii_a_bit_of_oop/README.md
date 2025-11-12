A bit of OOP
============

Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to design applications and programs.

A programming paradigm is a fundamental style or approach to programming and problem-solving in software development. It provides a way to think about and structure code, guiding how programmers write and organize their programs.

Objects are instances of classes, which can contain data (attributes or properties) and methods (functions).

OOP focuses on four main principles: Encapsulation, Abstraction, Inheritance, and Polymorphism. These principles help create modular, reusable, and maintainable code.  
  

*   **Encapsulation:** It's about bundling of data (properties) and methods that operate on that date into a sinlge unit to control how data is accessed and modified. The `Character` class encapsulates the properties and methods related to a game character.
*   **Abstraction:** It's about hiding implementation details. We interact with the character through its public methods without needing to know the internal details.
*   **Inheritance:** The `Wizard` class inherits from `Character`, adding their unique properties and methods.
*   **Polymorphism:** It's about the ability of objects to respond to the same method in different ways. The `Character` and the `Wizard` both have a `greet` method but they do different things.