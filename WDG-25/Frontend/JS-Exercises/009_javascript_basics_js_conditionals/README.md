JS Conditionals
===============

Control flow in JavaScript is fundamental for directing how your programs make decisions and execute different code blocks based on specific conditions. The primary tools for this are the `if`, `else`, `else if` statements, the `switch` statement, and the ternary operator. Each serves a unique purpose and has its own ideal use cases.

### 1\. If, Else, and Else If

The `if` statement is used to execute a block of code only if a specified condition is true. If the condition is false, you can use an `else` statement to execute a different block of code. The `else if` statement can be used between `if` and `else` to test additional conditions.

*   **When to use**: Use `if`, `else if`, and `else` when you need to execute different blocks of code based on several conditions. This is especially useful when the decisions are not too complex or numerous.

### 2\. Switch Statement

A `switch` statement allows you to perform different actions based on different conditions. It's particularly effective when you have many possible conditions because it's easier to read and write than multiple `if` statements.

*   **When to use**: Opt for a `switch` statement when comparing the same variable or expression against a variety of possible values. It's clearer and more concise than many chained `if-else-if` statements, especially when dealing with enumerated values.

### 3\. Ternary Operator

The ternary operator is a shorthand way of writing simple `if-else` statements. It takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is true, followed by a colon (`:`), and finally the expression to execute if the condition is false.

*   **When to use**: The ternary operator is best for simple conditional assignments or when you need a concise way to decide between two values. It helps streamline code that only requires a quick decision between two options.