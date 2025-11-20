Basic Examples
==============

#### React state isn’t just for counters

You’ve already seen state in the context of a simple number, but it’s just as useful for handling text inputs, checkboxes, and small form logic. These are real-world interactions your UI will need all the time.

#### What actually happens when state changes?

1.  React renders your component using the initial value
    
2.  The output gets committed to the DOM
    
3.  You update state (by typing, clicking, checking)
    
4.  React re-renders that component (and its children if needed)
    
5.  React compares the new tree with the old one using the Virtual DOM
    
6.  React applies only the changes needed to update the UI
    

Preeeeetty neat.