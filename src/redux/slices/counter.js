import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
name:'counter',
initialState:{count:0},
reducers:{
    incrementCount:(state,action)=>{
        state.count = state.count+1
    },
    decrementCount:(state,action)=>{
        state.count = state.count-1
    }
}

})

export const {incrementCount,decrementCount}=counterSlice.actions
export default counterSlice.reducer