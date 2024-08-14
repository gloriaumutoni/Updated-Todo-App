import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
  name: "input",
  initialState: {
    value: { id: '', isChecked: false, title: input, deleted: false },
  },
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default slice.reducer;
export const { add } = slice.actions;
