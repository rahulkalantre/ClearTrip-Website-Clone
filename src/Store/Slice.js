import { createSlice } from "@reduxjs/toolkit";

export const apiData = createSlice({
  name: "API Data",
  initialState: {
    flightData: [],
  },
  reducers: {
    setValues: (state, action) => {
      state.flightData = action.payload;
    },
  },
});

export const { setValues } = apiData.actions;
export default apiData;