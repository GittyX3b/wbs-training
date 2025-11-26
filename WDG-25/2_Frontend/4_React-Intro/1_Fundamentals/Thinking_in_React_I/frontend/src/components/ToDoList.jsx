import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, setTodos, filter }) => {
  let filteredTodos = [];

  switch (filter) {
    case "active":
      filteredTodos = todos.filter((todo) => !todo.completed);
      break;
    case "completed":
      filteredTodos = todos.filter((todo) => todo.completed);
      break;
    case "all":
    default:
      filteredTodos = todos;
      break;
  }

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default ToDoList;
