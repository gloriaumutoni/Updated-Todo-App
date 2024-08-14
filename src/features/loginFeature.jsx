import { createSlice } from "@reduxjs/toolkit";

    const slice=createSlice({
        name:'user',
        initialState:{value:{name:'',age:0,email:''}},
        reducers:{
login:(state,action)=>{
    state.value=action.payload
}
        }
    })


 
export default slice.reducer;
export const {login}=slice.actions