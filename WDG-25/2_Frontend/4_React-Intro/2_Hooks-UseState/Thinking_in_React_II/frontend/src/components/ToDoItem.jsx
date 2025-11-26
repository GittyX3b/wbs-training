const ToDoItem = ({ todo, toggleTodo }) => {
  console.log(todo.completed);
  return (
    <li className="mb-2 flex items-center">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2 text-red-300"
        />
        <span className={`${todo.completed && "line-through"}`}>
          {todo.text}
        </span>
      </label>
    </li>
  );
};

export default ToDoItem;
