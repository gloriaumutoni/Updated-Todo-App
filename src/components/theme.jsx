import { createContext, useState } from "react";
import Todo from "./todo";

export const context = createContext("");

const Theme = () => {
  const [themes, setThemes] = useState("light");

  const toggleTheme = () => {
    setThemes((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <context.Provider value={{ themes, toggleTheme }}>
      <div className={`mt-12`}>
        <button 
          className="py-1 px-2  text-white bg-gray-600" 
          onClick={toggleTheme}
        >
          {themes === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
      <Todo />
    </context.Provider>
  );
};

export default Theme;
