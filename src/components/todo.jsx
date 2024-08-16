import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./searchbar";
import { useState, useContext } from "react";
import { add, complete, deleteItems } from "../features/todoFeature";
import { context } from "./theme";

const Todo = () => {
  const todos = useSelector((state) => state.input);
  let dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { themes } = useContext(context);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      dispatch(add(input));
      setInput("");
    }
  }

  function handleChecked(id) {
    dispatch(complete(id));
  }

  function handleDelete(id) {
    dispatch(deleteItems(id));
  }

  return (
    <div
      className={`${
        themes === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="text-center flex justify-between h-[40px] w-[30%] mx-auto">
        <h2 className="font-medium text-8xl">todos</h2>
      </div>
      <form className="pt-16" onSubmit={handleSubmit}>
        <SearchBar
          handleChange={handleChange}
          value={input}
          handleSubmit={handleSubmit}
        />
      </form>
      {todos &&
        todos.map((todo) => (
          <div
            className="flex justify-between w-[40%] mx-auto pt-10"
            key={todo.id}
          >
            <input type="checkbox" onClick={() => handleChecked(todo.id)} />
            <p className={`${todo.isChecked ? "line-through" : ""}`}>
              {todo.title}
            </p>
            <i
              onClick={() => handleDelete(todo.id)}
              className="fa-solid fa-trash text-[#f90b3b] text-center pr-3"
            />
          </div>
        ))}
    </div>
  );
};

export default Todo;
