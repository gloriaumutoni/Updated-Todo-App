import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

let value = [];
let slice = createSlice({
  name: "input",
  initialState: value,
  reducers: {
    add: (state, action) => {
      const todo = {
        id: nanoid(),
        isChecked: false,
        title: action.payload,
        deleted: false,
      };
      state.push(todo);
    },
    complete: (state, action) => {
     return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isChecked: !todo.isChecked,
            }
          : todo
      );
    },
    deleteItems: (state, action) => {
      return state.filter((obj) => obj.id !== action.payload);
    },
  },
});

export default slice.reducer;
export const { add, complete, deleteItems } = slice.actions;
