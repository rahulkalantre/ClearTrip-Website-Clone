import { createSlice } from "@reduxjs/toolkit";

export const flightFilterData = createSlice({
  name: "API Data",
  initialState: {
    flightData: [],
    returnFlightData: [],
  },
  reducers: {
    setValues: (state, action) => {
      state.flightData = [];
      state.flightData = action.payload;
    },
    setReturnValues: (state, action) => {
      state.returnFlightData = [];
      state.returnFlightData = action.payload;
    },
  },
});

export const { setValues, setReturnValues } = flightFilterData.actions;
export default flightFilterData;
