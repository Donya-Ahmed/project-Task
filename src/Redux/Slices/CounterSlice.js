import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllProducts = createAsyncThunk('counter/getAllProducts', async (_, { rejectWithValue }) => {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`).then((res) => res).catch((err) =>rejectWithValue(err))
})
const initialState = {
    value: 0
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
                console.log('pending',action);
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                console.log('fulfilled',action);
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                console.log('rejected',action);
            })


    }
})
export const { increment, decrement } = counterSlice.actions;
export const counterValue = (state) => state.counter.value;
export default counterSlice.reducer