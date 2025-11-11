JS Comparison
=============

In JavaScript, comparisons are essential for controlling the flow of execution based on conditions. You can perform comparisons using either simple or strict comparison operators. Let's explore both types, including examples that cover greater than and less than comparisons.

### Simple (Abstract) Comparison

Simple comparison operators (`==` and `!=`) perform type coercion if the operands are not of the same type. This means JavaScript will automatically convert the operands to a common type before comparing.

*   **Equal (`==`)**: Checks if the operands are equal after type coercion.
*   **Not Equal (`!=`)**: Checks if the operands are not equal after type coercion.

### Strict Comparison

Strict comparison operators (`===` and `!==`) do not perform type coercion. Both the value and the type of the operands must be the same for them to be considered equal.

*   **Strictly Equal (`===`)**: Checks if the operands are equal and of the same type.
*   **Strictly Not Equal (`!==`)**: Checks if the operands are not equal and/or not of the same type.

### Greater Than and Less Than

These operators allow comparisons of values to determine their order:

*   **Greater Than (`>`)**: Returns `true` if the left operand is greater than the right operand.
*   **Less Than (`<`)**: Returns `true` if the left operand is less than the right operand.
*   **Greater Than or Equal To (`>=`)**: Returns `true` if the left operand is greater than or equal to the right operand.
*   **Less Than or Equal To (`<=`)**: Returns `true` if the left operand is less than or equal to the right operand.

### Practical Tips for Using Comparison Operators:

1.  **Numerical Comparisons:** Use `>`, `<`, `>=`, `<=` for comparing numerical values where you want to test the relative size or order.
2.  **Equality Checks:** Prefer `===` and `!==` over `==` and `!=` to avoid type coercion and ensure type safety in comparisons.
3.  **Logical Decisions:** These operators are often used in control flow structures (like `if` statements) to make decisions based on comparing values.