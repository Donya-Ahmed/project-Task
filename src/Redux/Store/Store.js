import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "../Slices/CounterSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})