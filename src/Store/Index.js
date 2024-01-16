import { configureStore } from "@reduxjs/toolkit";
import { apiData } from "./Slice";
import flightFilterData from "./filterSlice";

const store = configureStore({
    reducer: {
        data: apiData.reducer, filterData: flightFilterData.reducer
    }
})

export default store;

