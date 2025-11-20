Objects and arrays
==================

On the topic of `arrays` and `objects`, here are some tips on how to update pieces of state that hold these complex structures.

First, notice we can simply set an object in state. Second, we will never try to directly mutate the object

`form.email = e.target.value`? NEVER!

Instead, we are using some tricks under our sleeve:

*   We are providing every input field and the textarea with a `name` attribute and passing an `arrays` handler
*   From within the handler, we retrieve the target name and value
*   We set the new value of form with the spread operator
*   Using \[ \] we can dynamically set properties! e.g. if `e.target.name` is `email` it'd look like `{...form, ['email']: e.target.value}`

This creates a new object with all the old values, except one is replaced. This triggers a re-render — the React way.  
  
BTW, remember we mentioned inputs, textareas, selects and friends keep their own value (state) natively as HTML elements? This is still true in this example, we are simply controlling those values to wire them directly to React in order to keep React as the source of truth. Basic forms might not need this, but if you need immediate feedback on a form input, [controlled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) are the way to go.