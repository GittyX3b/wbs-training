# 🧩 ToDo app + Context API

We wrote a ToDo list app together a while ago, remember it?

Well, if you don’t, go [here](https://github.com/WebDev-WBSCodingSchool/thinking-in-react) to refresh your memory. The tutorial has 2 parts:

- 🧩 Thinking in React I
- 🧩 Thinking in React II

Your task is very simple: implement the Context API

### Instructions:

    - Implement Context API by creating a context
        - Create a context directory to keep things tidy

    - Refactor App
        - Stop passing todos ,setTodos , filter, setFilter and toggleTodo to the components as props

    - Refactor children components
        - Each component should consume the context
        - You can also relocate the filteredTodos function in the component that actually uses it.



Bonus points if you implement a reducer in the context provider to consolidate all the state and expose the dispatch function instead! 🎉

And that’s it! It’s a simple task but a very good example of how data can be centralised and shared via the Context API.
