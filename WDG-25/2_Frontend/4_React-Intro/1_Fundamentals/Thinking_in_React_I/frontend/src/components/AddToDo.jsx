const AddToDo = ({ setTodos, itemId, setItemId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.todo.value;
    if (!value) return;
    setItemId((prev) => prev + 1);
    setTodos((prev) => [
      ...prev,
      { id: itemId, text: value, completed: false },
    ]);
    e.target.todo.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        placeholder="Add a new to-do"
        className="mr-2 flex-1 rounded border px-2 py-1"
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
