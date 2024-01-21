import { configureStore } from "@reduxjs/toolkit";
import apiData from "./Slice";
import flightFilterData from "./filterSlice";
import checkOutData from "./checkoutPageSlice";

const store = configureStore({
    reducer: {
        data: apiData.reducer, filterData: flightFilterData.reducer, bookingData: checkOutData.reducer,
    }
})

export default store;

