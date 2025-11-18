Rendering lists
===============

#### Objective

In this exercise, you will learn how to render lists of data! Not only that, you'll have a closer look a React's data flow.

#### Instructions

*   Given the exisiting `students` array, render the `Student` component as many times as you need.
    *   There is a caveat: You will need to pass data to your component from within the `map` loop! How? Well, remember your component is nothing but a function, [you can pass arguments to your component by declaring props](https://react.dev/learn/passing-props-to-a-component) 
    *   Apply the necessary adjustments to the `Student` and `Grade` components so they take a `student`and `gpa` property respectively.
*   Don't forget about the `key` property!
*   Add additional styles so the cards look tidy together