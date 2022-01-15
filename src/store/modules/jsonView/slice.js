import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const jsonViewSlice = createSlice({
  name: "jsonView",
  initialState: initialState,
  reducers: {
    setExpandAllState: (state, action) => {
      state.isExpandAll = action.payload;
    },
  },
});

export const { actions, reducer, name } = jsonViewSlice;
