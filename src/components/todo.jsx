import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./searchbar";
import { useState } from "react";
import { add, complete, deleteItems } from "../features/todoFeature";

const Todo = () => {
  const todos = useSelector((state) => state.input);
  let dispatch = useDispatch();
  console.log(todos);
  const [input, setInput] = useState("");
  //   const [todo, setTodo] = useState(todos);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(add(input));
    setInput("");
  }

  function handleChecked(id) {
    dispatch(complete(id));
  }

  function handleDelete(id) {
    dispatch(deleteItems(id));
  }

  return (
    <div>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <form onSubmit={handleSubmit}>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        {todos &&
          todos.map((todo) => (
            <div
              className="flex justify-between"
              key={todo.id}
              isChecked={() => handleChecked(items.id)}
            >
              <input type="checkbox" /> <p>{todo.title}</p>
              <i
                onClick={() => handleDelete(todo.id)}
                className="fa-solid fa-trash text-[#f90b3b] text-center pr-3"
              />
            </div>
          ))}
      </form>
    </div>
  );
};

export default Todo;
