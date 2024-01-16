import { createSlice } from "@reduxjs/toolkit";

export const flightFilterData = createSlice({
  name: "API Data",
  initialState: {
    flightData: [],
  },
  reducers: {
    setValues: (state, action) => {
      state.flightData = [];
      state.flightData = action.payload;
    },
  },
});

export const { setValues } = flightFilterData.actions;
export default flightFilterData;
