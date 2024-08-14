import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./searchbar";
import { useState } from "react";
import { add } from "../features/todoFeature";

const Todo = () => {
  const todos = useSelector((state) => state.input);
  let dispatch = useDispatch();
console.log(todos)
  const [input, setInput] = useState("");
//   const [todo, setTodo] = useState(todos);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input)
    dispatch(add(input));
    setInput("");
  }

  return (
    <div>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <form onSubmit={handleSubmit}>
        <SearchBar handleChange={handleChange} />
        {todos && todos.map(todo=><p key={todo.id}>{todo.title}</p>)}
      </form>
    </div>
  );
};

export default Todo;
