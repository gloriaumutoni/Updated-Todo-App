import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./searchbar";
import { useState } from "react";
import { add, complete } from "../features/todoFeature";

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
    dispatch(complete(id))    
  }

  return (
    <div>
      <h2 className="text-center font-medium text-8xl text-gray-200">todos</h2>
      <form onSubmit={handleSubmit}>
        <SearchBar handleChange={handleChange}  handleSubmit={handleSubmit}/>
        {todos && todos.map((todo) => <p 
        key={todo.id}
        isChecked={() => handleChecked(items.id)}
        >
            {todo.title}</p>)}
      </form>
    </div>
  );
};

export default Todo;
