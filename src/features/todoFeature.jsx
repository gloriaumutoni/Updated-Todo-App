import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

let value=[]
let slice = createSlice({
  name: "input",
  initialState: value,
  reducers: {
    add: (state, action) => {
        const todo={
            id: nanoid(),
            isChecked: false,
            title: action.payload,
            deleted: false,
          }
          state.push(todo)
    },
    
  },
});

export default slice.reducer;
export const { add } = slice.actions;
