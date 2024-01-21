import { createSlice } from "@reduxjs/toolkit";

export const checkOutData = createSlice({
  name: "Flight Review Data",
  initialState: {
    bookNowReceivedData: [],
  },
  reducers: {
    setValues: (state, action) => {
      state.bookNowReceivedData = [];
      state.bookNowReceivedData = action.payload;
    },
  },
});

export const { setValues } = checkOutData.actions;
export default checkOutData;
