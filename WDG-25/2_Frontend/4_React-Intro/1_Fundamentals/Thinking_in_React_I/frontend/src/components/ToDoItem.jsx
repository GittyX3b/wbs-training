import { useState } from "react";

const ToDoItem = ({ todo, setTodos }) => {
  const handleClick = () => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  };

  return (
    <li className="mb-2 flex items-center">
      <label>
        <input
          type="checkbox"
          checked={todo.completed} // Use 'checked' instead of 'defaultChecked' for controlled components
          className="mr-2"
          onChange={handleClick} // Use 'onChange' for better accessibility with checkboxes
        />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoItem;
