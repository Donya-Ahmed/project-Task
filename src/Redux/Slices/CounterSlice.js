import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllProducts = createAsyncThunk('counter/getAllProducts', async (_, { rejectWithValue }) => {
    console.log('hello');
    return await axios.get(`http://3.65.32.166/api/v2/storefront/products`)
    .then((res) => res)
    .catch((err) => rejectWithValue(err))
})
const initialState = {
    value: 0,
    allCourses:[]
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state, action) => {
                console.log('pending', action);
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.allCourses=action.payload.data.data
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                console.log('rejected', action);
            })


    }
})
export const { increment, decrement } = counterSlice.actions;
export const courses = (state) => state.counter.allCourses;
export default counterSlice.reducer