JS Loops
========

Loops in JavaScript are powerful tools that allow you to execute a block of code multiple times, making them essential for automating repetitive tasks and managing collections of items like arrays or objects. There are three primary types of loops: `for`, `while`, and `do...while`. Each has its use cases and is suited for different scenarios.

### 1\. For Loop

The `for` loop is the most commonly used loop when you know in advance how many times you want the loop to run. It includes three parts: initialization, condition, and incrementation, all enclosed within its parentheses.

*   **When to use**: Use a `for` loop for counting, iterating over arrays, or any situation where you know the loop should execute a specific number of times.

### 2\. While Loop

The `while` loop runs as long as the specified condition evaluates to `true`. The condition is evaluated before the execution of the loop's body begins.

*   **When to use**: The `while` loop is ideal when you are uncertain how many times the loop needs to run or when the condition depends on something computed within the loop body.

### 3\. Do...While Loop

The `do...while` loop is similar to the `while` loop, but it guarantees the loop's body will run at least once because the condition is checked after the body executes.

*   **When to use**: This loop is useful when you need the loop to run at least once, such as when you are prompting a user for input at least once and then checking the validity of that input.