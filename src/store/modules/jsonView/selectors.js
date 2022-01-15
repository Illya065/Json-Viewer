import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./state";

const selectDomain = (state) => state.jsonView || initialState;

export const selectExpandAllState = createSelector(
  [selectDomain],
  (jsonViewState) => jsonViewState.isExpandAll
);
